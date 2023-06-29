'use client'
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
function SidebarContainer() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // useEffect(() => {
    //     const body = document.querySelector('body')
    //     if(isSidebarOpen) {
    //         body?.classList.add("overflow-hidden");
    //     }
    //     return () => {
    //         body?.classList.remove("overflow-hidden");
    //     }
    // }, [isSidebarOpen])
    return (
        <>
            <div className={`bg-[#202123] flex-shrink-0 md:max-w-[260px] h-screen overflow-y-auto md:min-w-[20rem] transition-display duration-sidebar ease-sidebar ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            <div className={`fixed top-0 transition-all duration-200 ${isSidebarOpen ? 'hidden' : 'block'}`}>
                <button className="rounded-circle m-2 flex items-center bg-[rgba(232,234,237,.06)] hover:bg-[rgba(232,234,237,.08)] px-3 py-2 transition-all duration-500 ease-linear">
                    <Bars3BottomLeftIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="h-8 w-6 text-gray-100 cursor-pointer" />
                </button>
            </div>
        </>)
}

export default SidebarContainer