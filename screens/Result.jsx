import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../components/title";
import { ImageBackground } from "react-native";
import IMG from "../assets/fondo.png";
import WINNER from "../assets/winner.png";
import BEST from "../assets/best.png";
import GOODJOB from "../assets/Goodjob.png";
import OHNO from "../assets/ohno.png";

export default function Result({ navigation, route }) {
  const params = route.params;
  console.log(params);
  return (
    <View style={styles.container}>
      {params.score == 100 ? (
        <View style={styles.resultCont} imageStyle={{ borderRadius: 6 }}>
          <Title style={styles.top} word={"Perfect"} />
          <ImageBackground style={styles.fondo} source={IMG}>
            <View style={styles.imgContainer}>
              <Image style={styles.img} source={BEST} />
            </View>
          </ImageBackground>
          <Text style={styles.score}>Your Score is: {params.score}%</Text>
        </View>
      ) : params.score > 80 ? (
        <View style={styles.resultCont} imageStyle={{ borderRadius: 6 }}>
          <Title style={styles.top} word={"Excellent"} />
          <ImageBackground style={styles.fondo} source={IMG}>
            <View style={styles.imgContainer}>
              <Image style={styles.img} source={WINNER} />
            </View>
          </ImageBackground>
          <Text style={styles.score}>Your Score is: {params.score}%</Text>
        </View>
      ) : params.score > 60 ? (
        <View style={styles.resultCont} imageStyle={{ borderRadius: 6 }}>
          <Title style={styles.top} word={"Good Job"} />
          <ImageBackground style={styles.fondo} source={IMG}>
            <View style={styles.imgContainer}>
              <Image style={styles.img} source={GOODJOB} />
            </View>
          </ImageBackground>
          <Text style={styles.score}>Your Score is: {params.score}%</Text>
        </View>
      ) : params.score === 0 ? (
        <View style={styles.resultCont} imageStyle={{ borderRadius: 6 }}>
          <Title style={styles.top} word={"Oh No!"} />
          <ImageBackground style={styles.fondo} source={IMG}>
            <View style={styles.imgContainer}>
              <Image style={styles.img} source={OHNO} />
            </View>
            <Text style={styles.score}>Your Score is: {params.score}%</Text>
          </ImageBackground>
        </View>
      ) : (
        <View style={styles.resultCont} imageStyle={{ borderRadius: 6 }}>
          <Title style={styles.top} word={"Not so good"} />
          <ImageBackground style={styles.fondo} source={IMG}>
            <View style={styles.imgContainer}>
              <Image style={styles.img} source={OHNO} />
            </View>
            <Text style={styles.score}>Your Score is: {params.score}%</Text>
          </ImageBackground>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.buttonHome}
        >
          <Text style={styles.buttonText}>Try again</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.buttonHome}
        >
          <Text style={styles.buttonText}>My Socials</Text>
        </TouchableOpacity> */}
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
    marginTop: 40
  },
  top: {
    position: "absolute",
    top: 0,
    marginTop: 10
  },
  fondo: {
    height: 400,
    width: 300,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    overflow: "hidden",
    marginTop: "20%",
  },
  imgContainer: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  resultCont: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: 250,
    backgroundColor: "transparent",
  },

  buttonHome: {
    width: "80%",
    backgroundColor: "#8338EC",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",

    height: "100%",

    marginBottom: 30,

    bottom: 0,
  },
  score: {
    fontSize: 30,
    paddinTop: 40,
    color: "white",
  },
});
