import NextAuth from 'next-auth'
import Providers from 'next-auth/providers/github'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
