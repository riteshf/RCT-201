import NextImage from "next/image";
import { chakra } from "@chakra-ui/react";

const CustomImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default CustomImage;
