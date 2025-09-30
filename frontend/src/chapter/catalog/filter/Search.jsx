import { Box, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Search({ value,onChange }) {
  return (
    <Box mb={4}>
      <InputGroup>
      <Input
  placeholder="Пошук…"
  value={value}
  onChange={(e) => onChange(e.target.value)}
  color="black"
  _placeholder={{ color: "gray.500" }}
  bg="white"
  width={400}
  borderRadius={17}
  borderColor="gray.300"
/>

        {value && (
          <InputRightElement>
            <IconButton
            ml={-500}
              aria-label="Очистити"
              icon={<CloseIcon boxSize={3} />}
              size="sm"
              color="black"
              onClick={() => onChange("")}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </Box>
  );
}
