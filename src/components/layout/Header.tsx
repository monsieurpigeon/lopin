import { Link } from "react-router-dom";
import { supabase, useAuth } from "../../UserContext";

export function Header() {
  const { session } = useAuth();
  return (
    <div>
      {!session && <Link to="/auth">Se connecter</Link>}
      {session && (
        <button onClick={() => supabase.auth.signOut()}>Se déconnecter</button>
      )}
    </div>
  );
}
