import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SignUp() {
  const navigate = useNavigate();
  const toast = useToast();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const toastT = () => {
    if (!email || !password) {
        toast({
            title:"error",
            status:"error",
            duration:3000,
            isClosable:true
        }); return }
        toast ({
            title:"confirm",
            status:"success",
            duration:3000,
            isClosable:true
        })

  }
    return (
    <Box
      bg="gray.100"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        width="100%"
        maxW="400px"
      >
        <Heading size="lg" mb={6} textAlign="center" textColor="black">
          Реєстрація
        </Heading>

        <Stack spacing={4}>
          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Ім’я
            </Text>
            <Input placeholder="Введіть ваше ім’я" bgColor="black"/>
          </Box>

          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Email
            </Text>
            <Input type="email" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} bgColor="black"/>
          </Box>

          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Пароль
            </Text>
            <Input type="password" placeholder="Введіть пароль" value={password} onChange={(e) => setPassword(e.target.value)} bgColor="black" />
          </Box>

          <Button colorScheme="green" size="lg" onClick={() => navigate("/global") || toastT}>
            Зареєструватися
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
