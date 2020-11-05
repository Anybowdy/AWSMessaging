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
import LocalStorage from "../api/LocalStorage";
import APIManager from "../api/API";

import User from "../models/User";
import Message from "../models/Message";

const MessageScreen = ({ navigation, route }) => {
  const [messages, setMessages] = useState([]);

  const [user, setUser] = useState({
    _id: route.params.user.userId,
    name: route.params.user.username,
  });

  useEffect(() => {}, []);

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

  const createMessage = async (id, messageText) => {
    try {
      //let user = new User(user._id, user.username);
      let messageToCreate = new Message(id, messageText, user);
      let response = await APIManager.createMessage(messageToCreate);
      console.log("Message created");
    } catch (error) {
      console.log("Error while creating message ", error);
    }
  };

  async function getMessages() {
    try {
      let { data } = await APIManager.getMessages();
      let messages = data.listMessages.items;
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    } catch (error) {
      console.log(error);
    }
  }

  const onSend = useCallback((messages = []) => {
    let id = messages[0]._id;
    let text = messages[0].text;
    createMessage(id, text);
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );
  }, []);

  const Chat = (
    <GiftedChat
      messages={messages}
      alwaysShowSend
      user={user}
      onSend={(messages) => onSend(messages)}
    />
  );

  return <View style={{ flex: 1 }}>{ChatNavigationBar}</View>;
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
