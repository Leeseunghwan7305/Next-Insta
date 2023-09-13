import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../[...nextauth]/route";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import SignInPage from "@/components/SignIn/page";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

const SignIn = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[30%]">
      <SignInPage providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SignIn;
