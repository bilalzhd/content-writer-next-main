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
              href="#demo"
              className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
            >
              View Demo
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
        <h3 className="w-full px-5 my-3 mt-2 text-xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
          Create <span className='text-indigo-500'>brilliant</span> content with ease.
        </h3>
        <p className='my-3 py-3 text-center'>Writer&apos;s block is a thing of the past since you can quickly and easily auto-generate engaging, unique, and high-converting copy for blogs, emails, and advertisements in a variety of tones and languages. Simply select a use case, provide some information, and presto—your copy is prepared!</p>
        <Features items={items} images={images} />
      </div>
      <div className='container my-5 md:mb-20 px-4 md:px-12 max-w-3xl mx-auto py-4'>
        <h3 className="w-full px-5 my-3 mt-2 text-xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
          Create a <span className='text-indigo-500'>masterpiece</span> that is flawless.
        </h3>
        <p className='my-3 py-3 text-center'>Use a strong, rich-text editor to quickly transform your unpolished ideas into a polished work; it takes only approximately 15 minutes to compose a 1,000 word essay! Before clicking the submit button, improve the content&apos;s quality by rewording, shortening, and doing much more.</p>
        <Features items={items2} images={images2} />
      </div>

      <div className='md:max-w-4xl mb-5 md:mb-20 mx-auto'>
        <h3 className="w-full px-5 my-3 mt-2 text-xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">The top, integrated <span className='text-indigo-500'> writing platform</span></h3>
        <p className='my-3 py-3 text-center'>Are you sick of having to manage a billion applications in your writing process? With Content Writer, you can handle everything from a one location. You won&apos;t need to go between tools for SEO, grammar, and other things while writing; instead, you can concentrate on getting the job done quickly.</p>
      </div>
      <div className='container px-5 flex'>
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
      </div>
      <div className="container my-5 md:my-20 py-5 ">
        <h3 className='max-w-3xl mx-auto px-5 my-3 mt-2 text-xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-3xl md:px-0'>Automatically produce top-notch content for more than <span className='text-indigo-500'>20+ use-cases</span></h3>
        <div className="boxes flex flex-col md:flex-row gap-3 my-5 max-w-4xl mx-auto">
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
        <div className="boxes flex flex-col md:flex-row gap-3 my-5 max-w-4xl mx-auto">
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