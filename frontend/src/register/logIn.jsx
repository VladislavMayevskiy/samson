import { Box, Button, Heading, Input, Stack, Text,HStack} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import {useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function LogIn() {
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState({email: "", password: "" });
  const submit = async() => {
    if (!form.email || !form.password) {
        toast({
            title:"All letter important",
            status:"error",
            duration:4000,
            isClosable:true
        })
        return      
    } 
    const data = await loginUser(form)
    console.log(data)
    if (data.token) {
        localStorage.setItem("token", data.token);
        toast({
          title: "Log in completed",
          status: "success",
          duration: 3000,
          isClosable: true  
        }); 
        navigate("/global");
      } else {
        toast({
          title: "Incorrect password or email",
          description: data.message,
          status: "error",
          duration: 4000,
          isClosable: true   
        });
      }
      
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
          Log In
        </Heading>

        <Stack spacing={4}>
  <HStack>
       <FaEnvelope color="green"/>
   <Text fontSize="sm" fontWeight={600}>
     Email
   </Text>
   </HStack>
            <Input type="email" placeholder="example@mail.com"  onChange={(e) => setForm({...form,email:e.target.value})} borderRadius={10} borderWidth={2}/>

  <HStack>
       <FaLock color="green"/>
   <Text fontSize="sm" fontWeight={600}>
    Password
   </Text>
   </HStack>
   
            <Input type="password" placeholder="Enter password"  onChange={(e) => setForm({...form,password:e.target.value })} borderRadius={10} borderWidth={2}/>


          <Button bgColor="green.500" color="white" size="lg" onClick={submit} _hover={{ bg: "green.600" ,transform: "scale(1.05)"}} borderRadius={10} borderWidth={2} >
            Log in
          </Button>
          <Text textColor="black" fontWeight={600}> Don't have?<Button textColor="black" fontSize={18} width={12} onClick={() => navigate("/")} variant="ghost" ml={8} mb={1}>Sign Up</Button></Text>
        </Stack>
      </Box>
    </Box>
  );
}
