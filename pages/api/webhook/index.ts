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
            // 1. Ret
            const rawBody = await buffer(req);
        } catch (error) {
            
        }

    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed');
    }
}