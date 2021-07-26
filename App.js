import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { MenuNotes } from "./src/Menu/MenuNotes";
import { colors } from "./src/styleConfig";
import { Note } from "./src/screens/note";
import { User } from "./src/screens/user";
import { Sandbox } from "./src/Sandbox";

const profileScreenId = "profileScreenId";

const user = {
  login: "gelugu",
  email: "gelugu@mail.com",
};

const notes = [
  {
    id: "drjdgoisr",
    name: "Note 1",
    paragraphs: [
      {
        id: "durihngdrigukj",
        phrases: [
          {
            id: "dlrmgdrg",
            custoValue: "",
            values: ["This is a sample text", "This is a simple text"],
            preferIndex: 0,
          },
          {
            id: "ewfd rnlg;lf",
            customValue: "",
            values: [
              "to show app purpose",
              "to show application purpose",
              "to snow app purpose",
            ],
            preferIndex: 2,
          },
          {
            id: "ghju876trfg",
            customValue: "",
            values: [
              "to show app purpose",
              "to show application purpose",
              "to snow app purpose",
            ],
            preferIndex: 2,
          },
        ],
      },
      {
        id: "kjnrg",
        phrases: [
          {
            id: "krjnlgdrgdrg",
            customValue: "",
            values: ["I luck U", "I love U"],
            preferIndex: 1,
          },
        ],
      },
    ],
  },
  {
    id: "hbh87thjihugyt",
    name: "Note 2",
    paragraphs: [
      {
        id: "j7gyubjo87gyu",
        phrases: [
          {
            id: "fde3sxcdfvgbhnjm",
            custoValue: "",
            values: ["This is a sample text", "This is a simple text"],
            preferIndex: 1,
          },
          {
            id: "iu98hiubnhugftdr",
            customValue: "",
            values: ["to show app purpose", "to show application purpose"],
            preferIndex: 0,
          },
        ],
      },
    ],
  },
];

const DEBUG = false;

export default function App() {
  const [screenId, setScreenId] = useState(notes[0].id);
  const [currentNoteId, setCurrentNoteId] = useState(notes[0].id);

  const onProfile = useCallback(() => {
    if (screenId === profileScreenId) setScreenId(currentNoteId);
    else setScreenId(profileScreenId);
  }, [screenId, currentNoteId, profileScreenId]);

  if (DEBUG) return <Sandbox />

  return (
    <View style={styles.container}>
      {screenId === profileScreenId ? (
        <User user={user} />
      ) : (
        <Note
          data={notes.find((note) => {
            return note.id === currentNoteId;
          })}
        />
      )}
      <MenuNotes data={notes} onProfile={onProfile} onNote={setCurrentNoteId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
