import {Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea,Text } from "@chakra-ui/react"
import api from  "../api/api"
import { useState} from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Profile() {
  const [user, setUser] = useState(null);
const navigate = useNavigate()
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/user/profile");
        console.log("Profile data:", res.data);
        setUser(res.data.user);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);
const logout = () => {
  localStorage.removeItem("token")
  navigate("/login")
}
  if (!user) return <div>Loading...</div>;

  return (
    <Box  bgColor={"gray.100"} height={820} padding={2} >
      <Heading textAlign={"center"}>Welcome! {user.name}</Heading>
      <Button onClick={() => navigate("/global")} mt={-20}> Exit </Button>
      <Text>Email: {user?.email}</Text>
      <Button onClick={logout} >Logout</Button>
    </Box>
  );
}

export default Profile