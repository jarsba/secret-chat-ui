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
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { ChatIcon, EmailIcon } from "@chakra-ui/icons";

import ChatMessage from "./ChatMessage";
import ChatDate from "./ChatDate";

import {
  getMessagesFromRoom,
  getMessagesFromUser,
  postMessage,
} from "../services/messageService";

import { datesAreOnSameDay } from "../utils/dateUtils";

function ChatRoom(props) {
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState("");
  const handleChange = (event) => {
    setMessageValue(event.target.value);
  };

  const [top, setTop] = useState(null);
  const topRef = useRef(null);
  const bottomRef = useRef();

  useEffect(async () => {
    if (props.private) {
      const response = await getMessagesFromUser(props.id);
      let messages = response.data;
      // Sort descending
      messages = sortMessages(messages);
      setMessages(messages);
    } else {
      const response = await getMessagesFromRoom(props.id);
      let messages = response.data;
      // Sort descending
      messages = sortMessages(messages);
      setMessages(messages);
    }

    setTimeout(() => {
      bottomRef.current.scrollIntoView();
    }, 1);
  }, []);

  const sortMessages = (messagesToSort) => {
    let sortedMessages = messagesToSort.sort((a, b) =>
      new Date(a.updated_at) > new Date(b.updated_at) ? 1 : -1
    );
    return sortedMessages;
  };

  const messagesShareDate = (message1, message2) => {
    let date1 = new Date(message1.updated_at);
    let date2 = new Date(message2.updated_at);
    return datesAreOnSameDay(date1, date2);
  };

  const sendMessage = async () => {
    if (messageValue != "") {
      let newMessage;
      if (props.private) {
        newMessage = {
          content: messageValue,
          user_id: props.user.user_id,
          recipient_id: props.id,
        };
      } else {
        newMessage = {
          content: messageValue,
          user_id: props.user.user_id,
          room_id: props.id,
        };
      }
      const response = await postMessage(newMessage);
      let updatedMessages = sortMessages([...messages, response.data]);
      setMessages(updatedMessages);
      setMessageValue("");
    }
  };

  const bgColor = useColorModeValue("white", "gray.800");
  const toolTipOpen = messages.length == 0;

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
        <ListItem key="top">
          <div ref={topRef}></div>
        </ListItem>
        {messages.map((message, index, array) => {
          if (index == 0) {
            return (
              <>
                <ListItem width="100%" key={index + 1000}>
                  <ChatDate date={message.updated_at} />
                </ListItem>
                <ListItem
                  width="100%"
                  key={message.id}
                  justifyContent={
                    message.user_id === 1 ? "flex-end" : "flex-start"
                  }
                >
                  <ChatMessage
                    content={message.content}
                    time={message.updated_at}
                    justifyContent={
                      message.user_id === props.user.user_id
                        ? "flex-end"
                        : "flex-start"
                    }
                  />
                </ListItem>
              </>
            );
          } else if (!messagesShareDate(message, array[index - 1])) {
            return (
              <>
                <ListItem width="100%" key={index + 1000}>
                  <ChatDate date={array[index - 1].updated_at} />
                </ListItem>
                <ListItem
                  width="100%"
                  key={message.id}
                  justifyContent={
                    message.user_id === 1 ? "flex-end" : "flex-start"
                  }
                >
                  <ChatMessage
                    content={message.content}
                    time={message.updated_at}
                    justifyContent={
                      message.user_id === props.user.user_id
                        ? "flex-end"
                        : "flex-start"
                    }
                  />
                </ListItem>
              </>
            );
          } else {
            return (
              <ListItem
                width="100%"
                key={message.id}
                justifyContent={
                  message.user_id === 1 ? "flex-end" : "flex-start"
                }
              >
                <ChatMessage
                  content={message.content}
                  time={message.updated_at}
                  justifyContent={
                    message.user_id === props.user.user_id
                      ? "flex-end"
                      : "flex-start"
                  }
                />
              </ListItem>
            );
          }
        })}
        <ListItem key="bottom">
          <div ref={bottomRef}></div>
        </ListItem>
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
              value={messageValue}
              onChange={handleChange}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ChatRoom);
