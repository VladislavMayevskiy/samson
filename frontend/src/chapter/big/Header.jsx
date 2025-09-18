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
import Filtration from "../catalog/filter/Filtration";
import Logo from "../../logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { BiSortAlt2 } from "react-icons/bi";

const Header = ({ sort, setSort, selected, setSelected, query, setQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
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
              placeholder="Пошук…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              size="sm"
              bg="white"
              borderRadius="md"
            />
          )}

          <Box position="relative">
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart />}
              fontSize="20px"
              color="black"
            />
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              borderRadius="full"
              bg="green.400"
              color="white"
              fontSize="0.7em"
              px={2}
            >
              3
            </Badge>
          </Box>

          {location.pathname === "/catalog" && (
            <Menu isLazy placement="bottom-end">
              {({ onClose }) => (
                <>
                  <MenuButton
                    as={IconButton}
                    aria-label="Sort"
                    icon={<BiSortAlt2 />}
                    fontSize="22px"
                    color="black"
                  />
                  <MenuList bgColor="black" borderRadius={10} p={2}>
                    <Filtration
                      sort={sort}
                      setSort={setSort}
                      selected={selected}
                      setSelected={setSelected}
                      onDone={onClose}
                    />
                  </MenuList>
                </>
              )}
            </Menu>
          )}

          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            fontSize="22px"
            color="black"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
