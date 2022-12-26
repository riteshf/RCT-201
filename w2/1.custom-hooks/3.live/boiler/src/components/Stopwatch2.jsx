import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";

const Stopwatch2 = () => {
  const [time, setTime] = useState(0);
  const timerId = useRef(null);
  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1000);
    }
  };

  const reset = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setTime(0);
  };

  const addSeconds = (count) => {
    setTime((prevValue) => prevValue + count);
  };

  useEffect(() => {
    return reset;
  }, []);
  return (
    <Box border={"1px solid black"} borderRadius={4} m={2} p={2}>
      <Center>
        <Heading>{time}</Heading>
      </Center>
      <Flex gap={2} my={2}>
        <Button onClick={start} colorScheme="blue">
          Start
        </Button>
        <Button onClick={reset} colorScheme="orange">
          Reset
        </Button>
      </Flex>
      <Flex gap={2}>
        <Button onClick={() => addSeconds(10)} colorScheme="green">
          Add 10 Seconds
        </Button>
        <Button onClick={() => addSeconds(20)} colorScheme="yellow">
          Add 20 Seconds
        </Button>
        <Button onClick={() => addSeconds(30)} colorScheme="red">
          Add 30 Seconds
        </Button>
      </Flex>
    </Box>
  );
};

export default Stopwatch2;
