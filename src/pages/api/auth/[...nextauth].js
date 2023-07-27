import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
              placeholder: "Name"
          },
          password: {
              label: "Password:",
              type: "password",
              placeholder: "Password"
          }
      },
      async authorize(credentials) {
          // This is where you need to retrieve user data 
          // to verify with credentials
          // Docs: https://next-auth.js.org/configuration/providers/credentials
          const user = { id: "42", name: "dani", password: "12345" }

          if (credentials?.username === user.name && credentials?.password === user.password) {
              return user
          } else {
              return null
          }
      }
  })
  ],

  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token , account, profile}) {
   
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = account.id
        token.provider = account?.provider
      }
      return token 
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.



      session.accessToken = token.accessToken
      session.user.id = token.id

      session.provider = token?.provider

    
      return session
    }
  },

  // pages:{
  //     signIn:'/signin',
  //     signOut:'/signout'
  // }
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
