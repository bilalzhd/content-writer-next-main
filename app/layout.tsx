import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Content Writer',
  description: 'Write content like articles, papers, assignments, and much more with Content Writer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <div className='bg-[#202123] max-w-[260px] h-screen overflow-y-auto md:min-w-[20rem]'>
            <Sidebar />
          </div>
          {/* CLIENT PROVIDER - NOTIFICATION */}
          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  )
}
