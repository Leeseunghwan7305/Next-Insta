"use client";
import ColorButton from "@/app/common/ui/ColorButton";
import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const SignInPage = ({ providers, callbackUrl }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`Sign In with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        ></ColorButton>
      ))}
    </>
  );
};

export default SignInPage;
