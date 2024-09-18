"use server";

import { signIn, signOut } from "./auth";

// When user signs in, redirect to account page
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
