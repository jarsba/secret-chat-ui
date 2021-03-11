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
  MenuButton
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";

function ChatMessage(props) {

  let dateObj = new Date(props.time)
  let formattedDate = `${dateObj.getHours()}.${dateObj.getMinutes()}`

  return (
    <Flex justifyContent={props.justifyContent} width="100%" >
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
          {formattedDate}
        </Text>
      </Box>

      <Menu>
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
        <MenuList minW={"4rem"}>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default ChatMessage;
