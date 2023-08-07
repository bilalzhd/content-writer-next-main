"use client"
import ResponseArea from "@/components/ResponseArea";
import SidebarRytr from "@/components/SidebarRytr";
import { useAppContext } from "@/lib/context/AppContext";
import { useSession } from "next-auth/react";
import { useState } from "react";
function WriterPage() {
  const [ response, setIsResponse ] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const {darkMode} = useAppContext();
  const {data: session} = useSession();
  return (
    <div className='flex flex-row max-h-screen overflow-hidden'>
        {session ? (<>
        <SidebarRytr isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setResponse={setIsResponse} />
        <div className={`${darkMode ? 'bg-[#343541]' : 'bg-white'} flex-1 overflow-auto h-screen`}>
          <ResponseArea isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} response={response}  />
        </div>
        </>) : <p className="text-center text-3xl p-4">You are not currently logged in.</p>}
    </div>
  )
}

export default WriterPage;