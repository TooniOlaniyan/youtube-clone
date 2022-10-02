import NextAuth from 'next-auth'
import Providers from 'next-auth/providers/github'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
