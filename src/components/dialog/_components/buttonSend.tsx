import { Button } from "@material-tailwind/react";
import { useFormStatus } from "react-dom";

export default function ButtonSend({
  name = "sign Up",
  onClick = () => {},
}: {
  name?: string;
  onClick?: () => void;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      onClick={() => {
        onClick();
      }}
      type="submit"
      className="bg-base-color-500 disabled:opacity-75"
      fullWidth
      loading={pending}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {pending ? "Processing....." : name}
    </Button>
  );
}
