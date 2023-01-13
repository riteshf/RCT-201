import React from "react";
import { Button } from "@chakra-ui/react";
import { BsBag } from "react-icons/bs";

const Cart = () => {
  return (
    <Button
      variant="outline"
      colorScheme="gray"
      display="flex"
      gap={2}
      alignItems="center"
      borderWidth={2}
      borderColor="gray.800"
      borderRadius="full"
    >
      <BsBag />
      {"TODO"}
    </Button>
  );
};

export default Cart;
