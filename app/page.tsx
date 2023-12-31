// import MainApp from '@/components/MainApp';
'use client'
import Login from '@/components/Login';
import { useAppContext } from '@/lib/context/AppContext';
import { SunIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
export default function HomePage() {
  const { darkMode } = useAppContext();
  const { data: session } = useSession();
  return (
    <>
      {session ? (<div className={`${darkMode ? 'text-white' : 'text-gray-900'} flex flex-col items-center justify-center h-screen px-2`}>
        <h1 className="text-5xl font-bold mb-20">Content Writer</h1>
        <div>
          <div className='text-center'>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className='h-8 w-8 ' />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Generate an article about Inflation</p>
              <p className="infoText">What is supply chain?</p>
              <p className="infoText">Write me a story about a cat and a mouse.</p>
            </div>
          </div>
        </div>
      </div>) : <Login />
      }

    </>
  )
}