import adminDb from "@/firebaseAdmin";
import admin from 'firebase-admin';
import { newQuery } from "@/lib/queryApi";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { prompt, session } = req.body;

    if (!prompt) {
      res.status(400).json({ answer: "Please provide a valid query!" });
      return;
    }

    const userRef = adminDb.collection("users").doc(session?.user?.email);
    const plans = ['free', 'gold', 'premium'];
    const usersPlan = plans[0]; // Placeholder for getting user's plan
    const TOKENS_ALLOWED = usersPlan === "free" ? 10000 : usersPlan === "gold" ? 50000 : 100000;

    const currentDate = new Date();
    const currentMonthYear = `${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
    const tokensUsedDoc = await userRef.collection("tokensUsed").doc(currentMonthYear).get();
    const tokensUsed = tokensUsedDoc.exists ? tokensUsedDoc.data()?.tokensUsed || 0 : 0;
    if (tokensUsed >= TOKENS_ALLOWED) {
      res.status(305).json({ answer: "You have consumed all your free credit tokens. Upgrade now to start using more!" });
      return;
    }

    const response = await newQuery(prompt, "gpt-3.5-turbo");
    const message = {
      tokensUsed: response?.tokensUsed!,
      text: response?.text || "Content Writer could not write content for that!",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: 'Content Writer',
        name: 'Content Writer',
        avatar: "/bot.svg"
      }
    };

    const currentTokensUsed = tokensUsedDoc.exists ? tokensUsedDoc.data()?.tokensUsed || 0 : 0;
    const newTokensUsed = currentTokensUsed + message.tokensUsed;

    const batch = adminDb.batch();
    batch.set(userRef.collection("tokensUsed").doc(currentMonthYear), { tokensUsed: newTokensUsed });
    await batch.commit();

    res.status(200).json({ answer: message.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ answer: "An error occurred while processing the request." });
  }
}
