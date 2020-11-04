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
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
