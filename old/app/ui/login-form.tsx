"use client";

import { Button } from "@chakra-ui/react";

export default function LoginForm() {
  return (
    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
      <LoginButton />
    </div>
  );
}

function LoginButton() {
  return <Button>Log in</Button>;
}
