import React, { useEffect, useState } from "react";
import {
  Flex,
  List,
  Button,
  ListItem,
  Box,
  Spacer,
  Heading,
  Text,
  Center,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import Emoji from "./Emoji";

import { getUsers } from "../services/userService";
import { getRooms } from "../services/chatRoomService";

function Home(props) {
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(async () => {
    let usersResponse = await getUsers();
    let userList = usersResponse.data;

    let roomsResponse = await getRooms();
    let roomList = roomsResponse.data

    setUsers(userList);
    setRooms(roomList);
  }, []);

  const bgColor = useColorModeValue("white", "gray.800");
  const scrollbarColor = useColorModeValue("#123123", "#643345");

  return (
    <Flex
      maxW="100%"
      maxH="100%"
      p={2}
      boxShadow="sm"
      rounded="md"
      bgColor={bgColor}
      m={2}
    >
      <Box flexGrow="1" textAlign="center">
        <Heading as="h3" size="lg">
          <Emoji symbol="👥" /> Join a room!
        </Heading>
        <List
          maxHeight="80vh"
          overflowY="scroll"
          spacing={3}
          m={1}
          p={3}
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
          {rooms.map((room) => {
            return (
              <ListItem key={room.id}>
                <Button
                  size="md"
                  height="48px"
                  width="100%"
                  border="2px"
                  borderColor="teal"
                  as="a"
                  href={"/chatroom/" + room.id}
                >
                  {room.name}
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box flexGrow="1" textAlign="center">
        <Heading as="h3" size="lg">
          <Emoji symbol="🤫" /> Private chat!
        </Heading>
        <List
          maxHeight="80vh"
          overflowY="scroll"
          spacing={3}
          m={1}
          p={3}
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
          {users.map((user) => {
            return (
              <ListItem key={user.id}>
                <Button
                  size="md"
                  height="48px"
                  width="100%"
                  border="2px"
                  borderColor="teal"
                  as="a"
                  href={"/chatroom/private/" + user.id}
                >
                  {user.username}
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Flex>
  );
}

export default Home;
