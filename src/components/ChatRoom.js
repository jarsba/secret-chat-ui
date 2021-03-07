import React, { useEffect, useState, useRef } from "react";
import {
  Flex,
  Box,
  Heading,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  IconButton,
  Textarea,
  ListItem,
  List,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChatIcon, EmailIcon } from "@chakra-ui/icons";

import ChatMessage from "./ChatMessage";

function ChatRoom(props) {
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);
  const executeScroll = () => console.log("Scrolling") && bottomRef.current.scrollIntoView()    

  useEffect(() => {
    setMessages([
      { id: 1, content: "Testing content", datetime: new Date(), user_id: 1 },
      { id: 2, content: "Testing content2", datetime: new Date(), user_id: 2 },
      { id: 3, content: "Testing content3", datetime: new Date(), user_id: 2 },
      {
        id: 4,
        content:
          "Testing long long long long long long long long long long long long long long long long long long long long long long long content4",
        datetime: new Date(),
        user_id: 1,
      },
      { id: 5, content: "Testing content5", datetime: new Date(), user_id: 1 },
      { id: 6, content: "Testing content6", datetime: new Date(), user_id: 2 },
      { id: 7, content: "Testing content7", datetime: new Date(), user_id: 1 },
      { id: 8, content: "Testing content8", datetime: new Date(), user_id: 1 },
      { id: 9, content: "Testing content9", datetime: new Date(), user_id: 2 },
      {
        id: 10,
        content: "Testing content10",
        datetime: new Date(),
        user_id: 1,
      },
      {
        id: 11,
        content: "Testing content11",
        datetime: new Date(),
        user_id: 1,
      },
      {
        id: 12,
        content: "Testing content12",
        datetime: new Date(),
        user_id: 2,
      },
      {
        id: 13,
        content: "Testing content13",
        datetime: new Date(),
        user_id: 1,
      },

      {
        id: 14,
        content: "Testing content14",
        datetime: new Date(),
        user_id: 1,
      },
      {
        id: 15,
        content: "Testing content15",
        datetime: new Date(),
        user_id: 2,
      },
      {
        id: 16,
        content: "Testing content16",
        datetime: new Date(),
        user_id: 1,
      },

      {
        id: 17,
        content: "Testing content17",
        datetime: new Date(),
        user_id: 1,
      },
      {
        id: 18,
        content: "Testing content18",
        datetime: new Date(),
        user_id: 2,
      },
      {
        id: 19,
        content: "Testing content19",
        datetime: new Date(),
        user_id: 1,
      },

      {
        id: 20,
        content: "Testing content20",
        datetime: new Date(),
        user_id: 1,
      },
      {
        id: 21,
        content: "Testing content21",
        datetime: new Date(),
        user_id: 2,
      },
      {
        id: 22,
        content: "Testing content22",
        datetime: new Date(),
        user_id: 1,
      },

      {
        id: 23,
        content: "Testing content23",
        datetime: new Date(),
        user_id: 1,
      },
      {
        id: 24,
        content: "Testing content24",
        datetime: new Date(),
        user_id: 2,
      },
      {
        id: 25,
        content: "Testing content25",
        datetime: new Date(),
        user_id: 1,
      },
    ]);
    setTimeout(executeScroll, 1000);
  }, []);

  console.log(props);

  const sendMessage = () => {
    alert("Enter hit! Send!");
  };

  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      maxW="100%"
      maxH="100%"
      boxShadow="sm"
      rounded="md"
      bgColor={bgColor}
      m={2}
      flexDirection="column"
    >
      <Box
        display="flex"
        borderTopRadius="md"
        alignItems="center"
        justifyContent="center"
        m={0}
        p={0}
        bgColor="teal"
        maxW="100%"
        height="70px"
        textAlign="center"
      >
        <Avatar
          size="md"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          mr="3"
        />
        <Heading as="h4" size="md" color="white">
          User
        </Heading>
      </Box>
      <List
        maxW="100%"
        height="75vh"
        overflowY="scroll"
        bgColor="gray.50"
        css={{
          "::-webkit-scrollbar": {
            width: "5px",
            borderRadius: "10px",
          },

          /* Track */
          "::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "10px",
          },

          /* Handle */
          "::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "10px",
          },

          /* Handle on hover */
          "::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        {messages.map((message) => {
          return (
            <ListItem
              width="100%"
              key={message.id}
              justifyContent={message.user_id === 1 ? "flex-end" : "flex-start"}
            >
              <ChatMessage
                content={message.content}
                justifyContent={
                  message.user_id === 1 ? "flex-end" : "flex-start"
                }
              />
            </ListItem>
          );
        })}
        <ListItem ref={bottomRef}>Bottom</ListItem>
      </List>
      <Box maxW="100%" height="40px">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input
              size="md"
              placeholder="Message"
              focusBorderColor="teal.500"
              onKeyPress={(event) => event.key === "Enter" && sendMessage()}
            />
            <InputRightElement>
              <IconButton
                borderTopRadius="0px"
                borderBottomLeftRadius="0px"
                borderBottomRightRadius="md"
                colorScheme="teal"
                aria-label="Send"
                icon={<ChatIcon />}
                onClick={() => sendMessage()}
              />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Box>
    </Flex>
  );
}

export default ChatRoom;
