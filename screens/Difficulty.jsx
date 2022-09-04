import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Title from "../components/title";

export default function Difficulty({ navigation, route }) {
  const category = route.params.category;

  function handleDifficulty(param) {
    navigation.navigate("Quiz", {
      difficulty: param,
      category: category,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title word={"Difficulty"} />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={() => handleDifficulty("easy")}>
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={() => handleDifficulty("medium")}>
          <Text style={styles.buttonText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDifficulty("hard")}>
          <Text style={styles.buttonText}>Hard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#8338EC",
  },
  containerButtons: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  button:{
    paddingTop: 20,
   
    marginVertical: 24,
    width: '80%',
    height: 80,
    backgroundColor: '#c19bf5',
    borderRadius: 12,
    alignContent: 'center',
    alignItems: 'center',
 
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900'
  },

  top: {
    marginTop: 40
  }
});
