import { EmailOutlined, Google, PasswordOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { log_In } from "../../../_utils/auth/actions";
import { Alert } from "@material-tailwind/react";
import { useCookies } from "react-cookie";
import { redirect } from "next/navigation";

export default function Log_in({
  selectMode,
}: {
  selectMode: (value: string) => void;
}) {
  const [alert, setAlert] = useState({
    show: false,
    massage: "",
    color: "bg-red-500",
  });

  const [_, SetCookie] = useCookies(["access_token"]);
  return (
    <div className="flex  flex-col items-center justify-center space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto max-w-full w-[400px]">
      <Alert
        open={alert.show}
        className={alert.color}
        onClose={() => setAlert({ show: false, massage: "", color: "" })}
        animate={{
          mount: { y: 0 },
          unmount: { y: -100 },
        }}
      >
        {alert.massage}
      </Alert>

      <div className="mx-auto mb-2 space-y-3 text-center">
        <h1 className=" text-3xl font-bold text-gray-800">Log In</h1>
        <p className="text-gray-500">Login with your email and password</p>
      </div>
      <form
        action={async (formData) => {
          const result = await log_In(formData);
          if (result) {
            if (result.error) {
              setAlert({
                show: true,
                massage: "Password or Email is not correct!",
                color: "bg-red-500",
              });
            } else {
              SetCookie("access_token", result.data.token);
              window.localStorage.setItem("UserId", result.data.user._id);
              redirect('/');
            }
          }
        }}
        className="w-full space-y-6"
      >
        <div className="relative  w-full">
          <EmailOutlined
            scale={2}
            className="absolute top-0 bottom-0 my-auto ms-2 text-gray-500"
          />

          <input
            required
            type="email"
            id="email"
            name="email"
            className="ps-10 border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-base-color-500 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="ps-10 absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:bg-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-base-color-500"
          >
            Enter Your Email
          </label>
        </div>
        <div className="relative mt-2 w-full">
          <PasswordOutlined className="absolute top-0 bottom-0 my-auto ms-2 text-gray-500" />
          <input
            required
            type="password"
            id="password"
            name="password"
            className="ps-10 border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-base-color-500 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="ps-10 absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:bg-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-base-color-500"
          >
            Enter Your password
          </label>
        </div>
        <button className="rounded-lg w-full bg-base-color-500 py-3 font-bold text-white mt-6">
          Login
        </button>
      </form>
      <div>
        Don't have an account{"  "}
        <button
          onClick={() => {
            selectMode("sign in");
          }}
          className="font-bold"
        >
          ?Sign Up
        </button>
      </div>
      <h1>OR</h1>
      <div className="w-full">
        <Button
          fullWidth
          size="large"
          variant="contained"
          className="flex items-center gap-3"
          color="success"
        >
          <Google />
          <span>Login With Google</span>
        </Button>
      </div>
      {/* Don't have an account?Sign Up */}
    </div>
  );
}
