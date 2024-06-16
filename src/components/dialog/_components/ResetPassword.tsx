import { Alert } from "@material-tailwind/react";
import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import ButtonSend from "./buttonSend";

export default function ResetPassword({
  selectMode,
  bodyUser,
}: {
  selectMode: (value: string) => void;
  bodyUser?: { email: string };
}) {
  const [alert, setOpenAlert] = useState({
    active: false,
    massega: "The password does not match another!",
  });

  async function onSubmit(event: FormData) {
    const dataForm = event;

    if (dataForm.get("password1") === dataForm.get("password2")) {
      const respons = await fetch("/api/reset_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: bodyUser?.email,
          password: dataForm.get("password1"),
        }),
      });
      const responsData = await respons.text();
      if (responsData) {
        selectMode("log in");
        return;
      } else {
        setOpenAlert({ massega: "Password reset failed; try again!", active: true });
      }
    } else {
      setOpenAlert((old) => ({ ...old, active: true }));
    }
  }

  return (
    <div className="w-[400px] px-4 py-6 space-y-6">
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
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-base-color-500">
          Reset password
        </h1>
        <p>Please, enter a new password below.</p>
      </div>

      <form
        action={async (formData) => onSubmit(formData)}
        className="space-y-3"
      >
        <TextField
          required
          type="password"
          fullWidth
          size="small"
          id="outlined-basic"
          label="New Password"
          variant="outlined"
          name="password1"
        />
        <TextField
          required
          type="password"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Confirm a new Password"
          variant="outlined"
          name="password2"
        />
        <ButtonSend name="Reset password" />
      </form>
    </div>
  );
}
