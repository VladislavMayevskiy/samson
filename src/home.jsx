import React from "react";
import { Box} from "@chakra-ui/react";
import Header from "./chapter/big/Header"
import SM1 from "./chapter/big/SM1"

export default function Home () {
    return (
            <Box height="300px">
             <Box > <SM1/> </Box>
             {location.pathname !== "/" && (  <Box mt={-300}> <Header/></Box>)}
        </Box>
    )
}
//{location.pathname !== "/" && (  <Box mt={-300}> <Header/></Box>)} хедер на потім