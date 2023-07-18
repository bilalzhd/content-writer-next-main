import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15'
});
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const id = req.query.id as string;

    function startsWith(str: string | undefined, prefix: string) {
        if (str == undefined) {
            return false;
        }
        return str.slice(0, prefix.length) === prefix;
    }

    try {
        if (!startsWith(id, 'cs_')) {
            throw Error('Incorrect checkout session ID');
        }
        const checkout_session = await stripe.checkout.sessions.retrieve(id);
        res.status(200).json(checkout_session);

    } catch (error: any) {
        res.status(500).json({ statusCode: 500, message: error.message });
    }
}
