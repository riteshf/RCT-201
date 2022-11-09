import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";

const Stopwatch3 = () => {
  const [time, setTime] = useState(0);
  const timerId = useRef(null);
  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1000);
    }
  };
  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };
  const reset = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setTime(0);
  };
  useEffect(() => {
    return reset;
  }, []);
  return (
    <Box border={"1px solid black"} borderRadius={4} m={2} p={2}>
      <Center>
        <Heading>{time}</Heading>
      </Center>
      <Flex gap={2}>
        <Button onClick={start} colorScheme="cyan">
          Start
        </Button>
        <Button onClick={pause} colorScheme="red">
          Pause
        </Button>
      </Flex>
    </Box>
  );
};

export default Stopwatch3;
