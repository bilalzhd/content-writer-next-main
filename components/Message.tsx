import { DocumentData } from "firebase/firestore";
type Props = {
    message: DocumentData
}
export default function Message( {message}: Props ) {
    const isContentWriter = message.user.name === "Content Writer";
  return (
    <div className={`py-5 px-2 md:px-0 text-white ${isContentWriter && 'bg-[#202123]'}`}>
        <div className="flex space-x-5 max-w-2xl mx-auto">
            <img src={message.user.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
            <p className="pt-1 text-sm ">
                {message.text}
            </p>
        </div>
    </div>
  )
}