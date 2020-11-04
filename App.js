import "react-native-gesture-handler";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import MessageScreen from "./screens/MessageScreen";
import LandingPage from "./screens/LandingPage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

Amplify.configure(awsconfig);

const Stack = createStackNavigator();

export default function App() {
  const navBar = (
    <View style={styles.navBar}>
      <Text style={styles.title}>Messenger 2.0 ⚡</Text>
    </View>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen name="Messages" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
