import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const EmptyListPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Text>Hint "Tell something or start writing"</Text>
    </View>
  );
}

  const styles = StyleSheet.create({
  container: {},
});
