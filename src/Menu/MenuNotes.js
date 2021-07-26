import React, { useState, useCallback } from "react";
import { StyleSheet } from "react-native";
import { SpeedDial } from "react-native-elements";
import { colors } from "../styleConfig";
import { ListElement } from "./ListElement";

export const MenuNotes = (props) => {
  const { data, onProfile, onNote } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onProfileHandler = useCallback(() => {
    onProfile();
    setIsOpen(false);
  }, [])

  const onNoteHandler = useCallback((id) => {
    onNote(id);
    setIsOpen(false);
  }, [])

  const notesList = data.map(({ name, id }) => {
    return <ListElement name={name} key={id} onPress={onNoteHandler.bind(null, id)} />;
  });

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <SpeedDial
      isOpen={isOpen}
      color={colors.background}
      icon={{
        name: "ellipsis-vertical-outline",
        type: "ionicon",
        color: colors.text,
      }}
      openIcon={{
        name: "close-outline",
        type: "ionicon",
        color: colors.text,
      }}
      onOpen={toggleOpen}
      onClose={toggleOpen}
    >
      {notesList}
      <SpeedDial.Action
        icon={{ name: "paw-outline", type: "ionicon", color: colors.text }}
        color={colors.background}
        title="profile"
        titleStyle={styles.title}
        key="profile"
        onPress={onProfileHandler}
      />
    </SpeedDial>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    backgroundColor: colors.background,
    color: colors.text,
  },
});
