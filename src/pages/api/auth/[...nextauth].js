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
    // Configure one or more authentication providers
    providers: [

        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_CLIENTSECRET,
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_SECRET,
        // }),
    ],
    secret:process.env.JWT_SECRET,
    pages:{
        signIn:'api/auth/github',
        signOut:'/signout'
    }
}
export default NextAuth(authOptions)