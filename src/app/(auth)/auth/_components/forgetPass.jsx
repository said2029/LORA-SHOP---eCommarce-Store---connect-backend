import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export function ForgetPass(porp) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Forget Password!
      </Typography>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            type="email"
            required
            label="Email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 ps-7"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button className="mt-6 bg-light-blue-600" fullWidth>
          Send
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => {
              porp.openSignUp();
            }}
            className="font-medium text-gray-900"
          >
            Sign Up
          </button>
        </Typography>
      </form>
    </Card>
  );
}
