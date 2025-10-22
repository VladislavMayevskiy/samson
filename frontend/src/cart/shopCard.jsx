import {
  Box, Drawer, DrawerOverlay, DrawerBody, DrawerContent,
  DrawerHeader, DrawerFooter, DrawerCloseButton,
  Button, Card, CardBody, Text
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../api/api";

function ShopCard() {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchCart = async () => {
    try {
      const res = await api.get("/api/cart/all");
      console.log("Cart data:", res.data);
      setCart(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();

      const handleUpdate = () => {
    console.log("cartUpdate event received");
    fetchCart();
  };
  window.addEventListener("cartUpdate", handleUpdate);
  return () => window.removeEventListener("cartUpdate", handleUpdate);
  }, []);

  const deleteItem = async (id) => {
    try {
      const res = await api.delete(`/api/cart/delete/${id}`);
      console.log("Delete completed", res.data);
      fetchCart();
    } catch (err) {
      console.log("Error deleting item", err);
    }
  };

  if (cart.length === 0) {
    return (
      <Box>
        <Text textColor="black">Empty</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Button onClick={onOpen}>Cart</Button>

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>
          <DrawerBody>
            {cart.map((item) => (
              <Card key={item._id}>
                <CardBody>
                  <Text>{item.forCart?.name}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  <Button onClick={() => deleteItem(item._id)}>–</Button>
                </CardBody>
              </Card>
            ))}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default ShopCard;
