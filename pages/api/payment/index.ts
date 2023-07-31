import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!process.env.STRIPE_SECRET_KEY) {
        res.status(400);
        return;
    }
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        'apiVersion': '2022-11-15'
    })
    let { price } = req.body;
    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [{price: price, quantity: 1}],
        success_url: `https://content-writing.net/?success=true`,
        cancel_url: `https://content-writing.net/?success=false`
    })
    return res.json(session.url);
}