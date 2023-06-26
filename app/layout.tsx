import Sidebar from '@/components/Sidebar';
import { SessionProvider } from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';

import './globals.css'
import { Inter } from 'next/font/google'
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ClientProvider from '@/components/ClientProvider';
import SidebarContainer from '@/components/SidebarContainer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Content Writer',
  description: 'Write content like articles, papers, assignments, and much more with Content Writer',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <SidebarContainer />
              <ClientProvider />
              <div className='bg-[#343541] flex-1'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body >
    </html >
  )
}
