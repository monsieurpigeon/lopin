import { Box, Center, Flex } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

export function FarmPage() {
  const { farm } = useLoaderData() as { farm: any };
  if (!farm) return <div>Cette ferme n'existe pas</div>;
  return (
    <div>
      <Helmet>
        <title>{farm.name}</title>
        <meta name="og:site_name" content="Pawn Guild" />
        <meta property="og:title" content={farm.name} />
        <meta property="og:type" content={`https://www.lopin.app/${farm.id}`} />
        <meta property="og:description" content={farm.description} />
      </Helmet>

      <Center height="100vh">
        <Flex direction="column">
          <Box>{farm.name}</Box>
          <Box>{farm.description}</Box>
        </Flex>
      </Center>
    </div>
  );

  return;
}
