'use client'
import { constructPrompt } from "@/lib/constructPrompt";
import Dialog from "./Dialog";
import { ArrowLeftOnRectangleIcon, Bars3BottomLeftIcon, ChatBubbleLeftIcon, CheckCircleIcon, TrashIcon, UserIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";

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
        if (!userInput) return;
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
    return (
        <>
            {isSidebarOpen && <div className="bg-[#202123] flex-shrink-0">
                <div className="p-2 flex flex-col h-screen">
                    <div className="flex-1">
                        <div>
                            <div className="flex flex-row items-center space-x-4 justify-center w-full">
                                <Link href="/" className="bg-transparent border border-gray-700 text-gray-200 px-5 py-2 rounded-lg">Chat</Link>
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
                                            <select onChange={(e) => setLanguage(e.target.value)} defaultValue="English" className="text-gray-200 bg-gray-600 px-8 py-3 rounded-lg my-3" name="language" id="language">
                                                <option value="Arabic">Arabic</option>
                                                <option value="Bulgarian">Bulgarian</option>
                                                <option value="Chinese">Chinese</option>
                                                <option value="English">English</option>
                                                <option value="Hindi">Hindi</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="tone" className="text-center">Select Tone</label>
                                            <select className="text-gray-200 bg-gray-600 px-8 py-3 rounded-lg my-3" name="tone" id="tone">
                                                <option value="Convincing">Convincing</option>
                                                <option value="Humble">Humble</option>
                                                <option value="Thoughtful">Thoughtful</option>
                                                <option value="Worried">Worried</option>
                                                <option value="Informative">Informative</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="use_case" className="text-gray-200">Choose Use Case</label>
                                        <select value={selectedOption} onChange={handleChange} id="use_case" className="text-gray-200 bg-gray-600 px-8 py-3 rounded-lg my-3 cursor-pointer">
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
                                    <label htmlFor="input" className="my-3 text-gray-200">{label}</label>
                                    <textarea value={userInput} onChange={(event) => setUserInput(event.target.value)} id="input" className={`w-full rounded-lg ${!resize && 'resize-none'} px-3 py-2 bg-gray-600 border border-gray-700`} placeholder={placeholder} rows={resizeTextarea}></textarea>
                                </div>
                                <button onClick={handleWriteFormSubmission} className="bg-gray-200 px-4 py-2 rounded-lg">
                                    {!isLoading ? 'Write For Me' : 'Writing..'}
                                </button>
                            </div>
                        </div>
                    </div>
                    {isDialogOpen && <Dialog setIsDialogOpen={setIsDialogOpen} title="Your Plan">
                        <div className="flex md:flex-row space-y-4 flex-col py-6">
                            <div className="md:w-1/3 w-full border-r border-r-gray-700 flex flex-col space-y-2 justify-center px-4">
                                <h3 className="text-xl font-bold dark:text-gray-100">Free Plan</h3>
                                <button className="disabled:opacity-50 rounded disabled:cursor-not-allowed btn relative btn-primary border-none bg-gray-600 py-3 font-semibold text-gray-900 dark:bg-gray-500 dark:opacity-100" disabled>Your Current Plan</button>
                                <ul className="pt-2">
                                    <li className="text-gray-100 flex md:justify-center sm:mb-2"><CheckCircleIcon className="mx-2 text-green-600 w-8 h-8" />10,000 words per month</li>
                                    <li className="text-gray-100 flex md:justify-center"><CheckCircleIcon className="mx-2 text-red-600 w-8 h-8 flex-shrink" />Recaptcha on every request</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 !mt-0 border-r border-r-gray-700 w-full flex flex-col space-y-2 justify-center px-4">
                                <h3 className="text-xl font-bold dark:text-gray-100">Gold Plan</h3>
                                <button className="disabled:opacity-50 rounded disabled:cursor-not-allowed btn relative btn-primary border-none bg-gray-600 hover:bg-gray-400 py-3 font-semibold text-gray-900 dark:bg-gray-500 dark:opacity-100">Upgrade to Gold</button>
                                <ul className="pt-2">
                                    <li className="text-gray-100 flex md:justify-center sm:mb-2"><CheckCircleIcon className="mx-2 text-green-600 w-8 h-8" />50,000 words per month</li>
                                    <li className="text-gray-100 flex md:justify-center"><XCircleIcon className="mx-2 text-red-600 w-8 h-8 flex-shrink" />Recaptcha on every request</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 !mt-0 w-full flex flex-col space-y-2 justify-center px-4">
                                <h3 className="text-xl font-bold dark:text-gray-100">Premium Plan</h3>
                                <button className="disabled:opacity-50 rounded disabled:cursor-not-allowed btn relative btn-primary border-none bg-gray-600 py-3 font-semibold text-gray-900 dark:bg-gray-500 dark:opacity-100 hover:bg-gray-400">Upgrade to Premium</button>
                                <ul className="pt-2">
                                    <li className="text-gray-100 flex md:justify-center sm:mb-2"><CheckCircleIcon className="mx-2 text-green-600 w-8 h-8" />100 thousand words per month</li>
                                    <li className="text-gray-100 flex md:justify-center"><XCircleIcon className="mx-2 text-red-600 w-8 h-8 flex-shrink" />Recaptcha on every request</li>
                                </ul>
                            </div>
                        </div>
                    </Dialog>}
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