import React, { useEffect } from "react";
import { Center, Flex } from "@chakra-ui/react";
import { Text, useColorModeValue } from "@chakra-ui/react";

function Footer(props) {
  const bgColor = useColorModeValue("teal", "gray.800")

  return (
    <>
      <Center
        bgColor={bgColor}
        //bgGradient={bgGradient}
        h="60px"
        color="white"
        mt="auto"
        borderTopRadius="md"
        boxShadow="md"
      >
        <Text fontSize="lg">Made with 💖 from Helsinki</Text>
      </Center>
    </>
  );
}

export default Footer;
