import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

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
    //So, it's a bit like middleware, if you think about it.  It happens after the user has put in their credentials,  but before they're actually  like really, really locked into the application.
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        // has to return true to move-on with whole sign-in process.
        return true;
      } catch {
        //if there's error in getGuest() it will not move on with whole sign-in process.
        return false;
      }
    },
    //and it runs after the sign in callback,  and also each time that the session is checked out.
    //And so, here, we actually get access to the session,  and so this is the perfect place  to add the guest ID to that session.
    // Here, we want to add "guestId" from supabase guest table to be available in the "session" object in the app.
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      //And then we need to return a session here,  otherwise, the whole thing will be broken.  Then we get no more session once we call off.
      return session;
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
