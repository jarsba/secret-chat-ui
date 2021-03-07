import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Image, useColorModeValue } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import { logoutAction } from "../reducers/userReducer";

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const bgColor = useColorModeValue("white", "gray.800");

  const home = () => {
    history.push("/");
  };

  const logout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("token");
    history.push("/login");
  };

  const login = () => {
    history.push("/login");
  };

  return (
    <Flex
      align="center"
      p={2}
      boxShadow="md"
      borderBottomRadius="md"
      bgColor={bgColor}
    >
      <Box as="button" p="2" onClick={() => home()} outline="0">
        <Image
          src="/logo_200.png"
          alt="Secret Chat"
          htmlHeight="100px"
          htmlWidth="150px"
        />
      </Box>
      <Spacer />
      {props.user.logged ? (
        <Button mr={4} colorScheme="teal" onClick={() => logout()}>
          Log out
        </Button>
      ) : (
        <Button mr={4} colorScheme="teal" onClick={() => login()}>
          Log in
        </Button>
      )}
      <ThemeToggle />
    </Flex>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
