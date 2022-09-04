import { StyleSheet, StatusBar, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Title from "../components/title";
import triviaNight from "../assets/trivianight.png";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
       <StatusBar
        animated={true}
       backgroundColor='#8338EC'
       style={styles.statusBar}
      />
      <View style={styles.fondo}>
        {/* <Title word={"Quizzmo"} /> */}
        <View style={styles.bannerContainer}>
          <View style={styles.recuadro}>
            <Text style={styles.quizz}>
              Quizz <Text style={styles.time}>Time</Text>
            </Text>
          </View>

          {/* <Image
          source={{
            uri: "https://img.freepik.com/free-vector/father-mother-son-3d-glasses-sitting-chairs-holding-popcorn-buckets-soda-watching-funny-movie-cinema-theatre-vector-illustration-family-leisure-time-entertainment-concept_74855-13067.jpg?w=2000",
          }}
          style={styles.banner}
          resizeMode="contain"
        /> */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Category")}
            style={styles.buttonHome}
          >
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    paddingTop: 40,
    paddingHorizontral: 20,
    backgroundColor: "#8338EC",

  },
  statusBar: {
    color:'white'

  },
  fondo: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#8338EC",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
  },

  buttonHome: {
    width: "80%",
    backgroundColor: "#F68E5F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "900",
    color: "white",
  },
  buttonContainer: {
    felx: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",

    marginBottom: 30,

    bottom: 0,
  },
  recuadro: {
    borderRadius: 20,
    backgroundColor: "#8338ec",
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },
  quizz: {
    color: "white",
    fontWeight: "700",
    fontSize: 80,

  },
  time: {
    color: "#F68E5F",
    fontWeight: "700",
    fontSize: 90
  },
});
