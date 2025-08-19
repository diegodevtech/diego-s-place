import { signIn, signOut } from "./auth";

export async function signInAction() {
  // When we have multiple providers, we have to loop over the providers array
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}