import {
  Box,
  Text,
  Heading,
  Button,
  Badge,
  SimpleGrid,
  HStack,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { PhoneIcon } from "@chakra-ui/icons";

const categories = [
  {
    emoji: "🏋️‍♂️",
    title: "Штанги та грифі",
    description: "Професійні штанги Olympic та грифі",
    count: "45+ товарів",
    product: "Штанга Olympic 220кг",
    price: "від 8,999 ₴",
    buttonColor: "linear(to-r,red.400,white)",
    bg: "pink.100",
  },
  {
    emoji: "💪",
    title: "Гантелі",
    description: "Регульовані та фіксовані гантелі",
    count: "32+ товари",
    product: "Набір гантелей 40кг",
    price: "від 3,499 ₴",
    buttonColor: "linear(to-r,blue.400,white)",
    bg: "blue.100",
  },
  {
    emoji: "🏃‍♂️",
    title: "Силові тренажери",
    description: "Мультистанції та силові рами",
    count: "28+ товарів",
    product: "Мультистанція Pro X1",
    price: "від 25,999 ₴",
    buttonColor: "linear(to-r,green.400,white)",
    bg: "green.100",
  },
  {
    emoji: "❤️",
    title: "Кардіо обладнання",
    description: "Бігові доріжки та велотренажери",
    count: "22+ товари",
    product: "Бігова доріжка Elite",
    price: "від 18,999 ₴",
    buttonColor: "linear(to-r,purple.400,white)",
    bg: "purple.100",
  },
  {
    emoji: "🎯",
    title: "Функціональне обладнання",
    description: "TRX, медболи, канати",
    count: "35+ товарів",
    product: "Функціональний тренажер",
    price: "від 1,299 ₴",
    buttonColor: "linear(to-r,orange.400,white)",
    bg: "orange.100",
  },
  {
    emoji: "⚡",
    title: "Аксесуари",
    description: "Рукавички, пояси, добавки",
    count: "67+ товарів",
    product: "Пояс атлетичний",
    price: "від 599 ₴",
    buttonColor: "linear(to-r,pink.400,white)",
    bg: "pink.100",
  },
];

const SM2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    console.log("Відправляю:", { name, email, phone });
  
    try {
      const response = await fetch("http://localhost:5000/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
  

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Ваша форма відправлена",
          description: data.message || "Ми зв'яжемося з вами найближчим часом",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        // Очищення форми
        setName("");
        setEmail("");
        setPhone("");
        onClose();
      } else {
        toast({
          title: "Помилка відправки",
          description: data.message || "Спробуйте пізніше",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "Помилка мережі",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box py={16} textAlign="center">
      {/* Заголовок */}
      <Badge
        fontSize="md"
        bg="yellow.100"
        color="yellow.800"
        px={4}
        py={2}
        borderRadius="full"
        mb={4}
      >
        Наш каталог
      </Badge>

      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        textColor="black"
      >
        Обери свій шлях до{" "}
        <Text
          as="span"
          bgGradient="linear(to-r, yellow.400, orange.500)"
          bgClip="text"
        >
          перемоги
        </Text>
      </Heading>

      <Text mt={4} fontSize="lg" color="gray.600">
        Кожна категорія — це можливість стати сильнішим, швидшим та витривалішим
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
        mt={12}
        width={{ base: 0, md: 1250 }}
        ml={{ base: 0, md: 3 }}
      >
        {categories.map((cat, idx) => (
          <Box
            key={idx}
            bg={cat.bg}
            p={6}
            borderRadius="xl"
            boxShadow="md"
            textAlign="left"
          >
            <Text fontSize="3xl">{cat.emoji}</Text>

            <Heading fontSize="xl" mt={2} mb={1} textColor="black">
              {cat.title}
            </Heading>
            <Text color="gray.600" mb={3}>
              {cat.description}
            </Text>

            <Badge
              mb={3}
              fontSize="sm"
              colorScheme="gray"
              textColor="black"
              borderRadius={5}
            >
              {cat.count}
            </Badge>

            <Box
              bg="whiteAlpha.800"
              p={4}
              borderRadius="lg"
              fontSize="sm"
              mb={4}
              mt={1}
            >
              <Text color="gray.600">Популярний товар:</Text>
              <Text fontWeight="bold" textColor="black">
                {cat.product}
              </Text>
              <Text color="orange.500" fontWeight="semibold">
                {cat.price}
              </Text>
            </Box>

            <Button
              colorScheme="white"
              bgGradient={cat.buttonColor}
              color="white"
              _hover={{ opacity: 0.9 }}
              rightIcon={<span>→</span>}
            >
              Переглянути категорію
            </Button>
          </Box>
        ))}
      </SimpleGrid>

      {/* Блок із консультацією */}
      <Container
        mt={{ base: 0, md: 32 }}
        maxW="1250px"
        borderRadius={15}
        py={10}
        px={6}
        bgGradient="linear(to-r,gold,yellow.600)"
        centerContent
      >
        <Heading
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Не знаєш, що обрати?
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          maxW="700px"
          mb={6}
        >
          Наші експерти допоможуть підібрати ідеальне обладнання для твоїх цілей
        </Text>

        <HStack spacing={4} flexWrap="wrap" justify="center">
          <Button
            leftIcon={<PhoneIcon />}
            bg="black"
            color="white"
            _hover={{ bg: "gray.800" }}
            px={6}
            py={5}
            fontWeight="bold"
            fontSize="sm"
            borderRadius="full"
            onClick={onOpen}
          >
            Безкоштовна консультація
          </Button>
          <Button
            variant="outline"
            borderColor="black"
            color="black"
            _hover={{ bg: "black", color: "white" }}
            px={6}
            py={5}
            fontWeight="bold"
            fontSize="sm"
            borderRadius="full"
          >
            Переглянути весь каталог
          </Button>
        </HStack>
      </Container>

      {/* Модалка з формою */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent
          bgGradient="linear(to-br, white, gray.50)"
          boxShadow="xl"
          borderRadius="lg"
          p={4}
        >
          <ModalHeader
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            bgGradient="linear(to-r, yellow.500, orange.400)"
            bgClip="text"
          >
            Залиште свої контакти
          </ModalHeader>
          <ModalCloseButton _hover={{ bg: "gray.200" }} borderRadius="full" />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontWeight="semibold">ПІБ</FormLabel>
              <Input
                placeholder="Введіть ваше ПІБ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                borderRadius="full"
                focusBorderColor="yellow.400"
                bg="gray.400"
                _hover={{ borderColor: "yellow.300" }}
                boxShadow="sm"
                color="black"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight="semibold">Email</FormLabel>
              <Input
                type="email"
                placeholder="Введіть ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderRadius="full"
                focusBorderColor="yellow.400"
                bg="gray.400"
                _hover={{ borderColor: "yellow.300" }}
                boxShadow="sm"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight="semibold">Номер телефону</FormLabel>
              <Input
                type="tel"
                placeholder="+380..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                borderRadius="full"
                focusBorderColor="yellow.400"
                bg="gray.400"
                _hover={{ borderColor: "yellow.300" }}
                boxShadow="sm"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              bgGradient="linear(to-r, yellow.400, orange.400)"
              color="white"
              _hover={{ bgGradient: "linear(to-r, yellow.500, orange.500)" }}
              borderRadius="full"
              px={8}
              py={5}
              mr={3}
              fontWeight="bold"
              onClick={handleSubmit}
            >
              Надіслати
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              borderColor="gray.400"
              _hover={{ bg: "gray.100" }}
              borderRadius="full"
              px={6}
              textColor="black"
            >
              Скасувати
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SM2;
