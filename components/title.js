import { StyleSheet, Text, View } from "react-native";
import React from "react";


const Title = ({ word }) => {
  //FONT


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{word}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 52,
    fontWeight: "900",
    color: "#F68E5F",
    fontFamily: 'Mogra'
  },
  container: {

    justifyContent: "center",
    alignItems: "center",
  },
});
