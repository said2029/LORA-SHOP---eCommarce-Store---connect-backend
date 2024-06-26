import { EmailOutlined, Google, PasswordOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { log_In } from "../../../_utils/auth/actions";
import { useCookies } from "react-cookie";
import ButtonSend from "./buttonSend";
import { useSelector } from "react-redux";
import { getStoreState } from "@/Redux/store";
import { ShowToasit_Success } from "@/_lib/ToasitControle";

export default function Log_in({
  selectMode,
}: {
  selectMode: (value: string, body?: any) => void;
}) {

  const [_, SetCookie] = useCookies(["access_token"]);
  
  const storeSetting= useSelector(getStoreState).storeSetting;

  return (
    <div className="flex  flex-col items-center justify-center space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto max-w-full w-[400px]">

      <div className="mx-auto mb-2 space-y-3 text-center">
        <h1 className=" text-3xl font-bold text-gray-800">Log In</h1>
        <p className="text-gray-500">Login with your email and password</p>
      </div>
      <form
        action={async (formData) => {
          const result = await log_In(formData);
          if (result) {
            if (result.error) {
              ShowToasit_Success("Password or Email is not correct!");
            } else {
              if (result.data.user.isVerfied == true) {
                SetCookie("access_token", result.data.token);
                window.localStorage.setItem("UserId", result.data.user._id);
                window.localStorage.setItem("UserImage", result.data.user.imageUser);
              } else {
                selectMode("verifayEmail", {
                  email: result.data.user.email,
                  name: result.data.user.FirstName,
                  token: result.data.token,
                  _id: result.data._id,
                  Valied_url: "/api/valid_customer",
                  sendEmailUrl: "/api/verify_Email",
                  mode: "log In",
                });
              }
            }
          }
        }}
        className="w-full space-y-6"
      >
        <div className="relative w-full">
          <EmailOutlined
            scale={2}
            className="absolute top-0 bottom-0 my-auto ms-2 text-gray-500"
          />

          <input
            required
            type="email"
            id="email"
            name="email"
            value={"test@gmail.com"}
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
        <div className="relative w-full">
          <PasswordOutlined
            scale={2}
            className="absolute top-0 bottom-0 my-auto ms-2 text-gray-500"
          />

          <input
            required
            type="password"
            id="password"
            name="password"
            value="12345"
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

        <p
          onClick={() => {
            selectMode("ForgetPassword");
          }}
          className="mt-3 text-sm text-gray-500 cursor-pointer"
        >
          forget password!
        </p>
        <ButtonSend name="Login" />
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
      {storeSetting?.settingData?.body?.GoogleLogin == true && (
        <>
          <h1>OR</h1>
          <div className="w-full">
            <Button
              href={process.env.BACKENDURL + "/auth/google"}
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
