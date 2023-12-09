import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../UserContext";
import fr from "../assets/locales/fr.json";

export function AuthPage() {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={[]}
      localization={{
        variables: fr,
      }}
    />
  );
}
