import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure();

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
