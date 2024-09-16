import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
 const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                phoneNumber:{label:"phoneNumber",type:"number"},
                password: { label: "password", type: "password" },
            },
          authorize: async (credentials) => {
                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                });

                const user = await res.json();

                if (res.ok) {
                    return user;
                } else {
                     throw new Error(user.message);
                }
            },

        }),
        
    ],
    
     pages: {
         signIn: "login"
     },
     secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (token) {
                session.user = token.user;
            }
            return session;
        },
    },
};
const handler =  NextAuth(authOptions)

export { handler as GET, handler as POST };
