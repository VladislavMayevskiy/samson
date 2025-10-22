import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Badge,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import Search from "../catalog/filter/Search";
import Logo from "../../logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate} from "react-router-dom";
import ShopCard from "../../cart/shopCard";

const Header = ({ query, setQuery }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="80px"
      bg="white"
      boxShadow="sm"
      zIndex={1000}
      px={6}
    >
      <Flex
        align="center"
        justify="space-between"
        height="100%"
        maxW="1200px"
        mx="auto"
      >
        <Flex align="center" gap={3} cursor="pointer" onClick={() => navigate("/")}>
          <Image src={Logo} alt="Logo" boxSize="48px" borderRadius="xl" />
          <Box>
            <Text fontWeight="bold" fontSize="xl" color="green.700">
              FitStore
            </Text>
            <Text fontSize="sm" color="gray.500">
              Професійне обладнання
            </Text>
          </Box>
        </Flex>


        <Box flex={1} mx={8} display={{ base: "none", md: "block" }} ml={150} mt={4} >
  <Search value={query} onChange={setQuery} />
</Box>



        <Flex align="center" gap={4}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Search"
            icon={<FaSearch />}
            onClick={() => setShowSearch((prev) => !prev)}
            color="black"
          />

          {showSearch && (
            <Input
            display={{ base: "flex", md: "none" }}
              placeholder="Пошук…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              size="sm"
              bg="white"
              borderRadius="md"
            />
          )}

          <Box position="relative">
   <ShopCard/>

          </Box>



          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            fontSize="22px"
            color="black"
            visibility={{base:"visible",md:"hidden"}}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
