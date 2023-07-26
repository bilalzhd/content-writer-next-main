import { useAppContext } from "@/lib/context/AppContext";
import { ClipboardDocumentCheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
type Props = {
    message: DocumentData
}
export default function Message({ message }: Props) {
    const {darkMode} = useAppContext();
    const isContentWriter = message.user.name === "Content Writer";
    const [copied, setCopied] = useState(false);
    function handleCopy() {
        navigator.clipboard.writeText(message.text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000)
    }
    // const newlineIndex: number = message.text.indexOf();
    // const formattedMessage: string = newlineIndex !== -1 ? message?.text?.substring(newlineIndex + 1) : message?.text;

    // const formattedMessage = message.text.replace(/\n(.+)/g, '<br /><br />$1');
    const newlineIndex = message.text.indexOf('\n');
    let formattedMessage = message.text;
    if (newlineIndex !== -1) {
        const lines = formattedMessage.split('\n');
        if (lines.length > 1) {
            lines.shift(); 
            formattedMessage = lines.join('<br />');
        }
    }

    return (
        <div className={`py-5 px-2 ${darkMode ? 'text-white' : 'text-gray-900'} ${isContentWriter && (darkMode ? 'bg-[#202123]' : 'bg-gray-200')}`}>
            <div className="flex space-x-5 max-w-5xl mx-auto">
                <img src={message.user.avatar} alt="Avatar" className={`h-8 w-8 rounded-full ${isContentWriter && 'mt-5'}`} />
                <div className="flex items-start justify-between">
                    <p className="pt-1 text-sm" dangerouslySetInnerHTML={{ __html: formattedMessage }}></p>
                    <div className="flex items-center h-full mx-4">
                        {isContentWriter && <button
                            className="text-sm text-blue-500 focus:outline-none"
                            onClick={handleCopy}
                            disabled={copied}
                        >
                            {copied ? <ClipboardDocumentCheckIcon className="h-5 w-5 text-white" /> : <ClipboardIcon className="h-5 w-5 text-white" />}
                        </button>}
                    </div>
                </div>
            </div>
        </div>

    )
}