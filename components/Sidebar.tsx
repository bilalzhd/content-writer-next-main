'use client'
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import Loader from "./Loader";
import ModelSelection from "./ModelSelection";

export default function Sidebar() {
    const { data: session, status } = useSession();
    const [chats, loading, error] = useCollection(
        session && query(
            collection(db, "users", session.user?.email!, "chats"),
            orderBy("createdAt", "asc")
        ));
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat />
                    <div className="hidden sm:inline">
                        <ModelSelection />
                    </div>

                    {chats?.docs.map(chat => (
                        <ChatRow key={chat.id} id={chat.id} />
                    ))}
                    {loading && <Loader />}
                </div>
            </div>
            {session && (
                <button onClick={() => signOut()}>
                    <img className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition-all duration-200" src={session.user?.image!} alt="user profile image" />
                </button>
            )}
        </div>
    )
}