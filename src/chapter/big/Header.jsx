import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Container,
  Button,
  Flex,
  IconButton,  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Filtration from "../catalog/filter/Filtration";
import Logo from "../logo.png"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiFilter } from "react-icons/fi"; 
import { useLocation } from "react-router-dom";
const Header = ({sort,setSort,selected,setSelected}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgColor="white"
      width={1250}
      ml={3}
      borderRadius={15}
      mt={3}
      height={16}
      zIndex={100}
      position="fixed"

    >
      <Image
        align="center"
        src={Logo}
        alt="Logo"
        boxSize={16}
        width={32}
        ml={4}
      />
      <Container mt={-10}>
        <Button
          textColor="gray.800"
          mt={{ base: 0, md: -3 }}
          ml={{ base: 0, md: -180 }}
          fontWeight="semibold"
          variant="ghost"
          onClick={() => navigate("/")}
        >
          Головна
        </Button>
        {location.pathname !== "/catalog" && (
        <Button
          textColor="gray.800"
          mt={{ base: 0, md: -3 }}
          fontWeight="semibold"
          variant="ghost"
          onClick={() => navigate("/catalog")} 
        >
          Каталог
        </Button>
  )}
        <Button
          textColor="gray.800"
          mt={{ base: 0, md: -3 }}
          fontWeight="semibold"
          variant="ghost"
          onClick={() => navigate("/about")}
        >
          Про нас
        </Button>
        <Button
          textColor="gray.800"
          mt={{ base: 0, md: -3 }}
          fontWeight="semibold"
          variant="ghost"
          onClick={() => navigate("/contacts")}
        >
          Контакти
        </Button>
      </Container>
      <Button
        textColor="gray.800"
        ml={{ base: 0, md: 1120 }}
        mt={{ base: 0, md: -65 }}
        bgColor="gold"
        borderRadius={10}
        onClick={() => navigate("/contacts")}
      >
        Зв'язатися
      </Button>
      <Flex ml={{ base: 0, md: 1000 }} mt={{ base: 0, md: -16 }}>
      {location.pathname === "/catalog" && (
      <IconButton
      icon={<FiFilter size={21} />}
      color="black"
      mt={{base:0,md:1}}
      ml={{base:0,md:-5}}
      onClick={onOpen}
      />)}
        <IconButton
          mt={{ base: 0, md: 1 }}
          icon={<FaSearch />}
          aria-label="Пошук"
          fontSize="20px"
          mr={2}
          color="black"
          variant="ghost"
          ml={{base:0,md:2}}
        />
        <IconButton
          mt={{ base: 0, md: 1 }}
          icon={<FaShoppingCart />}
          aria-label="Кошик"
          fontSize="20px"
          color="black"
          variant="ghost"
        />
         <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Фільтри</DrawerHeader>
          <DrawerBody>
          <Filtration
  sort={sort}
  setSort={setSort}
  selected={selected}
  setSelected={setSelected}
/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;
