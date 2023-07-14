"use client"
import ResponseArea from "@/components/ResponseArea";
import SidebarRytr from "@/components/SidebarRytr";
import { useState } from "react";
function WriterPage() {
  const [ response, setIsResponse ] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className='flex flex-row max-h-screen overflow-hidden'>
        <SidebarRytr isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setResponse={setIsResponse} />
        <div className="bg-[#343541] flex-1 overflow-auto max-h-screen">
          <ResponseArea isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} response={response}  />
        </div>
    </div>
  )
}

export default WriterPage;