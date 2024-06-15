import { Button } from "@mui/material";
import OTPInput from "./OTPInput";
import ButtonSend from "./buttonSend";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";

export default function VerifayEmail({
  selectMode,
  next = "",
  bodyUser = { email: "", name: "", token: "", _id: "" },
}: {
  selectMode: (value: string) => void;
  next?: string;
  bodyUser?: { email: string; name: string; token: string; _id: string };
}) {
  const [_, SetCookie] = useCookies(["access_token"]);
  const [otp, setOtp] = useState("");
  const CodeValid = useRef("0");

  const VerifyEmail = async () => {
    if (CodeValid.current && otp === CodeValid.current) {
      const reap = await fetch("/api/valid_customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: bodyUser.email,
        }),
      });
      const respons = await reap.json();
      if (respons == "success") {
        SetCookie("access_token", bodyUser.token);
        window.localStorage.setItem("UserId", bodyUser._id);
      } else {
        console.log("samething wrong!");
      }
    } else {
      console.log("samething wrong!");
    }
  };

  async function SendCode() {
    if (!bodyUser.email) {
      return selectMode(next);
    }
    const response = await fetch("/api/verify_Email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: bodyUser.email,
        name: bodyUser.name,
      }),
    });
    const Data = await response.json();
    CodeValid.current = Data?.code;
  }
  useEffect(() => {
    SendCode();
  }, []);

  return (
    <div className="w-[400px] flex justify-center items-center flex-col space-y-5 px-4 text-center py-6">
      <div>
        <img width={100} src="/images/icons/message.gif" alt="" />
      </div>
      <h1 className="text-xl font-semibold">Verify you email addrees</h1>
      <p className="text-gray-500 text-sm">
        An email With a verification was just sent to you email address
      </p>
      <Button
        onClick={async () => {
          await SendCode();
        }}
        className="font-semibold text-sm"
        variant="text"
      >
        Resend again
      </Button>

      <div>
        <OTPInput setOtp={[otp, setOtp]} />
      </div>
      <ButtonSend
        onClick={() => {
          VerifyEmail();
        }}
        name="NEXT"
      />
    </div>
  );
}
