"use client";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center" p={2}>
      <Text fontSize="2xl">🏡 Lopin</Text>
      <Button
        onClick={() => {
          console.log("connect");
        }}
      >
        Me connecter
      </Button>
    </Flex>
  );
}
