import React from "react";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Box,
  DrawerFooter,
} from "@chakra-ui/react";
import { BsBag } from "react-icons/bs";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <Box>
      <Button
        variant="outline"
        colorScheme="gray"
        display="flex"
        gap={2}
        alignItems="center"
        borderWidth={2}
        borderColor="gray.800"
        borderRadius="full"
        ref={btnRef}
        onClick={onOpen}
      >
        <BsBag />
        {"0"}
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="right"
        size="md"
      >
        <DrawerOverlay>
          <DrawerContent borderLeftRadius="24">
            <DrawerCloseButton mt={4} />
            <DrawerHeader mt={4}>Shopping Cart</DrawerHeader>
            <DrawerBody>TODO</DrawerBody>
            <DrawerFooter>
              <Button
                size="lg"
                w="full"
                colorScheme="blackAlpha"
                onClick={onClose}
                mb={12}
              >
                Checkout
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Cart;
