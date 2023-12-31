'use client'
import { constructPrompt } from "@/lib/constructPrompt";
import Dialog from "./Dialog";
import { ArrowLeftOnRectangleIcon, Bars3BottomLeftIcon, ChatBubbleLeftIcon, CheckCircleIcon, TrashIcon, UserIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { useAppContext } from "@/lib/context/AppContext";

function SidebarRytr({ setResponse, isSidebarOpen, setIsSidebarOpen }: any) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('blog');
    const [isLoading, setIsLoading] = useState(false);
    const [language, setLanguage] = useState("english");
    const [userInput, setUserInput] = useState('');

    let resize = false;
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
    let placeholder = '';
    let label = '';

    if (selectedOption === 'blog' || selectedOption === 'keyword') {
        placeholder = 'AI writing assistant';
        label = 'Primary Keyword';
    } else if (selectedOption === 'brand') {
        placeholder = 'An AI writing tool for auto-generating content and copies for blogs, social media, and more';
        label = 'Brand Description';
        resize = true;
    } else if (selectedOption === 'business') {
        placeholder = 'AI writing assistant for content writers and digital marketers';
        label = 'Business Idea';
    } else if (selectedOption === 'cta') {
        placeholder = 'An AI writing assistant that helps you automatically generate content for anything - from emails & blogs to ads & social media, Content Writer can create original, engaging copies for you within seconds, at a fraction of the cost.';
        label = 'Description';
    } else if (selectedOption === 'job') {
        placeholder = 'Software Engineer';
        label = 'Job Role';
    } else if (selectedOption === 'seo') {
        placeholder = 'AI writing assistant, content generator';
        label = 'Target Keywords';
    } else if (selectedOption === 'song') {
        placeholder = 'Soothing song for a couple in love';
        label = 'Song Idea';
    } else if (selectedOption === 'video') {
        placeholder = 'AI writing assistants';
        label = 'Keywords';
    }
    let resizeTextarea: number = resize ? 4 : 0;

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const { data: session } = useSession();
    async function handleWriteFormSubmission() {
        setIsLoading(true);
        if (!userInput) {
            setIsLoading(false);
            return;
        };
        setUserInput("");
        const prompt = constructPrompt(language, selectedOption, userInput);

        try {
            const response = await fetch("/api/write", {
                method: "POST",
                body: JSON.stringify({ prompt, session }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            setIsLoading(false);
            if (response.ok) {
                const data = await response.json();
                toast.success("Content Writer has written.");
                setResponse(data.answer);
            } else if (response.status === 305) {
                const data = await response.json();
                toast.error(data.answer);
            } else {
                throw new Error("An error occurred while writing!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error occurred while writing!");
        }
    }
    const {darkMode} = useAppContext()
    return (
        <>
            {isSidebarOpen && <div className={`${darkMode ? 'bg-[#202123] text-gray-200' : 'bg-white border border-r border-gray-900 text-gray-900'} flex-shrink-0 max-w-[350px]`}>
                <div className="p-2 flex flex-col h-screen">
                    <div className="flex-1">
                        <div className={`${darkMode ? 'text-gray-200' : ' text-gray-900'}`}>
                            <div className="flex flex-row items-center space-x-4 justify-center w-full">
                                <Link href="/" className="bg-transparent border border-gray-700 px-5 py-2 rounded-lg">Chat</Link>
                                <div onClick={toggleSidebar} className="flex border-gray-700 border chatRow">
                                    <ArrowLeftOnRectangleIcon className="hidden cursor-pointer w-4 h-4 md:block" />
                                    <Bars3BottomLeftIcon className="md:hidden cursor-pointer w-6 h-6 block" />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-5 my-2 ">
                                <div className="flex-1">
                                    <div className="flex space-x-2 text-white">
                                        <div className="flex flex-col">
                                            <label htmlFor="language" className="text-center">Select Language</label>
                                            <select onChange={(e) => setLanguage(e.target.value)} defaultValue="English" className=" bg-gray-600 px-8 py-3 rounded-lg my-3" name="language" id="language">
                                                <option value="Arabic">Arabic</option>
                                                <option value="Bulgarian">Bulgarian</option>
                                                <option value="Chinese">Chinese</option>
                                                <option value="English">English</option>
                                                <option value="Hindi">Hindi</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="tone" className="text-center">Select Tone</label>
                                            <select className=" bg-gray-600 px-8 py-3 rounded-lg my-3" name="tone" id="tone">
                                                <option value="Convincing">Convincing</option>
                                                <option value="Humble">Humble</option>
                                                <option value="Thoughtful">Thoughtful</option>
                                                <option value="Worried">Worried</option>
                                                <option value="Informative">Informative</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="use_case" className="">Choose Use Case</label>
                                        <select value={selectedOption} onChange={handleChange} id="use_case" className=" bg-gray-600 px-8 py-3 rounded-lg my-3 cursor-pointer">
                                            <option value="blog">Blog Outline</option>
                                            <option value="brand">Brand Name</option>
                                            <option value="business">Business Idea Pitch</option>
                                            <option value="cta">Call to action</option>
                                            <option value="job">Job Description</option>
                                            <option value="keyword">Keyword Generator</option>
                                            <option value="seo">SEO Meta Title</option>
                                            <option value="song">Song Lyrics</option>
                                            <option value="video">Video Idea</option>
                                        </select>
                                    </div>
                                    <label htmlFor="input" className="my-3 ">{label}</label>
                                    <textarea value={userInput} onChange={(event) => setUserInput(event.target.value)} id="input" className={`w-full rounded-lg ${!resize && 'resize-none'} px-3 py-2 bg-gray-600 border border-gray-700`} placeholder={placeholder} rows={resizeTextarea}></textarea>
                                </div>
                                <button onClick={handleWriteFormSubmission} className="bg-gray-200 px-4 py-2 rounded-lg text-gray-900">
                                    {!isLoading ? 'Write For Me' : 'Writing..'}
                                </button>
                            </div>
                        </div>
                    </div>
                    {isDialogOpen && <Dialog setIsDialogOpen={setIsDialogOpen} title="Your Plan" />}
                    {session && (
                        <>
                            {isOptionsOpen && <div className="mx-auto rounded-t-lg flex flex-col mb-2 text-white border-t border-l border-r border-white">
                                <button onClick={() => signOut()} className="rounded-t-lg hover:bg-gray-500 px-4 py-2 flex items-center space-x-2">
                                    <ArrowLeftOnRectangleIcon className="h-6 w-6 mx-3 hidden md:block" />Logout
                                </button>
                                <button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2  px-4 py-2 hover:bg-gray-500"><UserIcon className="hidden md:block h-6 w-6 mx-3" />Get Pro</button>
                            </div>}
                            <button onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
                                <img className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition-all duration-200" src={session.user?.image!} alt="user profile image" />
                            </button>
                        </>)}

                </div>
            </div>}
        </>
    )
}

export default SidebarRytr