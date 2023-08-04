import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
    params: {
        id: string
    }
};

export default function ChatPage({ params: { id } }: Props) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Chat chatId={id} />
            <ChatInput chatId={id} />
            <div className="md:hidden block h-20 bg-[#202123]"></div>
        </div>
    )
}
