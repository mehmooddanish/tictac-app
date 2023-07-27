import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signOut } from "next-auth/react";

// export default NextAuth({
//     providers: [

//         GithubProvider({
//             clientId: process.env.GIT_ID,
//             clientSecret: process.env.GIT_SECRET,
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_SECRET,
//         }),
//     ],
//     secret: process.env.API_SERVER_SECRET

// })
const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_CLIENTSECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
          username: {
              label: "Username:",
              type: "text",
              placeholder: "your-cool-username"
          },
          password: {
              label: "Password:",
              type: "password",
              placeholder: "your-awesome-password"
          }
      },
      async authorize(credentials) {
          // This is where you need to retrieve user data 
          // to verify with credentials
          // Docs: https://next-auth.js.org/configuration/providers/credentials
          const user = { id: "42", name: "Dave", password: "nextauth", role: "manager" }

          if (credentials?.username === user.name && credentials?.password === user.password) {
              return user
          } else {
              return null
          }
      }
  })
  ],

  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.id = profile.id;
  //       token.provider = account?.provider;
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     session.accessToken = token.accessToken;
  //     session.user.id = token.id;
  //     session.provider = token?.provider;
  //     return session;
  //   },
  // },
  pages: {
    signIn: '/',
    // signOut: "/",
  }, 
};
export default NextAuth(authOptions);
