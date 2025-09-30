import { Box, Button, Heading, Input, Stack, Text,Icon, Container,HStack} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/auth";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

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
      maxH="100vh"
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

        <Stack spacing={4} ml={-1}>
      <HStack align="center"  >
  <FaUser color="green"/>
  <Text fontSize="sm" fontWeight={600}>
    Full name
  </Text>
</HStack>

<Input
  placeholder="Enter your name"
  onChange={(e) => setForm({ ...form, name: e.target.value })}
  borderRadius={10}
  borderWidth={2}
/>
  <HStack>
      <FaEnvelope color="green"/>
  <Text fontSize="sm" fontWeight={600}>
    Email
  </Text>
  </HStack>
            <Input type="email" placeholder="example@mail.com"  onChange={(e) =>setForm({ ...form, email: e.target.value })} borderRadius={10} borderWidth={2}/>


   <HStack>
      <FaLock color="green"/>
  <Text fontSize="sm" fontWeight={600}>
    Password
  </Text>
  </HStack>
            <Input type="password" placeholder="Enter password" onChange={(e) => setForm({ ...form, password: e.target.value })} borderRadius={10} borderWidth={2} />


          <Button bgColor="green.500" color="white" size="lg" onClick={submit} _hover={{ bg: "green.600" ,transform: "scale(1.05)"}} borderRadius={10} borderWidth={2}>
            Sign Up
          </Button>
          <Text textColor="black" fontWeight={600}> Already have account?<Button textColor="black" fontSize={18} width={12} onClick={() => navigate("/login")} variant="ghost" ml={3} mb={1}>Log in</Button></Text>
        </Stack>
      </Box>
    </Box>
  );
}
