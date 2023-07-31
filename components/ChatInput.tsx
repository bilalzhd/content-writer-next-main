'use client'
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState, FormEvent } from "react";
import { toast } from "react-hot-toast";
import useSWR from 'swr';
import ModelSelection from "./ModelSelection";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useAppContext } from "@/lib/context/AppContext";

type Props = {
  chatId: string
}
function ChatInput({ chatId }: Props) {
  const {darkMode} = useAppContext();
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();


  const model = "gpt-3.5-turbo";

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
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch("/api/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input, chatId, model, session
        })
      });

      // Read the response as a stream of data
      const data = await response.json();
      toast.success("success", {id: notification})
    } catch (error) {
      // Handle fetch request errors
      console.error("Error:", error);
      toast.error("error", {id:notification})
    }
  }

  return (
    <div className={`${darkMode ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-200 text-gray-900'}  rounded-lg text-sm`}>
      <form className="px-5 pt-3 pb-3 space-x-5 flex" onSubmit={sendMessage}>
        <textarea value={prompt} style={{ resize: "none"}} className="text-justify focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          placeholder="Type your prompt here"
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
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
/* 
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

    // try {
    //   const response = await fetch('/api/completions', {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       prompt: input, chatId, model, session
    //     })
    //   })
    //   if (response.status === 305) {
    //     const data = await response.json();
    //     toast.error(data.answer, {
    //       id: notification
    //     })
    //   }
    //   if (response.ok) {
    //     toast.success("Content Writer has written.", {
    //       id: notification
    //     })
    //   }
    // } catch (error) {
    //   toast.error("Error occured while writing!", {
    //     id: notification
    //   })
    // }
    try {
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input, chatId, model, session
        })
      });

      // Read the response as a stream of data
      const data = await response.json();
      console.log(data)
      toast.success("success", {id: notification})
    } catch (error) {
      // Handle fetch request errors
      console.error("Error:", error);
    }
  }*/