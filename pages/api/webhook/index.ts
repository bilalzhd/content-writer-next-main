import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: "2022-11-15"});

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        let event;
        
        try {
            // 1. Retrieve the event
            const rawBody = await buffer(req);
            const signature = req.headers['stripe-signature'];
            if(signature && process.env.STRIPE_WEBHOOK_SECRET) {
                event = stripe.webhooks.constructEvent(rawBody.toString(), signature, process.env.STRIPE_WEBHOOK_SECRET)
            } else {
                throw new Error("Invalid signature");
            }
        } catch (error: any) {
            console.error(`Error message: ${error.message}`);
            res.status(400).send("webhook error " + error.message);
            return;
        }

        console.log("success");
        if(event.type == "checkout.session.completed") {
            console.log("payment recieved");
        } else {
            console.warn("Unhandled event type: " + event.type);
        }

        res.json({received: true})

    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed');
    }
}