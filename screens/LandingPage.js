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

const LandingPage = () => {
  return (
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
              style={{ width: 100, height: 100 }}
            />
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
                  marginVertical: 10,
                  color: "gray",
                }}
              >
                Username:
              </Text>
              <TextInput style={styles.textInput}></TextInput>
              <TouchableOpacity
                style={{
                  backgroundColor: "#6b17d8",
                  height: 60,
                  borderRadius: 10,
                }}
              ></TouchableOpacity>
            </View>
          </View>
        </>
      </TouchableWithoutFeedback>
    </ScrollView>
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
    height: 50,
    borderWidth: 0.3,
    borderRadius: 10,
    borderEndColor: "gray",
    marginVertical: 20,
  },
});
