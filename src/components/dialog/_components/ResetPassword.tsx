import { Button, TextField } from "@mui/material";

export default function ResetPassword({
  selectMode,
}: {
  selectMode: (value: string) => void;
}) {
  return (
    <div className="w-[400px] px-4 py-6 space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-base-color-500">
          Reset password
        </h1>
        <p>Please, enter a new
        password below.</p>
      </div>

      <form className="space-y-3">
        <TextField
          required
          type="password"
          fullWidth
          size="small"
          id="outlined-basic"
          label="New Password"
          variant="outlined"
        />
        <TextField
          required
          type="password"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Confirm a new Password"
          variant="outlined"
        />
        <Button
          type="submit"
          className="  hover:bg-base-color-200/75 bg-base-color-500"
          variant="contained"
          fullWidth
        >
          Reset password
        </Button>
      </form>
    </div>
  );
}
