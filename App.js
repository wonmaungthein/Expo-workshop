import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello Won Maung Thein, Welcome to Expo Workshop. Happy coding. What
          are you going to do now?
        </Text>
        <Text>Another one</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FECC32",
    alignItems: "center",
    justifyContent: "center"
  }
});
