'use client'
import Image from 'next/image';
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div className='bg-[#11A37F] h-screen text-white flex items-center flex-col justify-center text-center'>
        <Image 
        src="https://links.papareact.com/2i6"
        width={300} height={300} alt='Logo' />
        <h1 className='mb-4 pb-4 text-4xl font-bold'>Login to Content Writer</h1>
        <button onClick={() => signIn('google')} className='font-bold text-3xl animate-pulse'>Sign In With Google</button>
    </div>
  )
}

export default Login