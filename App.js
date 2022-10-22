import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";
import React from "react";
import Constants from "expo-constants";

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Search</Text>
        </View>

        <View style={styles.body}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    // paddingTop: Constants.statusBarHeight,

    padding: 16,
    backgroundColor: "green",
  },
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
