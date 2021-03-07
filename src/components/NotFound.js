import React, { useEffect } from "react";
import {
  Flex,
  Center,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function NotFound(props) {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      align="center"
      justifyContent="center"
      maxW="100%"
      maxH="100%"
      p={2}
      boxShadow="sm"
      rounded="md"
      bgColor={bgColor}
      m={2}
    >
      <div>
        <Image ></Image>
        <Text fontSize="3xl">404 Not found</Text>
      </div>
    </Flex>
  );
}

export default NotFound;
