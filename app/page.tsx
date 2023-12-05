import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
import { Container, Flex } from "@chakra-ui/react";
import { cookies } from "next/headers";
import { Footer } from "../components/Footer";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

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
              <li>Parler de votre ferme à vos clients</li>
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
