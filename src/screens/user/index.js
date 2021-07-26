import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "react-native-elements";

export const User = ({ user }) => {
  const { login, email } = user;
  return (
    <View style={styles.container}>
      <Text>{login}</Text>
      <Text>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
