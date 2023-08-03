// import adminDb from "@/firebaseAdmin";
// import { NextApiRequest, NextApiResponse } from "next";
// import { useSession } from "next-auth/react";


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const {userSession} = req.body

//     // const userRef = adminDb.collection("users").doc(userSession?.user?.email);
//     // const userSnapshot = await userRef.get();
//     // const userData = userSnapshot.data();
//     res.json(userSession?.user?.email);
// }

import adminDb from "@/firebaseAdmin";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userSession } = req.body;
    const userEmail = userSession?.user?.email;

    if (!userEmail) {
      return res.status(400).json({ error: 'User email not available in the session.' });
    }

    // Optionally, you can fetch the user data from Firestore if needed
    // const userRef = adminDb.collection("users").doc(userEmail);
    // const userSnapshot = await userRef.get();
    // const userData = userSnapshot.data();

    res.json({ email: userEmail }); // Sending the email back in the response

  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}
