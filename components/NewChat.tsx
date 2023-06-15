import { PlusIcon } from "@heroicons/react/24/solid";
export default function NewChat() {
    return (
        <div className="flex border-gray-700 border chatRow">
            <PlusIcon className="w-4 h-4" />
            <p>New Chat</p>
        </div>
    )
}