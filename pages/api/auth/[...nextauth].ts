import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  //   Credentials({
  //     type: 'credentials',
  //     credentials: {},
  //     authorize(credentials, req){
  //       const {email, password} = credentials as {
  //         email: string,
  //         password: string
  //       }
  //       if(email !== 'bilalzhd02@gmail.com' || password !== "12345678"){
  //         return null;
  //       }
  //       return {id: '12345678', name: 'Bilal Zahid', email: email, password: password}
  //     },
  //   })
    
  //   // ...add more providers here
  ],
  // pages: {
  //   signIn: '/auth/signin'
  // }
  
}

export default NextAuth(authOptions)