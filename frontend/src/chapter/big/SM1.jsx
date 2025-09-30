import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  HStack,
  VStack,
  Avatar,
  AvatarGroup,
  Icon,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Logo from "../../logo.png"
import Test from "../../ImagePhone.svg"
export default function HeroSection() {
const navigate = useNavigate() 
  return (
    <Box as="section" position="relative" minH="100vh" bgColor="#E8E9ED" color="black" overflow="hidden">
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <HStack spacing={2}>
<Image
src={Logo}
alt="Logo"
   boxSize={16} 
   width={28} 
   />
          </HStack>

          <HStack spacing={8} >
            <Button textColor="black" onClick={() => navigate("/")}>
              Home
              </Button>
              <Button textColor="black" onClick={() => navigate("/catalog")}>
              Product
              </Button>
          </HStack>

          <Button bg="green.400" color="white" px={6} _hover={{ bg: "green.600" }}>
            Download app
          </Button>
        </Flex>
      </Container>

      <Container maxW="container.xl" mt={8}>
        <Flex justify="center" mb={12}>
          <HStack spacing={3}>
            <Avatar size="md" src="/professional-man.png" />
            <VStack align="start" spacing={0}>
              <Text fontSize="sm" fontWeight="bold" color="gray.800">
               Mayevskiy Vladislav
              </Text>
              <Text fontSize="xs" color="gray.600">
                Full Stack
              </Text>
            </VStack>
          </HStack>
        </Flex>
      </Container>

      <Container maxW="container.lg" textAlign="center" position="relative" zIndex={3}>
        <Flex justify="center" mb={6}>
          <HStack spacing={2}>
            <AvatarGroup size="sm" max={3}>
              <Avatar src="/diverse-person.png" />
              <Avatar src="/diverse-group-two.png" />
              <Avatar src="/diverse-group-outdoors.png" />
            </AvatarGroup>
            <Text color="green.400" fontSize="sm" fontWeight="bold">
              10k+ users
            </Text>
          </HStack>
        </Flex>

        <Heading fontSize={{ base: "4xl", md: "6xl" }} mb={6} lineHeight="1.1">
          Try your{" "}
          <Box as="span" color="green.400">
            power
          </Box>{" "}
          on our fitness simulator
        </Heading>

        <Text fontSize="lg" mb={8} color="gray.600" maxW="2xl" mx="auto">
         Our fitness simulator been the <Box textColor="green.400">greatest</Box> in the world.Because we have the best team in the world :{")"}
        </Text>

      
      </Container>


        <Flex justify="center" position="relative" zIndex={4} >
          <Box position="relative">
            <Image src={Test} alt="Finpay App" maxH="600px" objectFit="contain" />
          </Box>
        </Flex>

 {/*Blur*/}       <Box
  position="absolute"
  bottom="0"
  left="0"
  w="100%"
  h="300px"
  bgGradient="linear(to-t, white, rgba(255,255,255,0))"
  filter="blur(1px)"
  zIndex={5}
/>

<Box position="absolute" bottom="0" left="0" w="100%" h="320px" pointerEvents="none" zIndex={1}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    width="100%"
    height="100%"
  >

    <path
      fill="none"
      stroke="green"
      strokeWidth="3"
      d="M0,35 C190,-100 320,260 500,100"
    />

    <path
      fill="none"
      stroke="green"
      strokeWidth="3"
      d="M940,160 C1120,60 1280,260 1440,160"
    />
  </svg>
</Box>

      </Box>
  )
}
