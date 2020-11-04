import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { GiftedChat, InputToolbar, Composer } from "react-native-gifted-chat";

import { AntDesign } from "@expo/vector-icons";

import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

const MessageScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const navBar = (
    <View style={styles.navBar}>
      <Text style={styles.title}>Messenger 2.0 ⚡</Text>
    </View>
  );

  const test = (
    <View
      style={{
        backgroundColor: "white",
        height: 100,
        width: "100%",
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
        alignItems: "center",
        flexDirection: "column-reverse",
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          position: "absolute",
          height: 30,
          width: 30,
          left: 10,
          bottom: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6b17d8",
          borderRadius: 15,
        }}
      >
        <AntDesign name="arrowleft" size={20} color="white" />
      </View>
      <Text style={styles.title}>Messenger 2.0 ⚡</Text>
    </View>
  );

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
    <View style={{ flex: 1 }}>
      {test}
      <GiftedChat
        messages={messages}
        alwaysShowSend
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "white",

    height: 100,
    width: "100%",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    alignItems: "center",
    flexDirection: "column-reverse",
  },
  title: {
    color: "#6b17d8",
    fontSize: 25,
    fontWeight: "600",
  },
});
