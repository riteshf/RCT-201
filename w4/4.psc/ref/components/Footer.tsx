import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import CustomImage from "./CustomImage";

const Footer = () => {
  return (
    <Box
      as="footer"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="calc(11/12)%"
      maxWidth="5xl"
      mx="auto"
      mt={{ base: "24", sm: 28 }}
      mb="8"
    >
      <Box display="flex" alignItems="center" gap={4}>
        <Link href="https://fresh.deno.dev">
          <CustomImage
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Fresh Badge"
            height="37"
            width="197"
          />
        </Link>
        <Link href="https://github.com/denoland/merch">
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ textDecoration: "underline" }}
          >
            <FaGithub height="5" width="5" color="gray.500" />
            Source
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
