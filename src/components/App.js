import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import jwt from 'jwt-decode'
import { connect, useDispatch } from "react-redux";
import { loginAction, validateToken } from "../reducers/userReducer";
import Login from "./Login";
import ChatRoom from "./ChatRoom";
import Home from "./Home";
import Layout from "./Layout";
import NotFound from "./NotFound";

function App(props) {
  const dispatch = useDispatch();

  const checkAuthentication = () => {
    let reduxToken = props.user.token
    let token = localStorage.getItem("token")
    if (token && reduxToken) {
      return true;
    } else if (!token && reduxToken) {
      localStorage.setItem("token", reduxToken);
      return true;
    } else if (!reduxToken && token) {
      const user_id = jwt(token).identity
      dispatch(loginAction({ token: token, user_id: user_id}));
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
