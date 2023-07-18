import getStripe from '@/lib/stripe';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import axios from 'axios'
// import { useSession } from 'next-auth/react';
import React from 'react';


const PricingCard: React.FC<PricingCardProps> = ({ price }) => {

    async function handleSubscription() {
        const {data : {id}} = await axios.post('/api/checkout_sessions', {
            price: price.id 
        });

        const stripe = await getStripe();
        await stripe.redirectToCheckout({sessionId: id})
    }
    function dynamicSubtitle(price: Price) {
        if (price.nickname === "Premium Plan") {
            return "100 thousand"
        }
        return "50 thousand"
    }
    return (
        <div className="relative z-0 w-11/12 max-w-sm my-8 border border-gray-200 rounded-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-mr-4">
            <div className="overflow-hidden text-black bg-white border-t border-gray-100 rounded-lg shadow-sm">
                <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                    <h3 className="p-3 text-lg font-bold tracking-wide text-center uppercase">
                        {price.nickname}
                    </h3>
                    <h4 className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                        {/* <span className="mr-1 -ml-2 text-lg text-gray-700">$</span> */}
                        {(price.unit_amount / 100).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        })}
                    </h4>
                    <p className="text-sm text-gray-600">
                        In our basic plan you can take advantage of all these
                        features below.
                    </p>
                </div>

                <div className="flex flex-wrap px-6 mt-8">
                    <ul>
                        <li className="flex items-center">
                            <div className="p-2 text-green-500 rounded-full fill-current ">
                                <CheckCircleIcon className="h-8 w-8" />
                            </div>
                            <span className="ml-3 text-lg text-gray-700">
                                {dynamicSubtitle(price)} words per month
                            </span>
                        </li>
                        <li className="flex items-center">
                            <div className="p-2 text-green-500 rounded-full fill-current ">
                                <XCircleIcon className="h-8 w-8" />
                            </div>
                            <span className="ml-3 text-lg text-gray-700">
                                Recaptcha
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center p-8 uppercase">
                    <button onClick={handleSubscription} className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-indigo-600">
                        Select This Plan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard