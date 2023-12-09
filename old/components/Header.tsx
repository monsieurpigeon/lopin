"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import { authenticate } from "../app/lib/actions";

export default function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center" p={2}>
      <Text fontSize="2xl">🏡 Lopin</Text>
      <Button onClick={() => authenticate()}>Me connecter</Button>
    </Flex>
  );
}
