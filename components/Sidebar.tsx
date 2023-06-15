import NewChat from "./NewChat";
export default function Sidebar() {
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat />
                    <div>{/* MODEL SELECTION */}</div>
                    
                    {/* Map Through Chats */}
                </div>
            </div>
        </div>
    )
}