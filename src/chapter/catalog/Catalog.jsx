
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  Text,
  Image,
  Badge,
  Divider
} from "@chakra-ui/react";
import { useState } from "react";
import Goods from "../../array/Goods";
import { StarIcon } from "@chakra-ui/icons";
import Header from "../big/Header";

const Catalog = () => {
  const [items, setItems] = useState(Goods);
  return (
    <Box position="relative" minH="2000px">
     <Header sort={items} setSort={setItems} />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        filter="blur(8px)"
        zIndex={-1}
        bgColor="white"
      />
<Heading
  textAlign="center"
  mt={10}
  fontWeight="bold"
  fontSize={{ base: "3xl", md: "5xl" }}
  bgGradient="linear(to-r, yellow.400, orange.400, red.500)"
  bgClip="text"
  letterSpacing="wide"
  textTransform="uppercase"
>
  Catalog
</Heading>
      <SimpleGrid columns={3} spacing={1}>
        {items.map((god, idx) => (
          <Box
            key={idx}
            bgColor="gray.100"
            mt={{ base: 0, md: 20 }}
            height={{ base: 300, md: 500 }}
            width={350}
            ml={10}
            borderRadius={15}
            borderColor="black"
            borderWidth={2}
            boxShadow="lg"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "2xl",
              transition: "0.3s",
            }}
          >
            <Image
              src={god.image}
              alt="Image"
              height={250}
              maxW={350}
              width="full"
              borderRadius={15}
              objectFit="cover"
              ml={0}
            />
            <Divider borderWidth={1} borderColor="black" />
            <Badge ml={5} mt={5} textColor="black">
              {god.category}
            </Badge>
            <Heading
              ml={5}
              mt={5}
              fontSize={20}
              textColor="black"
              borderRadius={5}
            >
              {god.title}
            </Heading>
            <Text ml={5} textColor="black">
              {god.description}
            </Text>
            <Badge
              boxSize={6}
              width={10}
              ml={5}
              borderRadius={10}
              bgColor="yellow.200"
              textColor="brown"
            >
              <Box mt={0.5}>
                <StarIcon color="yellow.400" boxSize={3} mt={-1} />
                {god.rating}
              </Box>
            </Badge>
            <Text fontSize={10} ml={70} mt={-5} textColor="black">
              {god.comment}
            </Text>
            <Text
              fontWeight="extrabold"
              fontSize={20}
              ml={5}
              mt={5}
              textColor="black"
            >
              {god.price}
            </Text>
            <Button mt={5}  width={330} ml={2} bgColor="black" color="white"  _hover={{ bgColor: "gold", color: "black" }}>
              {god.button}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Catalog;
