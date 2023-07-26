import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
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
        })
    ],


    secret:process.env.JWT_SECRET,
    callbacks: {
         jwt(token, user) {
          if (user) {
            // If the user exists, add the type key to the token
            token.type = user.provider;
          }
          return token;
        },
         session(session, token) {
          if (token) {
            // If the token exists, add the type key to the session
            session.user.type = token.type;
          }
          return session;
        },
      },
    
    // pages:{
    //     signIn:'/signin',
    //     signOut:'/signout'
    // }
}
export default NextAuth(authOptions)