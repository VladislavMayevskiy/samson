import React from "react";
import { Box,Text,Heading,Image} from "@chakra-ui/react";
import Header from "./chapter/big/Header"
import SM1 from "./chapter/big/SM1"
import SM2 from "./chapter/big/SM2"
import SM3 from "./chapter/big/SM3"
import SM4 from "./chapter/big/SM4"
export default function Home () {
    return (
        <Box bgColor="white" height={3600}>
            <Box height="300px" bgGradient="linear(to-t, white, yellow.200)" >
             </Box>
             <Box position="absolute" top="500px"left="-130px" w="400px" h="500px"  bg="gold" borderRadius="full" filter="blur(700px)" opacity={0.5} zIndex={0} />
             <Box position="absolute" top="1100px"left="930px" w="400px" h="500px"  bg="gold" borderRadius="full" filter="blur(700px)" opacity={0.5} zIndex={0} />
             <Box mt={-300}> <Header/></Box>
             <Box mt={10} ml={450}> <SM1/> </Box>
             <Box mt={20}><SM2/></Box>
             <Box><SM3/></Box>
             <Box><SM4/></Box>
        </Box>
    )
}