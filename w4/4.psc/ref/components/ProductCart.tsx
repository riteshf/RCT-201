import React from "react";
import Link from "next/link";
import { AspectRatio, Box, Text } from "@chakra-ui/react";
import { BsBag } from "react-icons/bs";

import { formatCurrency } from "../utils/data.utils";
import { Product } from "../utils/types";
import CustomImage from "./CustomImage";
import Image from "next/image";

const ProductCart = (props: { product: Product }) => {
  const { product } = props;
  return (
    <Link key={product.id} href={`/products/${product.handle}`}>
      {/* class="group" */}
      <AspectRatio
        ratio={1}
        bgColor="white"
        borderRadius="xl"
        overflow="hidden"
        borderWidth="2px"
        borderColor="gray.200"
        position="relative"
        transition="all"
        transitionDuration="500s"
      >
        <>
          {product.featuredImage && (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              width="400"
              height="400"
            />
          )}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="full"
            h="full"
            bgColor="rgba(255,255,255,0.6)"
            opacity="0"
            transition="all"
            transitionDuration="500s"
            _hover={{
              opacity: "100",
            }}
          >
            <BsBag size={30} />
          </Box>
        </>
      </AspectRatio>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="3"
      >
        <Text fontSize="lg" color="gray.800" fontWeight="medium" pos="relative">
          {product.title}
          <Text
            as="span"
            bgColor="gray.800"
            h="3px"
            w="0"
            pos="absolute"
            bottom="-2px"
            left="0"
            transition="all"
            transitionDuration="400s"
            _hover={{
              w: "full",
            }}
          />
        </Text>
        <Text fontSize="lg" color="gray.800" fontWeight="bold">
          {formatCurrency(product.priceRange.minVariantPrice)}
        </Text>
      </Box>
    </Link>
  );
};

export default ProductCart;
