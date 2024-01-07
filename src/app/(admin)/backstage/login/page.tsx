import React from "react";

import GoogleAuthButton from "@/components/auth/google-button";

const LoginPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Connect using one of the providers below
            </p>
            <GoogleAuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
