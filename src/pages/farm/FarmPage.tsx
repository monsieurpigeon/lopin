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
        <link rel="canonical" href="http://mysite.com/example" />
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
