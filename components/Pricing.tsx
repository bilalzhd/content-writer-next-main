'use client'
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";
import Loader from "./Loader";

export default function Pricing() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProducts = async () => {
    setIsLoading(true)
    const response = await fetch('/api/products/getproducts');
    const data = await response.json();
    setIsLoading(false);
    setProducts(data)

    return data;
  }
  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div className="relative px-8 py-10 bg-white border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
      <div
        id="pricing"
        className="container flex flex-col items-center h-full max-w-6xl mx-auto"
      >
        <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
          Our Pricing
        </h2>
        <h3 className="w-full max-w-4xl px-5 mt-2 text-2xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
        Unbelievably powerful but incredibly inexpensive
        </h3>

        {!isLoading ? <div className="max-w-full mx-auto md:max-w-6xl sm:px-8">
          <div className="relative flex flex-col items-center sm:flex-row">
            <div className="relative z-0 w-11/12 max-w-sm my-8 border border-gray-200 rounded-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-mr-4">
              <div className="overflow-hidden text-black bg-white border-t border-gray-100 rounded-lg shadow-sm">
                <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                  <h3 className="p-3 text-lg font-bold tracking-wide text-center uppercase">
                    Free
                  </h3>
                  <h4 className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                    <span className="mr-1 -ml-2 text-lg text-gray-700">$</span>
                    0
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
                        10 thousand words per month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="p-2 text-red-500 rounded-full fill-current ">
                        <CheckCircleIcon className="h-8 w-8" />
                      </div>
                      <span className="ml-3 text-lg text-gray-700">
                        Recaptcha
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center p-8">
                  <a
                    className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-indigo-600"
                  >
                    Select This Plan
                  </a>
                </div>
              </div>
            </div>
            {products && products.map((product: Price) => <PricingCard key={product.id} price={product} />)}

            {/* <div className="relative z-10 w-full max-w-md my-8 bg-white rounded-lg shadow-lg sm:w-2/3 lg:w-1/3 sm:my-5">
              <div className="py-4 text-sm font-semibold leading-none tracking-wide text-center text-white uppercase bg-indigo-500 rounded-t">
                Most Popular
              </div>
              <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                <h3 className="p-3 pb-1 text-lg font-bold tracking-wide text-center uppercase">
                  Pro<span className="ml-2 font-light">Plan</span>
                </h3>
                <h4 className="flex items-center justify-center pb-6 text-5xl font-bold text-center text-gray-900">
                  <span className="mr-1 -ml-2 text-lg text-gray-700">$</span>
                  12 <span className="font-light">/Month</span>
                </h4>
                <p className="text-sm text-gray-600">
                  Our most popular package is the Pro Plan which gives you
                  access to the following:
                </p>
              </div>
              <div className="flex justify-start pl-12 mt-8 sm:justify-start">
                <ul>
                  <li className="flex items-center">
                    <div className="p-2 text-green-500 rounded-full fill-current">
                    <CheckCircleIcon className="h-8 w-8"/>
                    </div>
                    <span className="ml-3 text-lg text-gray-700">
                      50 thousand words <br className="lg:block sm:hidden" /> per month
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center p-8 uppercase">
                <a
                  href="#_"
                  className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-indigo-600"
                >
                  Select This Plan
                </a>
              </div>
            </div>
            <div className="relative z-0 w-11/12 max-w-sm my-8 rounded-lg shadow-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-ml-4">
              <div className="overflow-hidden text-black bg-white rounded-lg shadow-lg">
                <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-8">
                  <h3 className="p-3 pb-1 text-lg font-bold tracking-wide text-center uppercase">
                    Premium<span className="ml-2 font-light">Plan</span>
                  </h3>
                  <h4 className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                    <span className="mr-1 -ml-2 text-lg text-gray-700">$</span>
                    18<span className="font-light">/Month</span>
                  </h4>
                  <p className="pl-2 text-sm text-gray-600">
                    With our premium plan you can take advantage of all the
                    following features:
                  </p>
                </div>
                <div className="flex flex-wrap px-8 mt-8">
                  <ul>
                    <li className="flex items-center">
                      <div className="p-2 text-green-500 rounded-full fill-current ">
                      <CheckCircleIcon className="h-8 w-8"/>
                      </div>
                      <span className="ml-3 text-lg text-gray-700">
                        100 thousand words <br className="lg:block sm:hidden" /> per month
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center p-8 uppercase">
                  <a
                    href="#_"
                    className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-green-600"
                  >
                    Select This Plan
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div> : <Loader />}
      </div>

    </div>
  );
}



{/* <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */}


