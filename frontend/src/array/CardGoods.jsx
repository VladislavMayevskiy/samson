import React from "react";
import {
  Box,
  Divider,
  Heading,
  Text,
  Button,
  Image,
  Badge
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export default function CardGoods({ product, onAddToCart }) {
  const {  name, price, quantity ,image,rating} = product;

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
        src={`http://localhost:5001${image}`}
          alt={name}
          h={{ base: 200, md: 250 }}
          w="full"
          objectFit="cover"
        />
      )}

      <Divider borderWidth={1} borderColor="black" />

      <Box p={4}>
        <Heading fontSize={30} mb={1} textColor="black">
          {name}
        </Heading>

        <Text mt={3} fontWeight={999} fontSize={25} textColor="green.500">
          {price} грн
        </Text>

        <Text fontSize="sm" color="gray.600" mt={1}>
          В наявності: {quantity}
        </Text>
      <Badge bgColor="black" textColor="white">{rating}</Badge>
        <Button
          mt={55}
          w="full"
          bgColor="green.500"
          color="white"
          _hover={{ bgColor: "green.600", color: "white" }}
          onClick={() => onAddToCart?.(product)}
          fontWeight={850}
          leftIcon={<FaShoppingCart />}
        >
          Додати в кошик
        </Button>
      </Box>
    </Box>
  );
}
