import React from "react";
import { StyleSheet, View } from "react-native";
import { Phrase } from "./Phrase";

export const Paragraph = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.phrases.map((phrase) => {
        return <Phrase key={phrase.id} data={phrase} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 5,
    marginBottom: 10,
  },
});
