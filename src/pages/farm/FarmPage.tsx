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
        <meta name="og:type" content="website" />
        <meta name="og:url" content={`https://www.lopin.app/${farm.id}`} />
        <meta name="og:title" content={farm.name} />
        <meta name="og:description" content={farm.description} />
        <meta name="og:site_name" content="Lopin" />
        <meta
          property="og:image"
          content="https://www.oseille.app/maraicher.jpg"
        />
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
