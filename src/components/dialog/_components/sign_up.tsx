import { EmailOutlined, Google, PasswordOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { User } from "lucide-react";
import sing_up from "../../../_utils/auth/actions";
import { useRef, useState } from "react";
import { Alert, Button as ButtonLoading } from "@material-tailwind/react";
import ButtonSend from "./buttonSend";
import { useSelector } from "react-redux";
import { getStoreState } from "@/Redux/store";

export default function Sign_up({
  selectMode,
}: {
  selectMode: (value: string) => void;
}) {
  const [alert, setAlert] = useState({
    show: false,
    massage: "",
    color: "bg-red-500",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const storeSetting = useSelector(getStoreState).storeSetting;

  return (
    <div className="flex  flex-col items-center justify-center space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto max-w-full w-[500px]">
      <Alert
        open={alert.show}
        className={alert.color}
        onClose={() => setAlert({ show: false, massage: "", color: "" })}
        animate={{
          mount: { x: 0 },
          unmount: { x: 100 },
        }}
      >
        {alert.massage}
      </Alert>
      <div className="mx-auto mb-2 space-y-3 text-center">
        <h1 className=" text-3xl font-bold text-gray-800">Sign Up</h1>
        <p className="text-gray-500">
          Create an account by sign up with provider.
        </p>
      </div>
      <form
        ref={formRef}
        action={async (formData) => {
          formRef.current?.reset();
          const result = await sing_up(formData);
          if (result && result?.error != "") {
            setAlert({
              show: true,
              massage: "sometheng wrong!",
              color: "bg-red-400",
            });
          } else {
            setAlert({
              show: true,
              massage: "Successfull",
              color: "bg-teal-400",
            });
            selectMode("log in");
          }
        }}
        className="w-full space-y-6"
      >
        <div className="flex gap-3">
          <div className="relative  w-full">
            <User
              scale={2}
              className="absolute top-0 bottom-0 my-auto ms-2 text-gray-500"
            />

            <input
              required
              type="text"
              id="First Name"
              className="ps-10 border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-base-color-500 focus:outline-none focus:ring-0"
              placeholder=" "
              name="FirstName"
            />
            <label
              htmlFor="name"
              className="ps-10 absolute pointer-events-none top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:bg-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-base-color-500"
            >
              First Name
            </label>
          </div>

          <div className="relative  w-full">
            <User
              scale={2}
              className="absolute top-0 bottom-0 my-auto ms-2 text-gray-500"
            />

            <input
              required
              type="text"
              id="Last name"
              className="ps-10 border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-base-color-500 focus:outline-none focus:ring-0"
              placeholder=" "
              name="lastName"
            />
            <label
              htmlFor="Last Name"
              className="ps-10 pointer-events-none absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:bg-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-base-color-500"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="relative mt-2 w-full">
          <EmailOutlined className="absolute top-0 bottom-0 my-auto ms-2 text-gray-500" />
          <input
            required
            type="email"
            id="email"
            className="ps-10 border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-base-color-500 focus:outline-none focus:ring-0"
            placeholder=" "
            name="email"
          />
          <label
            htmlFor="email"
            className="ps-10 absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:bg-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-base-color-500"
          >
            Enter Your Eamil
          </label>
        </div>
        <div className="relative mt-2 w-full">
          <PasswordOutlined className="absolute top-0 bottom-0 my-auto ms-2 text-gray-500" />
          <input
            required
            type="password"
            id="password"
            className="ps-10 border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-base-color-500 focus:outline-none focus:ring-0"
            placeholder=" "
            name="password"
          />
          <label
            htmlFor="password"
            className="ps-10 absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:bg-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-base-color-500"
          >
            Enter Your password
          </label>
        </div>
        <ButtonSend name="Sign Up" />
      </form>
      <div>
        I have an account{"  "}
        <button
          onClick={() => {
            selectMode("log in");
          }}
          className="font-bold"
        >
          ? log In
        </button>
      </div>
      {storeSetting?.settingData?.body?.GoogleLogin == true && (
        <>
          <h1>OR</h1>
          <div className="w-full">
            <Button
              href={process.env.NEXT_PUBLIC_BACKENDURL + "/auth/google"}
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
        </>
      )}
      {/* Don't have an account?Sign Up */}
    </div>
  );
}
