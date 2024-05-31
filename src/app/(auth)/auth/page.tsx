"use client";
import SignUp from "./_components/signUp";
import SignIn from "./_components/signIn";
import { ForgetPass } from "./_components/forgetPass";
import { useState } from "react";

export default function page() {
  const [ActionWindow, setActionWindow] = useState({
    signIn: true,
    signUp: false,
    RestarPass: false,
  });

  return (
    <div className="bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <section className="min-h-svh">
        <div className="flex justify-center items-center h-full min-h-svh ">
          <main className="bg-white  shadow-gray-700 p-6 rounded-xl backdrop-blur-sm ">
            {ActionWindow.signIn ? (
              <SignIn
                toSignIn={() => {
                  setActionWindow({
                    signIn: false,
                    signUp: true,
                    RestarPass: false,
                  });
                }}
                toForget={() => {
                  setActionWindow({
                    signIn: false,
                    signUp: false,
                    RestarPass: true,
                  });
                }}
              />
            ) : ActionWindow.signUp ? (
              <SignUp
                toSignIn={() => {
                  setActionWindow({
                    signIn: true,
                    signUp: false,
                    RestarPass: false,
                  });
                }}
              />
            ) : (
              <ForgetPass
                openSignUp={() => {
                  setActionWindow({
                    signIn: false,
                    signUp: true,
                    RestarPass: false,
                  });
                }}
              />
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
