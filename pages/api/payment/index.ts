import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import adminDb from "@/firebaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!process.env.STRIPE_SECRET_KEY) {
        res.status(400);
        return;
    }
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        'apiVersion': '2022-11-15'
    })
    try {
        const { price, userSession, userEmail } = req.body;
        

        if (!userEmail) { throw new Error("No email in the firestore") }

        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: [{ price: price, quantity: 1 }],
            success_url: `https://content-writing.net/?success=true`,
            cancel_url: `https://content-writing.net/?success=false`
        });

        return res.json(session.url);

    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
}