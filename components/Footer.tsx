export default function Footer() {
  return (
    <footer className="px-4 pt-12 pb-8 text-white bg-white border-t border-gray-200">
      <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
        <div className="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
          <a
            href="/"
            className="flex justify-start text-left sm:text-center lg:text-left sm:justify-center lg:justify-start"
          >
            <img src="/cw-logo.png" alt="Content Writer" className="h-16 w-16" />
          </a>
          <p className="mt-6 mr-4 text-base text-gray-500">
            Content-writing.net is the alternative tool of chat GPT that helps you to create unique and quality content in just a few seconds!
          </p>
        </div>
        <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
          <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
            <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
              Use Cases
            </li>
            <li>
              <a
                href="#_"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
              >
                Blog Writing
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
              >
                Branding
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
              >
                Business Idea
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
              >
                Keyword Generator
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
              >
                SEO
              </a>
            </li>
          </ul>
          <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
            <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
              Company
            </li>
            <li>
              <a
                href="#_"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
              >
                Terms of Service
              </a>
            </li>
          </ul>
          <div className="flex flex-col w-full text-gray-700">
            <div className="inline-block px-3 py-2 mt-5 font-bold text-gray-800 uppercase md:mt-0">
              Connect
            </div>
            <div className="flex justify-start pl-4 mt-2">
              <a
                className="flex items-center mr-6 text-gray-400 no-underline hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://devdojo.com"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </a>
              <a
                className="flex items-center mr-6 text-gray-400 no-underline hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://devdojo.com"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                className="flex items-center text-gray-400 no-underline hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://devdojo.com"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>

              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-10 text-center text-gray-500 border-t border-gray-100">
        © 2023 Content Writer. All rights reserved.
      </div>
    </footer>
  )
}