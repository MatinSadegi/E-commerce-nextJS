import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import db from "../../../utils/db";
import { verifyPassword } from "../../../utils/auth";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // async jwt({ token, user }) {
    //   if (user?._id) token._id = user._id;
    //   if (user?.isAdmin) token.isAdmin = user.isAdmin;
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (token?._id) session.user._id = token._id;
    //   if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
    //   return session;
    // },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        const user = await User.findOne({
          email: credentials.email,
        });
        
        if (!user) {
          db.disconnect();
          throw new Error("No user found");
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          db.disconnect();
          throw new Error("Could not log you in");
        }

        db.disconnect();
        return {
          email: user.email,
          name:user
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
