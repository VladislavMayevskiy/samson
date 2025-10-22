import React, { useMemo, useState,useEffect} from "react";
import Goods from "../../array/Goods";
import { Box, SimpleGrid } from "@chakra-ui/react";
import CardGoods from "../../array/CardGoods";
import Header from "../big/Header";

export default function Catalog({fetchCart}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [selected, setSelected] = useState(null);
  const [products,setProducts] = useState([]);
  const norm = (v) => v?.toString().toLocaleLowerCase("uk").trim() ?? "";
  useEffect(() => {
    fetch("http://localhost:5001/api/products/list")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filtered = useMemo(() => {
    try {
      const q = norm(query);
      if (!q) return products;
      return products.filter((item) => norm(item?.name).includes(q)); 
    } catch (e) {
      console.error("Error on search", e);
      return [];
    }
  }, [query, products]);

  return (
    <Box p={4} bgColor="gray.100" minH="100vh">
      <Box width={1302} ml={-10} mt={-5}>
        <Header
          query={query}
          setQuery={setQuery}
          sort={sort}
          setSort={setSort}
          selected={selected}
          setSelected={setSelected}
        />
      </Box>

      {Array.isArray(filtered) && filtered.length > 0 ? (
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 2 }}
          spacing={4}
          ml={120}
          mt={48}
        >
          {filtered.map((item) => (
            <CardGoods
              key={item._id}
              product={item} 
              cartUpdate={fetchCart}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Box
          p={8}
          textAlign="center"
          color="black"
          fontSize="xl"
          fontWeight="bold"
          bg="white"
          borderRadius="md"
          mt={48}
          mx="auto"
          maxW="400px"
          boxShadow="md"
        >
          {query
            ? `Нічого не знайдено для «${query}»`
            : "Каталог наразі порожній"}
        </Box>
      )}
    </Box>
    
  );
}
