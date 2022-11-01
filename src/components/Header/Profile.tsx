import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Douglas Sousa</Text>
        <Text color="gray.300" fontSize="small">
          Douglasmb87@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Douglas Sousa"
        src="https://github.com/d0ugra5.png"
      ></Avatar>
    </Flex>
  );
}
