import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Box,
  Heading,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { connect, useDispatch } from 'react-redux'

import { loginAction } from "../reducers/userReducer";
import { login } from "../services/userService";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await login(email, password);
    localStorage.setItem("token", response.access_token)
    dispatch(loginAction({'token': response.access_token, 'user_id': response.user_id}))
    history.push("/");
  };

  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      align="center"
      justifyContent="center"
      maxW="100%"
      maxH="100%"
      p={10}
      rounded="md"
      bgColor={bgColor}
      m={5}
      boxShadow="md"
    >
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="mystery-user-1"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </FormControl>
            <Button width="full" color="teal" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
