import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

import CustomImage from "./CustomImage";
import Cart from "./Cart";

const Header = () => {
  return (
    <Box
      height={{ base: "110px", sm: "144px" }}
      width="full"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      backgroundImage="url(/header_bg.svg)"
      position="relative"
    >
      <Box
        height="full"
        width="full"
        position="absolute"
        bgColor="transparent"
        backgroundImage="url(/raindrops-animate.svg)"
      />
      <Box
        h="24"
        maxW="5xl"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Link href="/">
          <CustomImage src="/logo.svg" alt="Deno Logo" height={14} width={14} />
        </Link>
        <h1>
          <CustomImage
            src="/text_logo.svg"
            alt="Deno Merch"
            height={6}
            width={"130"}
          />
        </h1>
        <Cart />
      </Box>
    </Box>
  );
};

export default Header;
