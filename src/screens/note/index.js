import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";

import { EmptyListPlaceholder } from "./components/EmptyListPlaceholder";
import { NoteHeader } from "./components/NoteHeader";
import { Paragraph } from "./components/Paragraph";

import { colors, deviceStatusBarHeight, deviceWidth } from "../../styleConfig";

export const Note = ({ data }) => {
  const {paragraphs, name} = data;

  const paragraphsList = paragraphs ? (
    paragraphs.map((paragraph) => {
      return <Paragraph key={paragraph.id} data={paragraph} />;
    })
  ) : (
    <EmptyListPlaceholder />
  );

  return (
    <View style={styles.container}>
      <NoteHeader text={name} />
      <Divider style={styles.divider} color={colors.secondary} />
      {paragraphsList}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    paddingHorizontal: 10,
    marginTop: deviceStatusBarHeight,
  },
  divider: {
    marginBottom: 10,
  },
});
