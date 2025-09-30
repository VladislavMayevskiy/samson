import { Box, Button, Card, CardBody, Text, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { getAdminAPI } from "../api/admin"

const LoginAdmin = () => {
  // ідея, не копіюй сліпо: дивись на стани
const [status, setStatus] = useState("idle"); // idle | checking | ok | error
const [errorMsg, setErrorMsg] = useState("");
const [token, setToken] = useState("");

async function saveToken() {
  setStatus("checking");
  localStorage.setItem("token", token);
  const res = await getAdminAPI();

  if (res.ok) {
    setStatus("ok");
    setErrorMsg("");
  } else {
    setStatus("error");
    setErrorMsg(
      res.reason === "no-token" ? "Введіть токен" :
      res.reason === "unauthorized" ? "Невірний або протермінований токен" :
      res.reason === "forbidden" ? "Доступ тільки для admin" :
      "Помилка мережі"
    );
  }
}


  return (
  <Card>
    <CardBody>
      {status === "ok" ? (
        <>
          <Heading color="green.600">Welcome to admin!</Heading>
          <Text>You are successfully logged in.</Text>
        </>
      ) : (
        <>
          <Heading mb={3}>Enter Admin Token</Heading>
          <Input value={token} onChange={(e)=>setToken(e.target.value)} placeholder="Enter token..." />
          <Button mt={3} onClick={saveToken} isLoading={status==="checking"}>
            Verify Token
          </Button>
          {status === "error" && <Text mt={2} color="red.500">{errorMsg}</Text>}
        </>
      )}
    </CardBody>
  </Card>
);

}

export default LoginAdmin
