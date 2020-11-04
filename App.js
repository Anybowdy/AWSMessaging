import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MessageScreen from "./screens/MessageScreen";
import LandingPage from "./screens/LandingPage";

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
        <Stack.Screen
          name="MessageScreen"
          options={{ headerShown: false }}
          component={MessageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
