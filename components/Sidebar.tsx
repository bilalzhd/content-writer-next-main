'use client'
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import Loader from "./Loader";
import ModelSelection from "./ModelSelection";
import { ArrowLeftOnRectangleIcon, UserIcon, CheckCircleIcon, XCircleIcon, Bars3BottomLeftIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Dialog from "./Dialog";
import Link from "next/link";
import { useAppContext } from "@/lib/context/AppContext";
import axios from "axios";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: any) => {

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useAppContext();

    const { data: session, status } = useSession();
    const [chats, loading, error] = useCollection(
        session && query(collection(db, "users", session.user?.email!, "chats"), orderBy("createdAt", "asc")));

    function toggleSidebar() {
        setIsSidebarOpen((prevState: any) => !prevState);
    }
  
    return (<>
        <div className={`p-2 flex flex-col h-screen ${!darkMode && 'border-r border-gray-200'}`}>
            <div className="flex-1">
                <div>
                    <div className="flex flex-row items-center space-x-4 justify-center w-full">
                        <NewChat />
                        <button className={`${darkMode ? 'text-gray-300 border-gray-600' : 'text-gray-900 border-gray-700'}  rounded-lg border px-4 py-2`}><Link href="/writer">Writer</Link></button>
                        <div onClick={toggleSidebar} className={`flex ${darkMode ? 'border-gray-700' : 'border-gray-700 text-gray-900'} border chatRow`}>
                            <ArrowLeftOnRectangleIcon className="hidden cursor-pointer w-4 h-4 md:block" />
                            <Bars3BottomLeftIcon className="md:hidden cursor-pointer w-6 h-6 block" />
                        </div>
                    </div>
                    {/* <div className="hidden sm:inline">
                        <ModelSelection />
                    </div> */}
                    <div className="flex flex-col space-y-2 my-2 ">
                        {chats?.docs.map(chat => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                        {loading && <Loader />}
                    </div>
                </div>
            </div>
            {isDialogOpen && (
                <Dialog setIsDialogOpen={setIsDialogOpen} title="Your Plan" />)}
            {session && (
                <>
                    {isOptionsOpen && (
                        <div className={`${darkMode ? 'text-white border-white' : 'text-gray-900 border-black'} w-1/2 mx-auto rounded-t-lg flex flex-col mb-2 border-t border-l border-r `}>
                            <button onClick={() => signOut()} className={`rounded-t-lg ${darkMode ? 'hover:bg-gray-500' : 'hover:bg-gray-200'} px-4 py-2 flex items-center space-x-2`}>
                                <ArrowLeftOnRectangleIcon className="h-6 w-6 mx-3 hidden md:block" />Logout
                            </button>
                            <button onClick={() => setIsDialogOpen(true)} className={`flex items-center space-x-2  px-4 py-2 ${darkMode ? 'hover:bg-gray-500' : 'hover:bg-gray-200'}`}>
                                <UserIcon className="hidden md:block h-6 w-6 mx-3" />Get Pro</button>
                        </div>)}
                    <div className="flex justify-center space-x-4">
                        <button onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
                            <img className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition-all duration-200" src={session.user?.image!} alt="user profile image" />
                        </button>
                        <button className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full px-4 py-2`} onClick={() => toggleDarkMode()}>
                            {darkMode ? <SunIcon className="text-gray-100 h-6 w-6" /> : <MoonIcon className="text-gray-900 h-6 w-6" />}
                        </button>
                    </div>
                </>)}

        </div>
    </>)
}
export default Sidebar;