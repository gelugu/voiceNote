import React, { useCallback, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
} from "react-native";
import { colors } from "../../../styleConfig";

export const Phrase = ({ data }) => {
  const inputRef = useRef(null);
  const { preferIndex, values, customValue } = data;
  const [currentIndex, setCurrentIndex] = useState(preferIndex || 0);
  const [isInput, setIsInput] = useState(false);
  const [value, setValue] = useState(customValue || values[currentIndex]);

  const onPraseTouch = useCallback(() => {
    if (currentIndex === values.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);

    setValue(values[currentIndex]);
  }, [currentIndex]);

  const enableInput = useCallback(() => {
    if (!customValue) setIsInput(true);
    inputRef.current.focus()
  }, [inputRef, customValue]);

  const disableInput = useCallback(() => {
    setIsInput(false);
  }, []);

  return (
    <TouchableNativeFeedback
      style={styles.container}
      onPress={onPraseTouch}
      onLongPress={enableInput}
    >
      {!isInput ? (
        <Text style={styles.text}>{value}</Text>
      ) : (
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={setValue}
          blurOnSubmit
          style={{...styles.text, ...styles.input}}
          onBlur={disableInput}
        />
      )}
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    display: "flex",

    borderWidth: 1,
    borderColor: colors.dark,
  },
  text: {
    color: colors.text,
    fontSize: 16,
    marginHorizontal: 2,
    height: 20,
    textAlign: "center",
  },
  input: {
    transform: [
      {translateY: 1}
    ]
  }
});
