'use client'
import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {
    params: {
        id: string
    }
};

export default function ChatPage({ params: { id } }: Props) {
    const { data: session } = useSession();
    useEffect(() => {
        if (!session) {
            window.location.replace("/")
        }
    }, [session])
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {session && (<>
                <Chat chatId={id} />
                <ChatInput chatId={id} />
                <div className="md:hidden block h-20 bg-[#202123]"></div>
            </>)
            }
        </div>
    )
}
