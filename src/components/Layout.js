import React, { useEffect } from "react";
import {
  Flex,
  Container,
  Box,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  const bgColor = useColorModeValue("gray.200", "gray.900")
  const backgroundImage = "url('/bg.svg')"
  
  return (
    <>
      <Box
        width="100vw"
        height="100vh"
        maxWidth="100vw"
        maxHeight="100vh"

        mx="auto"
        bgColor={bgColor}
        backgroundImage={backgroundImage}
      >
        <Flex
          direction="column"
          maxW={{ xl: "1200px" }}
          height="100%"
          m="0 auto"
          {...props}
        >
          <Header />
          <Box flex="1 0 auto">{props.children}</Box>
          <Footer flexShrink="0" />
        </Flex>
      </Box>
    </>
  );
}

export default Layout;
