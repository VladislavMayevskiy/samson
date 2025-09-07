import {
    Box,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    HStack,
    Icon,
    Image,
    Badge,
  } from '@chakra-ui/react'
 import SM3Foto from "./SM3.png"
  import { CheckIcon } from '@chakra-ui/icons'
  
  const SM3 = () => {
    return (
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 16 }}
        py={16}
        bg="white"
      >
        <Box flex="1" pr={{ md: 10 }}>
          <Heading fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" mb={4} textColor="black">
            15 років створюємо <Text as="span" color="yellow.500">чемпіонів</Text>
          </Heading>
  
          <Text fontSize="lg" mb={8} color="gray.700">
            Ми не просто продаємо обладнання — ми допомагаємо людям досягати неможливого. Кожен тренажер, кожна штанга, кожен аксесуар обирається з думкою про твій успіх.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
            <Box
              bg="gray.50"
              p={6}
              borderRadius="lg"
              textAlign="center"
              boxShadow="sm"
            >
              <Text fontSize="2xl" fontWeight="bold" color="yellow.500">5000+</Text>
              <Text fontSize="sm" color="gray.600">Задоволених клієнтів</Text>
            </Box>
            <Box
              bg="gray.50"
              p={6}
              borderRadius="lg"
              textAlign="center"
              boxShadow="sm"
            >
              <Text fontSize="2xl" fontWeight="bold" color="yellow.500">200+</Text>
              <Text fontSize="sm" color="gray.600">Видів обладнання</Text>
            </Box>
          </SimpleGrid>
          <VStack align="start" spacing={3} textColor="black">
            <HStack>
              <Icon as={CheckIcon} color="green.400" />
              <Text>Офіційний дилер провідних брендів</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.400" />
              <Text>Гарантія до 5 років на всі товари</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.400" />
              <Text>Безкоштовна доставка по Україні</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.400" />
              <Text>Підбір під твої цілі з експертами</Text>
            </HStack>
          </VStack>
        </Box>
        <Box flex="1" position="relative" mt={{ base: 10, md: 0 }}>
          <Image
            src={SM3Foto}
            alt="Зображення"
            borderRadius="xl"
            boxShadow="lg"
          />
          <Box
            position="absolute"
            bottom={-2}
            left={-2}
            bg="gold"
            color="black"
            px={4}
            py={2}
            borderRadius={15}
            fontWeight="bold"
            fontSize="sm"
            boxShadow="md"
            height={70}
          >
          <Text mt={1} fontWeight={900}> 15+ <br /></Text> 
            <Text fontSize="xs" fontWeight="normal">років досвіду</Text>
          </Box>
        </Box>
      </Flex>
    )
  }
  export default SM3