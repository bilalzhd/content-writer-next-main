import { Dispatch, SetStateAction } from "react"
type Props = {
    title: string | null;
    children?: React.ReactNode | null
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}
function Dialog({children, title, setIsDialogOpen}: Props) {
    
    return (
        <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="md:top-16 md:left-80 fixed top-0 left-0 z-100 w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold dark:text-gray-100 text-gray-900">
                            {title}
                        </h3>
                        <button onClick={() => setIsDialogOpen(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dialog