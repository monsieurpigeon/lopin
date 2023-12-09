import Header from "@/components/Header";
import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";

export default async function Index() {
  return (
    <Flex width="100vw" height="100vh" direction="column">
      {/* <nav>
        <div>
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav> */}

      <Header />
      <Container flexGrow={1}>
        <main>
          <Flex direction="column" gap={2}>
            <h2>Bienvenue sur Lopin</h2>
            <p>La façon la plus simple de:</p>
            <ul>
              <li>Parler de votre ferme à vos voisins</li>
              <li>Trouver les fermes autour de chez vous</li>
            </ul>
          </Flex>

          {/* {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
        </main>
      </Container>

      <Footer />
    </Flex>
  );
}
