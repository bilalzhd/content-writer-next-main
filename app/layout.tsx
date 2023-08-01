import { SessionProvider } from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';

import './globals.css'
import { Inter } from 'next/font/google'
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ChatApp from '@/components/ChatApp';
import { AppProvider } from '@/lib/context/AppContext';
import Head from 'next/head';
import Script from 'next/script';
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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6MN9ZSCP4V" />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6MN9ZSCP4V');
        `}
      </Script>
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <AppProvider>
              <ChatApp>
                {children}
              </ChatApp>
            </AppProvider>
          )}
        </SessionProvider>
      </body >
    </html >
  )
}
