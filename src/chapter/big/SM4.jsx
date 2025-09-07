import {
    Box,
    Text,
    Heading,
    SimpleGrid,
    VStack,
    Icon,
    Button,
  } from '@chakra-ui/react'
  import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
  import { MdLocationOn } from 'react-icons/md'
  
 const SM4 = () => {
    return (
      <Box
        bgGradient="linear(to-b, gray.900, black)"
        color="white"
        py={20}
        px={{ base: 4, md: 16 }}
        textAlign="center"
      >
        <Heading fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
          Готовий почати свій <Text as="span" color="yellow.400">шлях?</Text>
        </Heading>
        <Text fontSize="lg" color="gray.300" mb={12}>
          Зв'яжись з нами прямо зараз і отримай персональну консультацію від наших експертів
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
          <Box
            bg="gray.800"
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.700"
          >
            <VStack spacing={3}>
              <Icon as={PhoneIcon} boxSize={8} color="gold" />
              <Text fontWeight="bold">Телефон</Text>
              <Text color="gray.300">+380 95 142 28 67</Text>
            </VStack>
          </Box>
          <Box
            bg="gray.800"
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.700"
          >
            <VStack spacing={3}>
              <Icon as={EmailIcon} boxSize={8} color="gold" />
              <Text fontWeight="bold">Email</Text>
              <Text color="gray.300">vladmaevski@gmail.com</Text>
            </VStack>
          </Box>
          <Box
            bg="gray.800"
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.700"
          >
            <VStack spacing={3}>
              <Icon as={MdLocationOn} boxSize={8} color="gold" />
              <Text fontWeight="bold">Адреса</Text>
              <Text color="gray.300">с.Клячаново, Лесі Українки 1</Text>
            </VStack>
          </Box>
        </SimpleGrid>
        <Button
          bgGradient="linear(to-r, yellow.400, yellow.500)"
          color="black"
          size="lg"
          fontWeight="bold"
          _hover={{ bgGradient: 'linear(to-r, gold, yellow.400)' }}
        >
          Замовити дзвінок
        </Button>
      </Box>
    )
  }
  export default SM4