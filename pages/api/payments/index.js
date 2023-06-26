import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export default async function handler(request, res) {
    if (request.method === "POST") {
        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card'],
                line_items: [{
                    price: "price_1NL9fASBzyvhTBqfpnzHTPsz"
                }],
                success_url: `${request.headers.origin}/sucess?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${request.headers.origin}/`,
            });

            res.status(200).json(session)


        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err})
        }


    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end("Method Not Allowed");
    }

}
