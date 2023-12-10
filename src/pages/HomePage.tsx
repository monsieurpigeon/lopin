import { Flex } from "@chakra-ui/react";

export function HomePage() {
  return (
    <Flex direction="column" gap={2}>
      <h2>Bienvenue sur Lopin</h2>
      <p>La façon la plus simple de:</p>
      <ul>
        <li>Parler de votre ferme à vos voisins</li>
        <li>Trouver les fermes autour de chez vous</li>
      </ul>
    </Flex>
  );
}
