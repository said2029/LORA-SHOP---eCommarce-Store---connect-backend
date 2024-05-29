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
    <div className="bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/laptop-near-smartphone-tags-tablet-packet_23-2147961975.jpg?t=st=1716724489~exp=1716728089~hmac=2e25ba4c50ec9bdda6b4891d1835eb274f5717cd7784269c2f5001d93777aa72&w=996')]">
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
