import { Button } from "@mui/material";
import OTPInput from "./OTPInput";
import ButtonSend from "./buttonSend";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { Alert } from "@material-tailwind/react";

export default function VerifayEmail({
  selectMode,
  next = "",
  bodyUser = {
    email: "",
    name: "",
    token: "",
    _id: "",
    mode: "",
    Valied_url: "",
    sendEmailUrl: "",
  },
}: {
  selectMode: (value: string, body?: any) => void;
  next?: string;
  bodyUser?: {
    email: string;
    name: string;
    token: string;
    _id: string;
    mode: string;
    Valied_url: string;
    sendEmailUrl: string;
  };
}) {
  const [_, SetCookie] = useCookies(["access_token"]);
  const [otp, setOtp] = useState("");
  const CodeValid = useRef("0");
  const [alert, setOpenAlert] = useState({
    active: false,
    massega: "samething wrong!",
  });

  const VerifyEmail = async () => {
    if (CodeValid.current && otp === CodeValid.current) {
      let url = bodyUser.Valied_url;

      if (bodyUser.mode != "forgerPassword") {
        const reap = await fetch(url, {
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
          setOpenAlert((old)=>({...old,active:true}))
        }
      }else{
        selectMode("ResetPassword",{email:bodyUser.email});
      }
    } else {
      setOpenAlert((old)=>({...old,active:true}))
    }
  };

  async function SendCode() {
    const url = bodyUser.sendEmailUrl;
    if (!bodyUser.email) {
      return selectMode(next);
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: bodyUser.email,
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
      <Alert
        open={alert.active}
        onClose={() => setOpenAlert((old) => ({ ...old, active: false }))}
        color="red"
        animate={{
          mount: { x: 0 },
          unmount: { x: 100 },
        }}
      >
        {alert.massega}
      </Alert>
      <div>
        <img width={100} src="/images/icons/message.gif" alt="" />
      </div>
      <h1 className="text-xl font-semibold">Verify you email addrees</h1>
      <p className="text-gray-500 text-sm">
        An email With a verification was just sent to your email address
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
