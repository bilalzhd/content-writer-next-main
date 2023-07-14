'use client'
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import Loader from "./Loader";
import ModelSelection from "./ModelSelection";
import { ArrowLeftOnRectangleIcon, UserIcon, CheckCircleIcon, XCircleIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Dialog from "./Dialog";
import Link from "next/link";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: any) => {

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { data: session, status } = useSession();
    const [chats, loading, error] = useCollection(
        session && query( collection(db, "users", session.user?.email!, "chats"), orderBy("createdAt", "asc")));

    function toggleSidebar() {
        setIsSidebarOpen((prevState: any) => !prevState);
    }
    return (<>
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <div className="flex flex-row items-center space-x-4 justify-center w-full">
                        <NewChat />
                        <button className="text-gray-300 border-gray-600 rounded-lg border px-4 py-2"><Link href="/rytr">Writer</Link></button>
                        <div onClick={toggleSidebar} className="flex border-gray-700 border chatRow">
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
                    {isOptionsOpen && <div className="w-1/2 mx-auto rounded-t-lg flex flex-col mb-2 text-white border-t border-l border-r border-white">
                        <button onClick={() => signOut()} className="rounded-t-lg hover:bg-gray-500 px-4 py-2 flex items-center space-x-2">
                            <ArrowLeftOnRectangleIcon className="h-6 w-6 mx-3 hidden md:block" />Logout
                        </button>
                        <button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2  px-4 py-2 hover:bg-gray-500"><UserIcon className="hidden md:block h-6 w-6 mx-3" />Get Pro</button>
                    </div>}
                    <button onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
                        <img className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition-all duration-200" src={session.user?.image!} alt="user profile image" />
                    </button>
                </>)}

        </div>
    </>)
}
export default Sidebar;