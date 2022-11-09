import React from "react";
import { Box, Center, Divider, Flex, Heading } from "@chakra-ui/react";
import Stopwatch1 from "./components/Stopwatch1";
import Stopwatch2 from "./components/Stopwatch2";
import Stopwatch3 from "./components/Stopwatch3";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Box>
      <Center>
        <Heading>StopWatchs</Heading>
      </Center>
      <Center>
        <Flex rowGap={6}>
          <Stopwatch1 />
          <Stopwatch2 />
          <Stopwatch3 />
        </Flex>
      </Center>
      <Divider my={4} />
      <Center>
        <Posts />
      </Center>
    </Box>
  );
}

export default App;
