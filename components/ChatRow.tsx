'use client'
import { db } from "@/firebase"
import { useAppContext } from "@/lib/context/AppContext"
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import { collection, deleteDoc, doc } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"

type Props = {
    id: string
}
const ChatRow = ({ id }: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);
    const {darkMode} = useAppContext();

    const [messages] = useCollection(
        collection(
            db, 'users', session?.user?.email!, 'chats', id, 'messages'));

    useEffect(() => {
        if (!pathname) return;
        setActive(pathname.includes(id))
    }, [pathname, id])

    const removeChat = async () => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
        router.replace('/');
    }
    const maxLength = 20; // Set the maximum length of the message

    let text = messages?.docs[messages?.docs.length - 1]?.data().text; // Get the message text

    if (text?.length > maxLength) {
        text = text.substring(0, maxLength); // Truncate the text to the maximum length
    }

    return (
        <Link href={`/chat/${id}`} className={`${darkMode ? 'border-gray-700' : 'border-gray-700 text-gray-900'} chatRow justify-center ${active && 'bg-gray-700/50'}`}>
            <ChatBubbleLeftIcon className="h-5 w-5" />
            <p className="flex-1 md:inline-flex truncate">
                {text || "New Chat"}
            </p>
            <TrashIcon onClick={removeChat} className="h-5 w-5 text-gray-700 hover:text-red-700" />
        </Link>
    )
}
export default ChatRow;