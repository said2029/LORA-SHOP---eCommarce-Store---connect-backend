import { Button, TextField } from "@mui/material";
import { FormEvent, useRef } from "react";
import ButtonSend from "./buttonSend";

export default function ForgetPassword({
  selectMode,
}: {
  selectMode: (value: string, body?: any) => void;
}) {

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    selectMode("verifayEmail",{
      email: dataForm.get("email"),
      mode:"forgerPassword",
      sendEmailUrl:"/api/forget_password"
    })
  }

  return (
    <div className="w-[400px] px-4 py-6 space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-base-color-500">
          Forget password
        </h1>
        <p>Enter your email to send reset password Code</p>
      </div>

      <form onSubmit={submitForm} className="space-y-3">
        <TextField
          required
          type="email"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
        />
        <ButtonSend name="Continue"/>
      </form>
    </div>
  );
}
