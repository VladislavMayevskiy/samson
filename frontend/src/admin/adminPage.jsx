import {Box,Text,Heading,Button} from "@chakra-ui/react"

export const AdminPage = () => {
    return (
    <Box>
<Box padding={2} bgColor={"gray.100"}>
    <Button ml={5} bgColor={"green.200"} _hover={{bgColor:"green.400"}}>
        Products
    </Button>
</Box>
    </Box>
    )
}
