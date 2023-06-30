'use client'
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState, FormEvent } from "react";
import { toast } from "react-hot-toast";
import useSWR from 'swr';
import ModelSelection from "./ModelSelection";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"

type Props = {
  chatId: string
}
function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();


  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");
    const message: UserMessage = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      }
    }
    await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message);

    // Toast Notification to say loading
    const notification = toast.loading("Content Writer is writing...");

    try {
      const response = await fetch('/api/completions', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input, chatId, model, session
        })
      })
      if (response.status === 305) {
        const data = await response.json();
        toast.error(data.answer, {
          id: notification
        })
        console.log(data)
      }
      if (response.ok) {
        toast.success("Content Writer has written.", {
          id: notification
        })
      }
    } catch (error) {
      toast.error("Error occured while writing!", {
        id: notification
      })
    }
  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input value={prompt} type="text" className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          placeholder="Type your prompt here"
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="bg-[#11A37F] hover-opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-700"
          disabled={!session || !prompt}
          type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      {/* <div className="md:hidden">
        <ModelSelection />
      </div> */}
    </div>
  )
}

export default ChatInput