import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";
import mongoose from "mongoose";
import User from "../../../../models/User";

//import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";

export const authOptions = {
  providers: [
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,


  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
   if(account.provider == "github"){
    //connect to a database
    const client = await mongoose.connect("mongodb://localhost:27017/chai", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    const userEmail = user.email;
    //check if the user already exists in the database
    const currentUser =await User.findOne({ email: userEmail });
    if (!currentUser) {
      //if not, create a new user
      const newUser = new User({
        email: userEmail,
        username: userEmail.split("@")[0],
      });
      await newUser.save()
    }
    return true
   }
   return false;
  },
   async session({ session, user, token }) {
    const dbUser = await User.findOne({ email: session.user.email });
    if (dbUser) {
      session.user.username = dbUser.username;
    }
    return session;
  },
  }
};


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };

