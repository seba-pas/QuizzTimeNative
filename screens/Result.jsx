import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Title from '../components/title'

export default function Result({ navigation, route }) {
  const params = route.params;
  console.log(params);
  return (
    <View style={styles.container}>
      <Title word={'Result'} />
      <View>
        <Text style={styles.score}>Your Score is: {params.score}%</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/father-mother-son-3d-glasses-sitting-chairs-holding-popcorn-buckets-soda-watching-funny-movie-cinema-theatre-vector-illustration-family-leisure-time-entertainment-concept_74855-13067.jpg?w=2000",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonHome}
        >
          <Text style={styles.buttonText} >Home</Text>
        </TouchableOpacity>
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
    backgroundColor: "#586ba4",
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
    felx: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: '100%',
    
    marginBottom: 30,

    bottom: 0,
  },
  score: {
    fontSize: 30,
    paddinTop: 40
  }
});