'use client'
import { db } from "@/firebase";
import { useAppContext } from "@/lib/context/AppContext";
import { ArrowLeftOnRectangleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewChat() {
    const {darkMode} = useAppContext();
    const router = useRouter();
    const { data: session } = useSession();

    const createNewChat = async () => {
        const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp(),
        })
        router.push(`/chat/${doc.id}`)
    }
    
    return (
            <div onClick={createNewChat} className={`flex flex-1 ${darkMode ? 'border-gray-700' : 'border-gray-700 text-gray-900'} border chatRow w-full md:w-auto`}>
                <PlusIcon className="w-4 h-4" />
                <p>New Chat</p>
            </div>
    )
}