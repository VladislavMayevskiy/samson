import React from "react";
import { Box, Divider, Badge, Heading, Text, Button, Image, HStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";

export default function CardGoods({ item, onAddToCart }) {
  const {
    image,
    title,
    rating,
    comment,
    price,
    button,
  } = item;

  return (
    <Box
      bgColor="white"
      borderWidth={2}
      borderColor="black"
      borderRadius={15}
      boxShadow="lg"
      overflow="hidden"
      transition="0.3s"
      _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }}
      maxW={420}
      height={500}
    >
      {image && (
        <Image
          src={image}
          alt={title || "Товар"}
          h={{ base: 200, md: 250 }}
          w="full"
          objectFit="cover"
        />
      )}

      <Divider borderWidth={1} borderColor="black" />

      <Box p={4}>
      

        <Heading fontSize="lg" mb={1} textColor="black">
          {title}
        </Heading>

        {(rating || comment) && (
          <HStack mt={2} spacing={2} align="center">
            {typeof rating !== "undefined" && (
              <HStack spacing={1}>
                <StarIcon boxSize={3.5} color="yellow.400" />
                <Text fontSize="sm" fontWeight="medium" textColor="black">
                  {rating}
                </Text>
              </HStack>
            )}
            {comment && (
              <Text fontSize="xs" color="gray.600">
                {comment}
              </Text>
            )}
          </HStack>
        )}

        <Text mt={3} fontWeight={999} fontSize={25} textColor="green.500"  >
          {price}
        </Text>

        <Button
          mt={55}
          w="full"
          bgColor="green.500"
          color="white"
          _hover={{ bgColor: "green.600", color: "white" }}
          onClick={() => onAddToCart?.(item)}
          fontWeight={850}
          leftIcon={<FaShoppingCart />}

        >
          {button || "Додати в кошик"}
        </Button>
      </Box>
    </Box>
  );
}
