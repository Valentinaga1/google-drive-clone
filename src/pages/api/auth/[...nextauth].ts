//@ Packages
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

// Authentication provider options
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider(({
      clientId: process.env.VERCEL_GITHUB_ID,
      clientSecret: process.env.VERCEL_GITHUB_SECRET,
    } as GithubAuth)),
    GoogleProvider(({
      clientId: process.env.VERCEL_GITHUB_ID,
      clientSecret: process.env.VERCEL_GITHUB_SECRET,
    } as GithubAuth)),
  ],
}


export default NextAuth(authOptions);
