import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
} from "react-native";
import { colors } from "../../../styleConfig";

export const Phrase = ({ data }) => {
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
  }, []);

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
        <Text style={{...styles.phrase, ...styles.text}}>{value}</Text>
      ) : (
        <TextInput
          value={value}
          onChangeText={setValue}
          blurOnSubmit
          style={styles.text}
          onBlur={disableInput}
        />
      )}
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
  },
  phrase: {
    marginHorizontal: 3
  },
  text: {
    color: colors.text
  }
});
