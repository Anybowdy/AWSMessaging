import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import MessageScreen from "./screens/MessageScreen";
import LandingPage from "./screens/LandingPage";

Amplify.configure(awsconfig);

export default function App() {
  const navBar = (
    <View style={styles.navBar}>
      <Text style={styles.title}>Messenger 2.0 ⚡</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    bottom: -10,
  },
});
