import { Button, TextField } from "@mui/material";

export default function ForgetPassword({
  selectMode,
}: {
  selectMode: (value: string) => void;
}) {
  return (
    <div className="w-[400px] px-4 py-6 space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-base-color-500">
          Forget password
        </h1>
        <p>Enter your email to send reset password Code</p>
      </div>

      <form className="space-y-3">
        <TextField
          required
          type="email"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <Button
          type="submit"
          className="  hover:bg-base-color-200/75 bg-base-color-500"
          variant="contained"
          fullWidth
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
