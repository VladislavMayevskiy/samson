import React, { useState } from "react";
import { Box, Divider, Heading, Text, Button, Image, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import api from "../api/api";

export default function CardGoods({ product}) {
  const { name, price, quantity, image, rating } = product;
  const [loading, setLoading] = useState(false);

  
  const addToCart = async (productId) => {
    try {
     setLoading(true);
    await api.post("/api/cart/add", { productId, quantity: 1 });
    console.log("Product added");
    window.dispatchEvent(new Event("cartUpdate"));
    } catch (error) {
      console.error("Product not found", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bgColor="white" borderWidth={2} borderColor="black" borderRadius={15} boxShadow="lg" overflow="hidden" transition="0.3s" _hover={{ transform: "scale(1.03)", boxShadow: "2xl" }} maxW={420} height={500}>
      {image && <Image src={`http://localhost:5001${image}`} alt={name} height={{ base: 200, md: 250 }} width="full" objectFit="cover" />}
      <Divider borderWidth={1} borderColor="black" />
      <Box p={4}>
        <Heading fontSize={30} mb={1} textColor="black">{name}</Heading>
        <Text mt={3} fontWeight={999} fontSize={25} textColor="green.500">{price} грн</Text>
        <Text fontSize="sm" color="gray.600" mt={1}>В наявності: {quantity}</Text>
        <Badge bgColor="black" textColor="white">{rating}</Badge>
        <Button mt={55} w="full" bgColor="green.500" color="white" _hover={{ bgColor: "green.600", color: "white" }} onClick={() => addToCart(product._id)} fontWeight={850} leftIcon={<FaShoppingCart />} isLoading={loading} loadingText="Added...">
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}
