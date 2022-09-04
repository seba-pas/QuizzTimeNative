import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Title from "../components/title";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Category({ navigation }) {
  function handlePress(num) {
    navigation.navigate("Difficulty", {
      category: num,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title word={"Categories"} />
      </View>
      <View style={styles.containerCat}>
        <TouchableOpacity
          style={styles.buttonCat}
          onPress={() => handlePress("11")}
        >
          {/*category=11*/}

          <MaterialCommunityIcons name="movie-open" size={80} color="white" />
          <Text style={styles.buttonText}>Films</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCat}
          onPress={() => handlePress("12")}
        >
          <Feather name="music" size={80} color="white" />

          <Text style={styles.buttonText}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCat}
          onPress={() => handlePress("9")}
        >
          {/* category=9 */}
          <Feather name="book" size={80} color="white" />

          <Text style={styles.buttonText}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCat}
          onPress={() => handlePress("12")}
        >
          {/* category=17 */}
          <MaterialIcons name="science" size={80} color="white" />
          <Text style={styles.buttonText}>Science</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 60,
    backgroundColor: "#8338EC",
  },
  //violeta "#8338EC"
  // amarillo FFBE0B
  containerCat: {
    flexDirection: "row",
    marginTop: "30%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",

    marginHorizontal: 15,
  },
  buttonCat: {
    height: 150,
    width: 150,
    backgroundColor: "#F68E5F",
    marginHorizontal: 5,
    marginVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F68E5F",
    borderWidth: 4,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 30,
    marginTop: 10,
    color: "white",
    alignContent: "center",
  },
  top: {
    marginTop: 30,
  },
});
