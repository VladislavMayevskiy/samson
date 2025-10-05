import React from "react";
import {Box,Button,Flex,Card,CardBody,Text,Heading,Icon,Input} from "@chakra-ui/react"
import { useState } from "react";

const LoginAdmin = () => {
  const ADMIN_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGRiZjM3YTI4ZDUzZjNiNTU2ODMxODkiLCJyb2xlIjoidXNlciIsImlhdCI6MTc1OTI0NTE5MywiZXhwIjoxNzU5MjQ4NzkzfQ.omp2vZdpsM3C697J4vx-1HQOTP9mOumGI13qK_NR7CA"
  const [token,setToken] = useState("")
  const [error,setError] = useState("")
  const confirmLogin = () => {
    if (token === ADMIN_KEY) {
      localStorage.setItem("token",token)
      window.location.href="/admin/adminPage"
    } else {
      setError("Invalid token")
    }
  }
  return (
        <Box height={"100vh"} width={"100vh"}>
        <Card mt={300} ml={500} height={300} borderRadius={20} borderWidth={1}>
            <CardBody>
<Heading textColor={"green.400"} >Welcome Admin!</Heading>
<Input placeholder="Enter a token" value={token} onChange={(e) => setToken(e.target.value)}/>
<Button mt={50} _hover={{bg:"green.300",transform:"scale(1.02)"}} bgColor={"green.100"} borderRadius={12} borderWidth={2} borderColor={"black"} onClick={confirmLogin} width={270} >Continue</Button>
{error && <Text textColor={"red"}>{error}</Text>}
            </CardBody>
        </Card>
 
            
        </Box>
    )
}
export default LoginAdmin