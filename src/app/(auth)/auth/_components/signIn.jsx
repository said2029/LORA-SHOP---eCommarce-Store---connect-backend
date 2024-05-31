import { Button } from "@material-tailwind/react";

export default function SignIn(props) {

  
  return (
    <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-3xl font-semibold">Sing in</h1>

      <form method="post" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6">
          <label
            htmlFor="FirstName"
            className="block"
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

        <div className="col-span-6">
          <label htmlFor="Password"> Password </label>

          <input
            type="password"
            id="Password"
            name="password"
            placeholder="Password"
            className="mt-1 w-full rounded-lg border border-gray-300 py-1 px-1 focus:border-gray-400 outline-none"
          />
          <button type="button"  onClick={()=>{props.toForget()}} className="mt-2 text-sm text-gray-600">Forget password!</button>
        </div>





        <div className="col-span-6">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our
            <a href="#" className=" underline">
              {" "}
              terms and conditions{" "}
            </a>
            and
            <a href="#" className=" underline">
              privacy policy
            </a>
            .
          </p>
        </div>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <Button className="bg-light-blue-600" type="submit">
         Sign In
        </Button>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            I don't have an account?
            <button
              type="button"
              onClick={() => {
                props.toSignIn();
              }}
              className=" underline "
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
