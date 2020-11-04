import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { GiftedChat, InputToolbar, Composer } from "react-native-gifted-chat";

import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

const MessageScreen = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

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

  async function createMessage(messageText) {
    let newMessage = {
      //id: uuid.v4(),
      id: 2,
      text: messageText,
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

  async function getMessages() {
    await API.graphql(graphqlOperation(queries.listMessages))
      .then((response) => {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, response.data.listMessages.items)
        );
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    //getMessages();
    console.log("printed");
  }, []);

  const onSend = useCallback((messages = []) => {
    //createMessage();
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      alwaysShowSend
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
