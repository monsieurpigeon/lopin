import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayout() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Container flexGrow={1}>
        <Outlet />
      </Container>
      <Footer />
    </Flex>
  );
}
