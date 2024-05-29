import { Button } from "@material-tailwind/react";

export default function SignUp(props) {
  return (
    <div className="max-w-xl lg:max-w-3xl">
      <h1 className="text-3xl font-semibold">Sing Up</h1>

      <form  method="post" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium"
          >
            First Name
          </label>

          <input
            type="text"
            id="FirstName"
            name="first_name"
            placeholder="FirstName"
            className="mt-1 w-full rounded-lg border border-gray-300 py-1 px-1 focus:border-gray-400 outline-none"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="LastName"
            className="block text-sm font-medium "
          >
            Last Name
          </label>

          <input
            type="text"
            id="LastName"
            name="last_name"
            placeholder="FirstName"
            className="mt-1 w-full rounded-lg border border-gray-300 py-1 px-1 focus:border-gray-400 outline-none"
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="Email"> Email </label>

          <input
            type="email"
            id="Email"
            name="email"
            placeholder="Email"
            className="mt-1 w-full rounded-lg border border-gray-300 py-1 px-1 focus:border-gray-400 outline-none"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="Password"> Password </label>

          <input
            type="password"
            id="Password"
            name="password"
            placeholder="Password"
            className="mt-1 w-full rounded-lg border border-gray-300 py-1 px-1 focus:border-gray-400 outline-none"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="PasswordConfirmation" placeholder="FirstName">
            Password Confirmation
          </label>

          <input
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation"
            placeholder="PasswordConfirmation"
            className="mt-1 w-full rounded-lg border border-gray-300 py-1 px-1 focus:border-gray-400 outline-none"
          />
        </div>


        <div className="col-span-6">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our
            <a href="#" className="text-gray-700 underline">
              {" "}
              terms and conditions{" "}
            </a>
            and
            <a href="#" className="text-gray-700 underline">
              privacy policy
            </a>
            .
          </p>
        </div>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <Button className="bg-light-blue-600" type="submit">
         Sign Up
        </Button>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <button
              type="button"
              onClick={() => {
                props.toSignIn();
              }}
              className="text-gray-700 underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
