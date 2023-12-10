import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase, useAuth } from "../../UserContext";
import { FarmForm } from "./farm-form/FarmForm";

export function HomePage() {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [myFarm, setMyFarm] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadMyFarm = async () => {
    const { data: farm } = await supabase
      .from("farm")
      .select()
      .eq("user_id", user?.id);
    console.log(farm);
    if (farm && farm.length > 0) {
      setMyFarm(farm[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    user?.id && loadMyFarm();
  }, [user?.id, showForm]);

  return (
    <>
      <Flex direction="column" gap={2}>
        <h2>Bienvenue sur Lopin</h2>
        <p>La façon la plus simple de:</p>
        <ul>
          <li>Parler de votre ferme à vos voisins</li>
          <li>Trouver les fermes autour de chez vous</li>
        </ul>
      </Flex>
      {myFarm && (
        <Text>
          Visiter la page de ma ferme : <Link to={`/${myFarm.id}`}>ici</Link>
        </Text>
      )}
      {!loading && !myFarm && !showForm && (
        <Button colorScheme="twitter" onClick={() => setShowForm(true)}>
          Ajouter ma ferme
        </Button>
      )}
      {showForm && <FarmForm onClose={() => setShowForm(false)} />}
    </>
  );
}
