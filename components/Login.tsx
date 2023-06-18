'use client'
import Image from 'next/image';
import { signIn } from "next-auth/react";
import Header from './Header';
import Pricing from './Pricing';
import Footer from './Footer';
const Login = () => {
  return (
    // <div className='bg-[#11A37F] h-screen text-white flex items-center flex-col justify-center text-center'>
    //     <Image 
    //     src="https://links.papareact.com/2i6"
    //     width={300} height={300} alt='Logo' />
    //     <h1 className='mb-4 pb-4 text-4xl font-bold'>Login to Content Writer</h1>
    //     <button onClick={() => signIn('google')} className='font-bold text-3xl animate-pulse'>Sign In With Google</button>
    // </div>
    <>
      <Header />
      <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              CHAT GPT 2.0
            </h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              The free alternative of ChatGPT, best for students and content
              writers. Write content on the go
            </p>
            <a
              href="#demo"
              className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
            >
              View Demo
            </a>
          </div>
          <div className="relative z-40 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
              <img
                src="https://cdn.devdojo.com/images/september2020/macbook-mockup.png"
                className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}

      <Pricing />

      {/* FOOTER */}

      <Footer />
    </>
  )
}

export default Login