import React, { useCallback } from "react";
import { SpeedDial } from "react-native-elements";
import { colors } from "../styleConfig";

export const MenuProfile = () => {
  const toProfile = useCallback(() => {
    console.log("Go to profile")
  }, []);

  return (
    <SpeedDial
      placement="left"
      color={colors.background}
      icon={{
        name: "paw-outline",
        type: "ionicon",
        color: colors.text,
      }}
      onOpen={toProfile}
    />
  );
};
