import { ClipboardDocumentCheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
type Props = {
    message: DocumentData
}
export default function Message({ message }: Props) {
    const isContentWriter = message.user.name === "Content Writer";
    const [copied, setCopied] = useState(false);
    function handleCopy() {
        navigator.clipboard.writeText(message.text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000)
    }
    const formattedMessage = message.text.replace(/\n(.+)/g, '<br /><br />$1');

    return (
        <div className={`py-5 px-2 text-white ${isContentWriter && 'bg-[#202123]'}`}>
            <div className="flex space-x-5 max-w-5xl mx-auto">
                <img src={message.user.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                <div className="flex items-start justify-between"> 
                    <p className="pt-1 text-sm" dangerouslySetInnerHTML={{ __html: formattedMessage }}></p>
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
        
    )
}