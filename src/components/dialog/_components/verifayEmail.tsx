import { Button } from "@mui/material";
import OTPInput from "./OTPInput";

export default function VerifayEmail({
  selectMode,
  next="",
}: {
  selectMode: (value: string) => void;
  next?: string;
}) {
  const VerifyEmail = () => {
    selectMode(next);
  };
  return (
    <div className="w-[400px] flex justify-center items-center flex-col space-y-5 px-4 text-center py-6">
      <div>
        <img width={100} src="/images/icons/message.gif" alt="" />
      </div>
      <h1 className="text-xl font-semibold">Verify you email addrees</h1>
      <p className="text-gray-500 text-sm">
        An email With a verification was just sent to you email address
      </p>
      <Button className="font-semibold text-sm" variant="text">
        Resend again
      </Button>

      <div>
        <OTPInput />
      </div>
      <Button
        onClick={VerifyEmail}
        className="mt-10"
        fullWidth
        color="success"
        variant="contained"
      >
        NEXT
      </Button>
    </div>
  );
}
