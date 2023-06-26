'use client'
import { useState } from "react"
import Sidebar from "./Sidebar";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
function SidebarContainer() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <>
            <div className={`bg-[#202123] md:max-w-[260px] h-screen overflow-y-auto md:min-w-[20rem] ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            <div className={`bg-[#343541] ${isSidebarOpen ? 'hidden' : 'block'}`}>
                <button className="rounded-circle m-2 flex items-center hover:bg-[rgba(232,234,237,.08)] px-3 py-2 transition-all duration-500 ease-linear">
                    <Bars3BottomLeftIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="h-8 w-6 text-gray-100 cursor-pointer" />
                </button>
            </div>
        </>)
}

export default SidebarContainer