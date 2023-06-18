'use client'
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import Loader from "./Loader";
import ModelSelection from "./ModelSelection";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { data: session, status } = useSession();
    const [chats, loading, error] = useCollection(
        session && query(
            collection(db, "users", session.user?.email!, "chats"),
            orderBy("createdAt", "asc")
        ));

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <>
            {isSidebarOpen && (<div className="p-2 flex flex-col h-screen">
                <div className="flex-1">
                    <div>
                        <div className="flex md:flex-row sm:flex-col space-x-4">
                            <NewChat />
                            <div onClick={toggleSidebar} className="flex border-gray-700 border chatRow">
                                <ArrowLeftOnRectangleIcon className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="hidden sm:inline">
                            <ModelSelection />
                        </div>
                        <div className="flex flex-col space-y-2 my-2 ">
                            {chats?.docs.map(chat => (
                                <ChatRow key={chat.id} id={chat.id} />
                            ))}
                            {loading && <Loader />}
                        </div>
                    </div>
                </div>
                {session && (
                    <button onClick={() => signOut()}>
                        <img className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition-all duration-200" src={session.user?.image!} alt="user profile image" />
                    </button>
                )}
            </div>)}
        </>)
}