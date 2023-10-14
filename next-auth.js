import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId:
        "519025508606-281ovmbf4u0qndrreqcti4iboii4gott.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // Add other authentication providers if needed
  ],
  // Add custom configurations if needed
});
