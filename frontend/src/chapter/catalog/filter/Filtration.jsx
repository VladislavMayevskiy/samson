import { MenuItem } from "@chakra-ui/react";
import React from "react";

function Filtration({ setSort, onDone }) {
  return (
    <>
      <MenuItem
        onClick={() => {
          setSort("price-asc");
          onDone();
        }}
        bg="black"
        color="white"
        _hover={{ bg: "gold" }}
      >
        Price: Low to High
      </MenuItem>

      <MenuItem
        onClick={() => {
          setSort("price-desc");
          onDone();
        }}
        bg="black"
        color="white"
        _hover={{ bg: "gold" }}
      >
        Price: High to Low
      </MenuItem>

      <MenuItem
        onClick={() => {
          setSort("newest");
          onDone();
        }}
        bg="black"
        color="white"
        _hover={{ bg: "gold" }}
      >
        New Arrivals
      </MenuItem>
    </>
  );
}

export default Filtration;
