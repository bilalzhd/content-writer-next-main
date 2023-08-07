'use client'
import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import { useSession } from "next-auth/react";

type Props = {
    params: {
        id: string
    }
};

export default function ChatPage({ params: { id } }: Props) {
    const { data: session } = useSession();
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {session ? (<>
                <Chat chatId={id} />
                <ChatInput chatId={id} />
                <div className="md:hidden block h-20 bg-[#202123]"></div>
            </>): <p className="text-center text-3xl">You are not currently logged in</p>}
        </div>
    )
}
