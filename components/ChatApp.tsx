import React from "react"
import ClientProvider from "./ClientProvider"
import SidebarContainer from "./SidebarContainer"

function ChatApp({children}: {children: React.ReactNode}) {
    return (
        <div className='flex flex-row max-h-screen overflow-hidden'>
            <SidebarContainer />
            <ClientProvider />
            <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
    )
}

export default ChatApp