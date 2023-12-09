import { Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <Flex>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  );
}
