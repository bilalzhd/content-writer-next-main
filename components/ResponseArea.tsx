'use client'

import { ArrowLeftCircleIcon, ArrowLeftOnRectangleIcon, ClipboardDocumentCheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Props = {
  response: string
  isSidebarOpen: any,
  setIsSidebarOpen: any,
}
function ResponseArea({ response, isSidebarOpen, setIsSidebarOpen }: Props) {

  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000)
  }

  const newlineIndex = response.indexOf('\n');
  let formattedMessage = response;
  if (newlineIndex !== -1) {
    const lines = formattedMessage.split('\n');
    if (lines.length > 1) {
      lines.shift(); // Remove the first line
      formattedMessage = lines.join('<br />');
    }
  }


  return (
    <div className='px-5 py-2'>
      {!isSidebarOpen && <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}><ArrowLeftOnRectangleIcon className="text-gray-200 cursor-pointer w-6 h-6 md:block" /></button>}
      {response.length > 3 ?
        (<div className="relative">
          <button className="bg-gray-600 px-3 py-1 rounded mx-5 z-50 text-gray-200 absolute right-0 my-3" onClick={handleCopy} disabled={copied}>
            {!copied ? <ClipboardIcon className="h-6 w-6" /> : <ClipboardDocumentCheckIcon className="h-6 w-6" />}
            </button>
          <div contentEditable className='bg-gray-600 px-4 pb-2 text-gray-200 rounded' dangerouslySetInnerHTML={{ __html: formattedMessage }}>
          </div>
        </div>) : (<div>
          <ArrowLeftCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
          <h2 className="text-gray-200 text-center text-2xl mt-3">Select the options from the sidebar to start writing content.</h2>
        </div>)
      }
    </div>
  )
}

export default ResponseArea