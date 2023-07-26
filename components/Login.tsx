'use client'
import Header from './Header';
import Pricing from './Pricing';
import Footer from './Footer';
import Features from './Features';
import { images, images2, items, items2 } from '@/lib/listItemsData';


const Login = () => {
  return (
    <>
      <Header />
      <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              CONTENT WRITER
            </h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              A more effective and speedy approach to write quickly and inexpensively
            </p>
            <a
              className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
            >
              Let&apos; Write
            </a>
          </div>
          <div className="relative z-40 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
              <img
                src="https://cdn.devdojo.com/images/september2020/macbook-mockup.png"
                className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container my-5 md:my-20 px-4 md:px-12 max-w-3xl mx-auto py-4'>
        <h3 className="w-full px-5 my-3 mt-2 text-xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-5xl md:px-0">
          The Ultimate  <span className='text-indigo-500'>AI Content Generator</span> for Writing Faster and Better .
        </h3>
        <p className='my-3 py-3 text-center'>Content-writing.net is the alternative tool of chat GPT that helps you to create unique and quality content in just a few seconds!</p>
        <Features items={items} images={images} />
      </div>
      <div className='container my-5 md:mb-20 px-4 md:px-12 max-w-3xl mx-auto py-4'>
        <h3 className="w-full px-5 my-3 mt-2 text-xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-5xl md:px-0">
          Generate mind blowing content <span className='text-indigo-500'>Pro AI Technology</span>.
        </h3>
        <p className='my-3 py-3 text-center'>Writer&apos;s block got you again? Don&apos;t worry about it. You can get well-written blogs, email templates, essays, and highly converting copies in popular tones and languages with a single click. You just have to give the query to the content writer and boom!..Your product is ready!</p>
        <Features items={items2} images={images2} />
      </div>

      <div className='md:max-w-4xl mb-5 md:mb-20 md:mx-auto mx-3'>
        <h3 className="w-full px-5 my-3 mt-2 text-xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-5xl md:px-0">Provide you a<span className='text-indigo-500'> perfect </span>piece of content </h3>
        <p className='my-3 py-3 text-center'>We use a powerful AI writing server to provide you with unique and polished content in a few seconds.Even it takes maximum 40 Seconds to write a content of 1000 words.It also re-write and shortens the content to improve the health of your content.</p>

        {/*<div className="text-gray-900 bg-white rounded-lg my-5">
          <div className="relative md:inline-flex flex md:flex-row flex-col items-center w-full px-4 py-2 text-lg font-medium  rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            <ClipboardIcon className='mr-2 mb-2 md:mb-0 h-8 w-8 text-gray-900' />
            It provides reader friendly content in the way which you want! You can get a brief explanation of your topic with perfect grammar.
          </div>
          <div className="relative md:inline-flex flex md:flex-row flex-col items-center w-full px-4 py-2 text-lg font-medium  rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            <Battery100Icon className='mr-2 mb-2 md:mb-0 h-8 w-8 text-gray-900' />
            If your content has no attraction and looks boring, You just have to put it in the bar and give a single command to “rewrite it” and you can see your piece of content has changed completely.
          </div>
          <div className="relative md:inline-flex flex md:flex-row flex-col items-center w-full px-4 py-2 text-lg font-medium  rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            <StarIcon className='mr-2 mb-2 md:mb-0 h-8 w-8 text-gray-900' />
            Do not worry about the Uniqueness of content! It will get all the information about your topic from the world and write it with its own senses, with no plagiarism.
          </div>
          <div className="relative md:inline-flex flex md:flex-row flex-col items-center w-full px-4 py-2 text-lg font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            <InformationCircleIcon className='mr-2 mb-2 md:mb-0 h-8 w-8 text-gray-900' />
            You will get actual information, which you can represent on any platform in the world.
          </div>
        </div>
      </div> */}

        <div className='px-4 flex mt-12 flex-col md:flex-row space-x-0 md:space-x-3 justify-center'>
          <div className="w-full max-w-md p-4 mt-3 mb-0 md:mt-0 md:mb-3:mt-0 md:mb-3 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-indigo-500">For student use</h5>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        It can write an essay on the topic.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        It can write a short paragraph on the topic.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        You can get an introduction on any topic
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        You can get the summary of the topic.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        It can provide important key points of the topic.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        You can get the answer to any questions related to your students.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-md p-4 mt-3 mb-0 md:mt-0 md:mb-3 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-indigo-500">For Seo expert</h5>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        You can get the list of keywords which are related to your topic.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        You can get the different topics for the single keyword.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        You can get the outline of the article for the topic.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        It can write fully optimized content meta description of keywords.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        You can get unique email templates for guest post outreach.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='px-4 flex md:flex-row flex-col space-x-0 md:space-x-3 justify-center'>
          <div className="w-full max-w-md mt-3 mb-0 md:mt-0 md:mb-3 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-indigo-500">For Online marketing experts</h5>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        It can write the description of your product.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        It can write Google ads copies for your products.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        It can write Facebook and Instagram ads copies for your products.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        You can get the attractive taglines for your products.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        You can write the complete information of your product.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-md mt-3 mb-0 md:mt-0 md:mb-3 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-indigo-500">For Writers</h5>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        You get the basic idea of any title.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        It can write subheadings of any title.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        It can write the short story for the title.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        It can write a complete blog post for you.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-1 sm:py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        You can get the idea of any title.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container px-5 flex'>
        <div className='w-1/2 px-2'>
          <div className='flex flex-col items-center'>
            <img className='h-60 w-60' src="./perform.svg" alt="Performance" />
            <p className='text-gray-600 text-center max-w-md'>To locate the best keywords and produce well-written content, use an SEO analyzer.</p>
          </div>
        </div>
        <div className='w-1/2 px-2'>
          <div className='flex flex-col items-center'>
            <img className='h-60 w-60' src="./responsive.svg" alt="Responsive" />
            <p className='text-gray-600 text-center max-w-md'>To keep current, make sure everything is quick, responsive, and mobile-friendly.</p>
          </div>
        </div>
      </div> */}

      <div className="container my-5 md:my-20 py-5 ">
        <h3 className='max-w-3xl mx-auto px-5 my-3 mt-2 text-xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-3xl md:px-0'>Automatically produce top-notch content for more than <span className='text-indigo-500'>20+ use-cases</span></h3>
        <div className="boxes flex flex-col md:flex-row gap-3 my-5 max-w-4xl mx-auto items-center">
          <div className="box transition-all duration-300 hover:shadow-lg max-w-xs flex flex-col justify-center items-center rounded p-4 bg-gray-100">
            <div className='w-16 h-16 rounded-full bg-cover' style={{ backgroundImage: "url('./blog.svg')" }}></div>
            <div className="min-h-150px flex my-1 gap-2 flex-col max-w justify-center items-center mt-2 max-w-sm">
              <h5 className='font-bold'>Blog Idea & Outline</h5>
              <p className='text-center'>The best method for leveraging an AI writing assistance to generate interesting blog, essay, and article themes and content structures</p>
            </div>
          </div>
          <div className="box transition-all duration-300 hover:shadow-lg max-w-xs flex flex-col justify-center items-center rounded p-4 bg-gray-100">
            <div className='w-16 h-16 rounded-full bg-cover' style={{ backgroundImage: "url('./business.svg')" }}></div>
            <div className="min-h-150px flex my-1 gap-2 flex-col justify-center items-center mt-2 max-w-sm">
              <h5 className='font-bold'>Business Idea Pitch</h5>
              <p className='text-center'>Make your startup pitch for your business ideas compelling and straightforward.</p>
            </div>
          </div>
          <div className="box transition-all duration-300 hover:shadow-lg max-w-xs flex flex-col justify-center items-center rounded p-4 bg-gray-100">
            <div className='w-16 h-16 rounded-full bg-cover' style={{ backgroundImage: "url('./copywriting-framework.svg')" }}></div>
            <div className="min-h-150px flex my-1 gap-2 flex-col justify-center items-center mt-2 max-w-sm">
              <h5 className='font-bold'>Copywriting Framework</h5>
              <p className='text-center'>Use our AI copywriting tool to produce imaginative and alluring formatted content for your good, service, organisation, or brand.</p>
            </div>
          </div>
        </div>
        <div className="boxes flex flex-col md:flex-row gap-3 my-5 max-w-4xl mx-auto items-center">
          <div className="box hover:shadow-lg transition-all duration-300 max-w-xs flex flex-col justify-center items-center rounded p-4 bg-gray-100">
            <div className='w-16 h-16 rounded-full bg-cover' style={{ backgroundImage: "url('./email.svg')" }}></div>
            <div className="min-h-150px flex my-1 gap-2 flex-col max-w justify-center items-center mt-2 max-w-sm">
              <h5 className='font-bold'>Email</h5>
              <p className='text-center'>Instantly produce eye-catching emails for marketing, sales, engagement, and more.</p>
            </div>
          </div>
          <div className="box hover:shadow-lg transition-all duration-300 max-w-xs flex flex-col justify-center items-center rounded p-4 bg-gray-100">
            <div className='w-16 h-16 rounded-full bg-cover' style={{ backgroundImage: "url('./social.svg')" }}></div>
            <div className="min-h-150px flex my-1 gap-2 flex-col justify-center items-center mt-2 max-w-sm">
              <h5 className='font-bold'>Social Media Ads</h5>
              <p className='text-center'>Create engaging and unique ad copy for Facebook, Twitter, LinkedIn, and other social media platforms.</p>
            </div>
          </div>
          <div className="box hover:shadow-lg transition-all duration-300 max-w-xs flex flex-col justify-center items-center rounded p-4 bg-gray-100">
            <div className='w-16 h-16 rounded-full bg-cover' style={{ backgroundImage: "url('./websites.svg')" }}></div>
            <div className="min-h-150px flex my-1 gap-2 flex-col justify-center items-center mt-2 max-w-sm">
              <h5 className='font-bold'>Website Content</h5>
              <p className='text-center'>Create imaginative and convincing copy for the various areas of your landing page.</p>
            </div>
          </div>
        </div>
        <h5 className='text-center text-indigo-500 font-bold'>and much more..</h5>
      </div>

      {/* PRICING */}

      <Pricing />

      {/* FOOTER */}

      <Footer />
    </>
  )
}

export default Login