import Image from "next/image";
import { signInAction } from "../_service/actions";

export const metadata = {
  title: "Login",
};

function SignInButton() {
  return (
    // we use this technique because its a server component, so we can not use onClick()
    // this way, using server actions we kind of craft a way t have interaction
    <form action={undefined}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium cursor-pointer">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
