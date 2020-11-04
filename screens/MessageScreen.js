import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { GiftedChat, InputToolbar, Composer } from "react-native-gifted-chat";

import { AntDesign } from "@expo/vector-icons";

import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

import APIManager from "../api/API";

const MessageScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const ChatNavigationBar = (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={20} color="white" />
      </TouchableOpacity>
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

  const createMessage = (messageText) => {
    try {
      let response = APIManager.createMessage(messageText, "username");
    } catch (error) {
      console.log(error);
    }
  };

  async function getMessages() {
    try {
      let messages = APIManager.listMessages();
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    } catch (error) {
      console.log(error);
    }
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
      {ChatNavigationBar}
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
    paddingBottom: 10,
    flexDirection: "column-reverse",
  },
  goBackButton: {
    position: "absolute",
    height: 30,
    width: 30,
    left: 15,
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6b17d8",
    borderRadius: 15,
  },
  title: {
    color: "#6b17d8",
    fontSize: 23,
    fontWeight: "600",
  },
});
