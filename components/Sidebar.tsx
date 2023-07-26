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
        <div className="p-2 flex flex-col h-screen border-r border-gray-200">
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
            {isDialogOpen && <Dialog setIsDialogOpen={setIsDialogOpen} title="Your Plan">
                <div className="flex md:flex-row space-y-4 flex-col py-6">
                    <div className="md:w-1/3 w-full border-r border-r-gray-700 flex flex-col space-y-2 justify-center px-4">
                        <h3 className="text-xl font-bold dark:text-gray-100">Free Plan</h3>
                        <button className="disabled:opacity-50 rounded disabled:cursor-not-allowed btn relative btn-primary border-none bg-gray-600 py-3 font-semibold text-gray-900 dark:bg-gray-500 dark:opacity-100" disabled>Your Current Plan</button>
                        <ul className="pt-2">
                            <li className="text-gray-100 flex md:justify-center sm:mb-2"><CheckCircleIcon className="mx-2 text-green-600 w-8 h-8" />10,000 words per month</li>
                            <li className="text-gray-100 flex md:justify-center"><CheckCircleIcon className="mx-2 text-red-600 w-8 h-8 flex-shrink" />Recaptcha on every request</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 !mt-0 border-r border-r-gray-700 w-full flex flex-col space-y-2 justify-center px-4">
                        <h3 className="text-xl font-bold dark:text-gray-100">Gold Plan</h3>
                        <button className="disabled:opacity-50 rounded disabled:cursor-not-allowed btn relative btn-primary border-none bg-gray-600 hover:bg-gray-400 py-3 font-semibold text-gray-900 dark:bg-gray-500 dark:opacity-100">Upgrade to Gold</button>
                        <ul className="pt-2">
                            <li className="text-gray-100 flex md:justify-center sm:mb-2"><CheckCircleIcon className="mx-2 text-green-600 w-8 h-8" />50,000 words per month</li>
                            <li className="text-gray-100 flex md:justify-center"><XCircleIcon className="mx-2 text-red-600 w-8 h-8 flex-shrink" />Recaptcha on every request</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 !mt-0 w-full flex flex-col space-y-2 justify-center px-4">
                        <h3 className="text-xl font-bold dark:text-gray-100">Premium Plan</h3>
                        <button className="disabled:opacity-50 rounded disabled:cursor-not-allowed btn relative btn-primary border-none bg-gray-600 py-3 font-semibold text-gray-900 dark:bg-gray-500 dark:opacity-100 hover:bg-gray-400">Upgrade to Premium</button>
                        <ul className="pt-2">
                            <li className="text-gray-100 flex md:justify-center sm:mb-2"><CheckCircleIcon className="mx-2 text-green-600 w-8 h-8" />100 thousand words per month</li>
                            <li className="text-gray-100 flex md:justify-center"><XCircleIcon className="mx-2 text-red-600 w-8 h-8 flex-shrink" />Recaptcha on every request</li>
                        </ul>
                    </div>
                </div>
            </Dialog>}
            {session && (
                <>
                    {isOptionsOpen && <div className={`${darkMode ? 'text-white border-white' : 'text-gray-900 border-black'} w-1/2 mx-auto rounded-t-lg flex flex-col mb-2 border-t border-l border-r `}>
                        <button onClick={() => signOut()} className={`rounded-t-lg ${darkMode ? 'hover:bg-gray-500' : 'hover:bg-gray-200'} px-4 py-2 flex items-center space-x-2`}>
                            <ArrowLeftOnRectangleIcon className="h-6 w-6 mx-3 hidden md:block" />Logout
                        </button>
                        <button onClick={() => setIsDialogOpen(true)} className={`flex items-center space-x-2  px-4 py-2 ${darkMode ? 'hover:bg-gray-500' : 'hover:bg-gray-200'}`}>
                            <UserIcon className="hidden md:block h-6 w-6 mx-3" />Get Pro</button>
                    </div>}
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