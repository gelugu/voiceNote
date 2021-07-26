import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

export const ListIcon = () => {
  return (
    <View style={styles.container}>
      <Icon name="list-outline" type="ionicon" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
