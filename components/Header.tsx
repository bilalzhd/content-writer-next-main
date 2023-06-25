'use client'
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SignIn from './SignIn'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Pricing', href: '#pricing', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <Disclosure as="nav" className="bg-white my-3">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <a className="hidden md:flex relative  items-center h-full font-black leading-none" href="/"><svg className="w-auto h-6 text-indigo-600 fill-current" viewBox="0 0 194 116" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z"></path><path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z"></path></g></svg><span className="ml-3 text-xl text-gray-800">Landmark<span className="text-pink-500">.</span></span></a>
                                    {/* <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    /> */}
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex space-x-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button onClick={() => setIsLoginModalOpen(!isLoginModalOpen)} className='text-gray-100 font-bold rounded-lg bg-indigo-500 px-4 py-2'>
                                    Login
                                </button>
                                <button onClick={() => setIsLoginModalOpen(!isLoginModalOpen)} className='text-gray-800 font-bold rounded-lg bg-gray-200 px-4 py-2'>
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    {isLoginModalOpen && (
                        <Transition
                            as={Fragment}
                            show={isLoginModalOpen}
                            enter="transform transition duration-[400ms]"
                            enterFrom="opacity-0 rotate-[-120deg] scale-50"
                            enterTo="opacity-100 rotate-0 scale-100"
                            leave="transform duration-200 transition ease-in-out"
                            leaveFrom="opacity-100 rotate-0 scale-100 "
                            leaveTo="opacity-0 scale-95 "
                        >
                            <div style={{ zIndex: 100 }} id="defaultModal" tabIndex={-1} aria-hidden="true" className="md:top-16 md:left-60 fixed top-0 left-0 z-100 w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full">
                                <div className="relative w-full max-w-2xl max-h-full">
                                    <div className="relative bg-white rounded-lg shadow">
                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                Login
                                            </h3>
                                            <button onClick={() => setIsLoginModalOpen(!isLoginModalOpen)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <SignIn />
                                    </div>
                                </div>
                            </div>
                        </Transition>)}
                </>
            )}
        </Disclosure>


    )
}


