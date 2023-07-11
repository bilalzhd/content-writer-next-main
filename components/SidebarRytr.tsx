'use client'
import Dialog from "./Dialog";
import { ArrowLeftOnRectangleIcon, Bars3BottomLeftIcon, ChatBubbleLeftIcon, CheckCircleIcon, TrashIcon, UserIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

function SidebarRytr() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }
    const { data: session } = useSession();
    return (
        <div className="bg-[#202123] flex-shrink-0">
            <div className="p-2 flex flex-col h-screen">
                <div className="flex-1">
                    <div>
                        <div className="flex flex-row items-center space-x-4 justify-center w-full">
                            <div onClick={toggleSidebar} className="flex border-gray-700 border chatRow">
                                <ArrowLeftOnRectangleIcon className="hidden cursor-pointer w-4 h-4 md:block" />
                                <Bars3BottomLeftIcon className="md:hidden cursor-pointer w-6 h-6 block" />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 my-2 ">
                            <div className="flex space-x-2 text-white">
                                <div className="flex flex-col">
                                    <label htmlFor="language">Select Language</label>
                                    <select className="text-black" name="language" id="language">
                                        <option value="en">English</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="language">Select Language</label>
                                    <select className="text-black" name="language" id="language">
                                        <option value="en">English</option>
                                    </select>
                                </div>
                            </div>
                            <Link href={`/chat/`} className={`chatRow justify-center`}>
                                <ChatBubbleLeftIcon className="h-5 w-5" />
                                <p className="flex-1 md:inline-flex truncate">
                                    New Chat
                                </p>
                                <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
                            </Link>
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
                        {isOptionsOpen && <div className="mx-auto rounded-t-lg flex flex-col mb-2 text-white border-t border-l border-r border-white">
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
        </div>
    )
}

export default SidebarRytr