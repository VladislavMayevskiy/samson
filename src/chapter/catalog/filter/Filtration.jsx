import { Box, Button } from "@chakra-ui/react";
import React from "react";

function Filter({ sort, setSort }) {
  
  const toNum = (str) => parseInt(str.replace(/[^0-9]/g, ""), 10);
  
  const sortFromHigh = () => {
    const sortedHighLow = [...sort].sort((a, b) => toNum(b.price) - toNum(a.price));
    setSort(sortedHighLow);
  };

  const sortFromLow = () => {
    const sortedLowHigh = [...sort].sort((a, b) => toNum(a.price) - toNum(b.price));
    setSort(sortedLowHigh);
  };

  const sortNewest = () => {
    const sortedNewest = [...sort].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setSort(sortedNewest);
  };

  return (
    <Box >
      <Button onClick={sortFromHigh}>З більшого до меншого</Button>
      <Button onClick={sortFromLow}>З меншого до більшого</Button>
      <Button onClick={sortNewest}>За новизною</Button>
    </Box>
  );
}

export default Filter;
