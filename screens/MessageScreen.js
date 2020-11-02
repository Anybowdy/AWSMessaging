import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import * as mutations from "../graphql/mutations";

var uuid = require("react-native-uuid");

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  async function createMessage() {
    let newMessage = {
      id: uuid.v1(),
      text: "Hello you",
      userID: 1,
    };

    await API.graphql(
      graphqlOperation(mutations.createMessage, { input: newMessage })
    )
      .then(() => {
        console.log("success");
      })
      .catch((error) => console.log(error));
  }

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      isTyping={true}
      alwaysShowSend={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
