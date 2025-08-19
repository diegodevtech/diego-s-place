  import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
  import { signOutAction } from "../_service/actions";

  function SignOutButton() {
    return (
      // It works even though its a client component
      <form action={signOutAction}>
        <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full cursor-pointer">
          <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-primary-600" />
          <span>Sign out</span>
        </button>
      </form>
    );
  }

  export default SignOutButton;
