'use client'
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
type Props = {
    title: string | null;
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}
function Dialog({ title, setIsDialogOpen }: Props) {
    const { data: session } = useSession();
    
    async function handleSubscription(price: Price) {
        const { data } = await axios.post('/api/payment',
            { price: price.id, userSession: session, userEmail: session?.user?.email },
            { headers: { "Content-Type": "application/json", } }
        );

        window.location.assign(data)
    }
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getProducts = async () => {
        setIsLoading(true)
        const response = await fetch('/api/products/getproducts');
        const data = await response.json();
        setIsLoading(false);
        setProducts(data)
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="md:top-16 md:left-80 fixed top-0 left-0 z-100 w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold dark:text-gray-100 text-gray-900">
                            {title}
                        </h3>
                        <button onClick={() => setIsDialogOpen(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="flex md:flex-row space-y-4 flex-col py-6">
                        <div className="md:w-1/3 w-full border-r border-r-gray-700 flex flex-col space-y-2 justify-center px-4">
                            <h3 className="text-xl font-bold dark:text-gray-100">Free Plan</h3>
                            <button className="disabled:opacity-50 rounded disabled:cursor-not-allowed btn relative btn-primary border-none bg-gray-600 py-3 font-semibold text-gray-900 dark:bg-gray-500 dark:opacity-100" disabled>Your Current Plan</button>
                            <span className="text-gray-100">Free</span>
                            <ul className="pt-2">
                                <li className="text-gray-100 flex md:justify-center sm:mb-2"><CheckCircleIcon className="mx-2 text-green-600 w-8 h-8" />10,000 words per month</li>
                                <li className="text-gray-100 flex md:justify-center"><CheckCircleIcon className="mx-2 text-red-600 w-8 h-8 flex-shrink" />Recaptcha on every request</li>
                            </ul>
                        </div>
                        {products && products.map((product: Price) => {
                            function dynamicSubtitle(price: Price) {
                                if (price.nickname === "Premium Plan") {
                                    return "100 thousand"
                                }
                                return "50 thousand"
                            }
                            const spaceIndex = product.nickname.indexOf(" ");
                            const extractedSubstring = product.nickname.substring(0, spaceIndex);
                            if (isLoading) return <Loader />;
                            else {
                                return (<div key={product.id} className="md:w-1/3 !mt-0 border-r border-r-gray-700 w-full flex flex-col space-y-2 justify-center px-4">
                                    <h3 className="text-xl font-bold dark:text-gray-100">{product.nickname}</h3>
                                    <button onClick={() => handleSubscription(product)} className="disabled:opacity-50 rounded disabled:cursor-not-allowed btn relative btn-primary border-none bg-gray-600 hover:bg-gray-400 py-3 font-semibold text-gray-900 dark:bg-gray-500 dark:opacity-100">Upgrade to {extractedSubstring}</button>
                                    <span className="text-gray-100">{(product.unit_amount / 100).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })}
                                    </span>
                                    <ul className="pt-2">
                                        <li className="text-gray-100 flex md:justify-center sm:mb-2"><CheckCircleIcon className="mx-2 text-green-600 w-8 h-8" />{dynamicSubtitle(product)} words per month</li>
                                        <li className="text-gray-100 flex md:justify-center"><XCircleIcon className="mx-2 text-red-600 w-8 h-8 flex-shrink" />Recaptcha on every request</li>
                                    </ul>
                                </div>)
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog