import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Score = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    fontWeight: '600'

  },
  container: {
    paddingVertical: 16,
    justifyContent:'center',
    alignItems: 'center'
  }

});
