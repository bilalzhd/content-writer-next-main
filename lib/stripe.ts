import { loadStripe } from '@stripe/stripe-js';

let stripePromise: any = null;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY!);
    }
    return stripePromise;
}
export default getStripe;