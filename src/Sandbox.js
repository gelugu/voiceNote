import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Phrase } from './screens/note/components/Phrase';
import { colors } from './styleConfig';

export const Sandbox = () => {
  return (
    <View style={styles.container}>
    <Text color={colors.dark} style={{position: "absolute", top: 420}}>
      ___________________________
    </Text>
      <Phrase data={{
            id: "ghju876trfg",
            customValue: "",
            values: [
              "to show app purpose",
              "to show application purpose",
              "to snow app purpose",
            ],
            preferIndex: 2,
          }} />
    </View>
  );
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",},

});
