import React, { useState } from "react";
import { StyleSheet, TextInput, Keyboard } from "react-native";
import { colors } from "../../../styleConfig";

export const NoteHeader = ({ text }) => {
  const [value, setValue] = useState(text);

  return (
    <TextInput
      style={styles.container}
      value={value}
      onChangeText={setValue}
      blurOnSubmit
      onBlur={Keyboard.dismiss}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.text,
  },
});
