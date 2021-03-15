import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Spacer,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";

function ChatMessage(props) {
  let dateObj = new Date(props.time);
  let formattedDate = `${("0" + dateObj.getHours()).slice(-2)}.${(
    "0" + dateObj.getMinutes()
  ).slice(-2)}`;
  const chatMessageBg = useColorModeValue("white", "teal.800");

  return (
    <Flex justifyContent={props.justifyContent} width="100%">
      <Box
        display="flex"
        boxShadow="md"
        bgColor={chatMessageBg}
        m="3"
        p="3"
        borderRadius="20px"
      >
        <Text mr={3} p={1}>
          {props.content}
        </Text>
        <Text fontSize="xs" alignSelf="flex-end">
          {formattedDate}
        </Text>
      </Box>

      <Menu >
        <MenuButton
          as={IconButton}
          alignSelf="center"
          color="gray.200"
          bgColor="transparent"
          aria-label="Options"
          icon={<DragHandleIcon />}
          _hover={{
            background: "transparent",
            color: "teal.500",
          }}
          _focus={{
            outline: "0",
          }}
        >
          {" "}
        </MenuButton>
        <MenuList minW={"4rem"} zIndex={20}>
          <MenuItem onClick={() => props.deleteMessage(props.id)}>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default ChatMessage;
