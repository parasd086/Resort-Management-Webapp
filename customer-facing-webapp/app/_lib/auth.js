import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    //So basically NextAuth is going to call this function hereor this route that has been protected here.
    //And so this authorized needs to return either true or false.But if we return false, well then, then not of course.
    //auth = current session here
    authorized({ auth, request }) {
      //"!!" is a shorthand technique often used for converting a value to its equivalent boolean representation.
      //The first ! negates the value, and the second ! negates it again, effectively casting it to a boolean
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
