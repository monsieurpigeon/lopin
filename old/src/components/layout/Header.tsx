import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { supabase, useAuth } from "../../UserContext";

export function Header() {
  const { session } = useAuth();
  const navigate = useNavigate();
  return (
    <Flex justifyContent="space-between" alignItems="center" p="8px 8px">
      <Text fontSize="2xl">🏡 Lopin</Text>
      <Box>
        {!session && (
          <Button
            onClick={() => {
              navigate("/auth");
            }}
          >
            Se connecter
          </Button>
        )}
        {session && (
          <Button onClick={() => supabase.auth.signOut()}>
            Se déconnecter
          </Button>
        )}
      </Box>
    </Flex>
  );
}
