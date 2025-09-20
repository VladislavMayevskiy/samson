import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/auth";

export default function SignUp() {
  const toast = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
      toast({
        title: "ALl letter important",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    const data = await registerUser(form);
    console.log(data);
  
    if (data.user) {
      toast({
        title: "Реєстрація успішна",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
    } else {
      toast({
        title: "Помилка",
        description: data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };


 
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
          Registration
        </Heading>

        <Stack spacing={4}>
          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Name
            </Text>
            <Input placeholder="Enter your name" bgColor="black" onChange={(e) => setForm({ ...form, name: e.target.value })}/>
          </Box>

          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Email
            </Text>
            <Input type="email" placeholder="example@mail.com"  onChange={(e) =>setForm({ ...form, email: e.target.value })} bgColor="black"/>
          </Box>

          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Password
            </Text>
            <Input type="password" placeholder="Enter password" onChange={(e) => setForm({ ...form, password: e.target.value })} bgColor="black" />
          </Box>

          <Button colorScheme="green" size="lg" onClick={submit}>
            Sign Up
          </Button>
          <Text textColor="black" fontWeight={600}> Already have account?<Button textColor="black" fontSize={18} width={40} onClick={submit}>Log in</Button></Text>
        </Stack>
      </Box>
    </Box>
  );
}
