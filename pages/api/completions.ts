import type { NextApiRequest, NextApiResponse } from "next";
import query, { newQuery } from "@/lib/queryApi";
import admin from 'firebase-admin';
import adminDb from "@/firebaseAdmin";

type Data = {
    answer: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { prompt, chatId, model, session } = req.body;
    const userRef = adminDb.collection("users").doc(session?.user?.email);
    // Get the plan from the user docs plan
    const plans = ['free', 'gold', 'premium'];
    const usersPlan = plans[0];
    const TOKENS_ALLOWED = usersPlan == "free" ? 10000 : usersPlan == "gold" ? 50000 : 100000;
    
    const currentDate = new Date();
    const currentMonthYear = `${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`; 
    const tokensUsedDoc = await userRef.collection("tokensUsed").doc(currentMonthYear).get();
    const tokensUsed = tokensUsedDoc.exists ? tokensUsedDoc.data()?.tokensUsed || 0 : 0;


    if (tokensUsed >= TOKENS_ALLOWED) {
        res.status(305).json({ answer: "You have consumed all your free credit tokens. Upgrade now to start using more!" });
        return;
    }

    if (!prompt) {
        res.status(205).json({ answer: "Please provide a prompt!" });
        return;
    }
    if (!chatId) {
        res.status(400).json({ answer: "Please provide a valid Chat ID!" });
        return;
    }
    const response = await newQuery(prompt, model);
    const message: ServerMessage = {
        tokensUsed: response?.tokensUsed!,
        text: response?.text || "Content Writer could not write content for that",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'Content Writer',
            name: 'Content Writer',
            avatar: "/bot.svg"
        }
    };

    let currentTokensUsed = 0;
    if (tokensUsedDoc.exists) {
        const data = tokensUsedDoc.data();
        currentTokensUsed = data?.tokensUsed || 0;
    }
    const newTokensUsed = currentTokensUsed + message.tokensUsed;
    await userRef.collection("tokensUsed").doc(currentMonthYear).set({ tokensUsed: newTokensUsed })
    await adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message)

    res.status(200).json({ answer: message.text })
}

