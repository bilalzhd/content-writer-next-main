import Chat from "@/components/Chat";
import ChatApp from "@/components/ChatApp";
import ChatInput from "@/components/ChatInput";

type Props = {
    params: {
        id: string
    }
};

export default function ChatPage({params: {id}}: Props) {
    return (
        <ChatApp>
        <div className="flex flex-col h-screen overflow-hidden pt-16">
            <Chat chatId={id} />
            <ChatInput chatId={id} />
        </div>
        </ChatApp>
    )
}
