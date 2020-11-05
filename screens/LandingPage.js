import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import LocalStorage from "../api/LocalStorage";
import { AntDesign } from "@expo/vector-icons";

const LandingPage = ({ navigation }) => {
  const [username, setUsername] = useState("");

  const onPress = async () => {
    //await LocalStorage.removeUser();
    await LocalStorage.storeUser(username);
    const currentUser = await LocalStorage.getUser();
    navigation.navigate("MessageScreen", { user: currentUser });
  };

  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <View style={{ flex: 1, backgroundColor: "#f0efff" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
          <>
            <View style={styles.logoView}>
              <Image
                source={require("../assets/speech-bubble.png")}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
              <Text
                style={{ fontSize: 25, fontWeight: "600", color: "#494949" }}
              >
                Just chat
              </Text>
            </View>
            <View style={styles.container}>
              <View
                style={{
                  width: "100%",
                }}
              >
                <Text style={styles.usernameText}>Your username</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => setUsername(text)}
                ></TextInput>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                  <AntDesign name="arrowright" size={35} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: "8%",
  },
  logoView: {
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: "10%",
  },
  textInput: {
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff3ef",
    backgroundColor: "white",
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#6b17d8",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  usernameText: {
    fontSize: 20,
    fontWeight: "600",
    color: "gray",
    marginBottom: 8,
  },
});
