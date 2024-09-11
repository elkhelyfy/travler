"use server";
import { signIn, signOut } from "@/auth";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

const registration = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const createUser = await db.user.create({
    data: {
      email,
      hashPassword: hashedPassword,
      username,
    },
  });

    redirect("/signin"); // Assuming redirect is a function that handles navigation
};

const doLoginCredintails = async (formData : FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    const result = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });

  } catch (error) {
    const someError = error as CredentialsSignin;
  }
  redirect('/');
}

const logOut = async () => {
  await signOut();
}

export { registration, doLoginCredintails, logOut };
