import React from "react";
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

import { AntDesign } from "@expo/vector-icons";

const LandingPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f0efff" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={() => Keyboard.dismiss()}
        >
          <>
            <View
              style={{
                alignItems: "center",
                position: "absolute",
                left: 0,
                right: 0,
                top: "10%",
              }}
            >
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
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "gray",
                    marginBottom: 8,
                  }}
                >
                  Your username
                </Text>
                <TextInput style={styles.textInput}></TextInput>
                <TouchableOpacity style={styles.button}>
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
});
