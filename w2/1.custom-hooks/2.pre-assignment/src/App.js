import React from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Stopwatch1 from "./components/Stopwatch1";
import Stopwatch2 from "./components/Stopwatch2";
import Stopwatch3 from "./components/Stopwatch3";

function App() {
  return (
    <Box>
      <Center>
        <Heading>StopWatchs</Heading>
      </Center>
      <Center>
        <Flex direction={"column"} columnGap={6}>
          <Stopwatch1 />
          <Stopwatch2 />
          <Stopwatch3 />
        </Flex>
      </Center>
    </Box>
  );
}

export default App;
