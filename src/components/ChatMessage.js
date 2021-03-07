import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Spacer,
  IconButton,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";

function ChatMessage(props) {
  return (
    <Flex justifyContent={props.justifyContent} width="100%">
      <Box
        display="flex"
        boxShadow="md"
        bgColor="white"
        m="3"
        p="3"
        borderRadius="20px"
      >
        <Text mr={3} p={1}>
          {props.content}
        </Text>
        <Spacer />
        <Text fontSize="xs" alignSelf="flex-end">
          12:24
        </Text>
      </Box>
      <IconButton
        alignSelf="center"
        color="gray.200"
        bgColor="transparent"
        aria-label="Options"
        icon={<DragHandleIcon />}
      ></IconButton>
    </Flex>
  );
}

export default ChatMessage;
