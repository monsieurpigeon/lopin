import { Box } from "@chakra-ui/react";

export function Farm({ farm }: any) {
  return (
    <Box>
      <Box>{farm.name}</Box>
      <pre>{JSON.stringify(farm.misc, null, 4)}</pre>
    </Box>
  );
}
