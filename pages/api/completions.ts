import type { NextApiRequest, NextApiResponse } from "next";
import { newQuery } from "@/lib/queryApi";
import admin from 'firebase-admin';
import adminDb from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { prompt, chatId, model, session } = req.body;
  if (!session || !prompt || !chatId) {
    res.status(400).json({ answer: "Please provide valid parameters!" });
    return;
  }

  const userRef = adminDb.collection("users").doc(session?.user?.email);
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
  try {
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

    const currentTokensUsed = tokensUsedDoc.exists ? tokensUsedDoc.data()?.tokensUsed || 0 : 0;
    const newTokensUsed = currentTokensUsed + message.tokensUsed;

    const batch = adminDb.batch();
    batch.set(userRef.collection("tokensUsed").doc(currentMonthYear), { tokensUsed: newTokensUsed });
    batch.set(adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").doc(), message);

    await batch.commit();

    res.status(200).json({ answer: message.text });
  } catch (err) {
    res.status(504).json({ answer: "An unexpected error occured, try again!" });
  }

}



// import type { NextApiRequest, NextApiResponse } from "next";
// import { newQuery } from "@/lib/queryApi";
// import admin from 'firebase-admin';
// import adminDb from "@/firebaseAdmin";
// const API_URL = "https://api.openai.com/v1/chat/completions"
// type Data = {
//   answer: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   const { prompt, chatId, model, session } = req.body;
//   if (!session || !prompt || !chatId) {
//     res.status(400).json({ answer: "Please provide valid parameters!" });
//     return;
//   }

//   const userRef = adminDb.collection("users").doc(session?.user?.email);
//   const plans = ['free', 'gold', 'premium'];
//   const usersPlan = plans[0];
//   const TOKENS_ALLOWED = usersPlan == "free" ? 10000 : usersPlan == "gold" ? 50000 : 100000;

//   const currentDate = new Date();
//   const currentMonthYear = `${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
//   const tokensUsedDoc = await userRef.collection("tokensUsed").doc(currentMonthYear).get();
//   const tokensUsed = tokensUsedDoc.exists ? tokensUsedDoc.data()?.tokensUsed || 0 : 0;
//   if (tokensUsed >= TOKENS_ALLOWED) {
//     res.status(305).json({ answer: "You have consumed all your free credit tokens. Upgrade now to start using more!" });
//     return;
//   }

//   try {
//     // Fetch the response from the OpenAI API with the signal from AbortController
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: prompt }],
//         max_tokens: 100,
//         stream: true, // For streaming responses
//       }),
//     });

//     // Read the response as a stream of data
//     const reader = response?.body?.getReader();
//     const decoder = new TextDecoder("utf-8");

//     while (true) {
//       const { done, value } = await reader?.read();
//       const chunk = decoder.decode(value);
//       const lines = chunk.split("\n");
//       const parsedLines = lines
//         .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
//         .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
//         .map((line) => JSON.parse(line)); // Parse the JSON string
//       let response;
//       for (const parsedLine of parsedLines) {
//         const { choices } = parsedLine;
//         const { delta } = choices[0];
//         const { content } = delta;
//         // Update the UI with the new content
//         if (content) {
//           response += content;
//         }
//       }
//       if (done) {
//         const message: ServerMessage = {
//           tokensUsed: 100,
//           text: response || "Content Writer could not write content for that",
//           createdAt: admin.firestore.Timestamp.now(),
//           user: {
//             _id: 'Content Writer',
//             name: 'Content Writer',
//             avatar: "/bot.svg"
//           }
//         };
//         const currentTokensUsed = tokensUsedDoc.exists ? tokensUsedDoc.data()?.tokensUsed || 0 : 0;
//         const newTokensUsed = currentTokensUsed + message.tokensUsed;
//         const batch = adminDb.batch();
//         batch.set(userRef.collection("tokensUsed").doc(currentMonthYear), { tokensUsed: newTokensUsed });
//         batch.set(adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").doc(), message);

//         await batch.commit();
//         break;
//       }
//     }
//   } catch (error) {
//     // Handle fetch request errors
//     console.error("Error:", error);
//     res.status(500).json({ answer: "error" })
//   }
// }
