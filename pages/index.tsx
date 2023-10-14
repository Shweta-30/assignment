import { useSession, signIn, signOut } from "next-auth/react";
import SignUp from "./SignupForm";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-col gap-1">
        <span className="text-2xl text-center">
          Welcome, {session.user?.email}
        </span>
        <button
          className="bg-black text-white px-2 py-2 w-fit rounded-lg mx-auto"
          onClick={() => signOut()}
        >
          LogOut
        </button>
      </div>
    );
  } else {
    return (
      <span className="flex flex-col gap-1 justify-start text-center pt-4">
        <div className="App">
          {/* <h1>Login</h1>
          <LoginForm /> */}
          <SignupForm />
        </div>{" "}
        <span>To Continue to the application hit below button</span>
        <button
          className="bg-black text-white px-2 py-2 w-fit mx-auto"
          onClick={() => signIn("google")}
        >
          Google login
        </button>
      </span>
    );
  }
}
