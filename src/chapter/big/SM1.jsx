import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Icon,
  HStack,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import {
  FiPlay,
  FiMessageCircle,
  FiZap,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { TbAward } from "react-icons/tb";
import { useNavigate } from "react-router-dom";


const features = [
  { icon: FiZap,  description: "Швидка доставка" ,info:"1-2 дні по цілій Україні"},
  { icon: FiShield, description: "Гарантія 2 роки",info: "На всі тренажери "},
  { icon: FiUsers,  description: "1000+ клієнтів" ,info:"Нашій продукції"},
  { icon: TbAward,  description: "5 років досвіду",info: "На ринку"},
];

const SM1 = () => {
  const navigate = useNavigate()
  return (
    <Box mt={100}>
      <Text
        textColor="black"
        mt={-30}
        ml={0}
        fontSize={90}
        fontWeight={800}
        textShadow="4px 4px 8px rgba(0, 0, 0, 0.5)"
      >
        SAMSON
      </Text>
      <Text
        fontSize={30}
        fontWeight={550}
        ml={10}
        textColor="yellow.500"
        textShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
      >
        SPORTS EQUIPMENT
      </Text>
      <Box
        ml={-6}
        bgColor="yellow.100"
        width={450}
        height={10}
        borderRadius={20}
        mt={3}
      >
        <Text
          ml={{ base: 0, md: 6 }}
          textColor="brown"
          fontSize={16}
          fontWeight={500}
        >
          🏆Професійне спортивне обладнання №1 в Україні
        </Text>
      </Box>

      <Box ml={{ base: 0, md: -270 }} mt={{ base: 0, md: 180 }}>
        <Text
          ml={{ base: 0, md: 5 }}
          textColor="black"
          fontSize={80}
          fontWeight="bold"
          textShadow="4px 4px 8px rgba(0, 0, 0, 0.5)"
        >
          Твоя сила -
        </Text>
      </Box>

      <Box ml={-290} mt={-120}>
        <Text
          ml={{ base: 0, md: 500 }}
          fontSize={80}
          fontWeight="bold"
          bgClip="text"
          bgGradient="linear(to-r,gold,yellow.400)"
          textShadow="10px 5px 20px rgba(242, 255, 0, 0.5)"
        >
          наша місія
        </Text>
      </Box>

      <Flex ml={{ base: 0, md: -160 }}>
        <Text
          textColor="gray.700"
          fontSize={24}
          fontWeight="medium"
          width={{ base: 0, md: 700 }}
          textAlign="center"
        >
          Перетвори свої мрії на реальність з найкращим спортивним обладнанням.
          Якість, надійність та інновації для досягнення твоїх цілей
        </Text>
      </Flex>

      <HStack mt={{ base: 0, md: 10 }} ml={{ base: 0, md: -32 }} spacing={10}>
        <Button
          leftIcon={<Icon as={FiPlay} />}
          bgGradient="linear(to-r, yellow.400, orange.500)"
          color="black"
          _hover={{ bgGradient: "linear(to-r, yellow.500, orange.600)" }}
          borderRadius="full"
          fontWeight="bold"
          px={6}
          py={5}
          boxShadow="md"
          width={300}
          onClick={() => navigate("/catalog")}
        >
          Дослідити каталог
        </Button>
        <Button
          leftIcon={<Icon as={FiMessageCircle} />}
          variant="outline"
          borderColor="gray.300"
          color="gray.800"
          borderRadius="full"
          fontWeight="bold"
          px={6}
          py={5}
          _hover={{ bg: "gray.50" }}
        >
          Безкоштовна консультація
        </Button>
      </HStack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={8}
        mt={20}
        px={{ base: 4, md: 32 }}
        ml={{base:0,md:-410}}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="xl"
            p={6}
            textAlign="center"
            boxShadow="md"
            bg="white"
            _hover={{
              boxShadow: "xl",
              transform: "scale(1.05)",
              transition: "0.3s ease",
            }}
          >
            <Icon as={feature.icon} boxSize={10} color="yellow.400" mb={4} />
          
            <Heading textColor="black" fontSize={22}>
              {feature.description}
              </Heading>
            <Text textColor="gray.700">
                {feature.info}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SM1;
