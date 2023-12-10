import { Container } from "@chakra-ui/react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, useAuth } from "../UserContext";
import fr from "../assets/locales/fr.json";

export function AuthPage() {
  const { session } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Container>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        localization={{
          variables: fr,
        }}
      />
    </Container>
  );
}
