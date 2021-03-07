import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { loginAction } from "../reducers/userReducer";
import Login from "./Login";
import ChatRoom from "./ChatRoom";
import Home from "./Home";
import Layout from "./Layout";
import NotFound from "./NotFound";

function App(props) {
  const dispatch = useDispatch();

  const checkAuthentication = () => {
    if (props.user.token || localStorage.getItem("token")) {
      if (!props.user.token) {
        dispatch(loginAction({ token: localStorage.getItem("token") }));
      } else if (!localStorage.getItem("token")) {
        localStorage.setItem("token", props.user.token);
      }
      return true;
    }
    return false;
  };

  const chatRoomMatch = useRouteMatch("/chatroom/:id");
  const privateRoomMatch = useRouteMatch("/chatroom/private/:id");
  const isChatRoom = chatRoomMatch ? true : false;
  const isPrivateRoom = privateRoomMatch ? true : false;

  return (
    <>
      <Switch>
        <Route path={["/chatroom/:id", "/chatroom/private/:id"]}>
          {() =>
            checkAuthentication() ? (
              <Layout>
                <ChatRoom
                  private={isPrivateRoom}
                  id={
                    isPrivateRoom
                      ? Number(privateRoomMatch.params.id)
                      : Number(chatRoomMatch.params.id)
                  }
                />
              </Layout>
            ) : (
              <Redirect to="/login" />
            )
          }
        </Route>
        <Route path="/login">
          {() =>
            checkAuthentication() ? (
              <Redirect to="/" />
            ) : (
              <Layout>
                <Login />
              </Layout>
            )
          }
        </Route>
        <Route exact path="/">
          {() =>
            checkAuthentication() ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Redirect to="/login" />
            )
          }
        </Route>
        <Route>
          <Layout>
            <NotFound />
          </Layout>
        </Route>
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(App);
