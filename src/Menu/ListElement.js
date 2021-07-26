import React from "react";
import { StyleSheet } from "react-native";
import { SpeedDial } from "react-native-elements";
import { colors } from "../styleConfig";

export const ListElement = ({ name, onPress }) => {
  return (
    <SpeedDial.Action
      icon={{ name: "reader-outline", type: "ionicon", color: colors.text }}
      color={colors.background}
      title={name}
      titleStyle={styles.title}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    backgroundColor: colors.background,
    color: colors.text,
  },
});
