import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Quiz({ navigation, route }) {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { difficulty, category } = route.params;
 

  const getQuiz = async () => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`;
    console.log("url ->", url);
    const res = await fetch(url);
    const json = await res.json();
    const data = await json.results;
    console.log(data);
    setQuestions(data);
    setOptions(generateOptionsAndShuffle(data[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handlePress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);

    return options;
  };

  const handleSelectedOption = (_option) => {
    const handleShowRes = () => navigation.navigate("Result", { score: score });
    if (_option === questions[ques].correct_answer) setScore(score + 10);
    if (ques !== 9) handlePress();
    if (ques === 9) handleShowRes();
  };
  //violeta 

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ActivityIndicator size="large" color="#FFBE0B" />
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q. {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.progressCont}>
              <Text style={styles.progress}>{ques + 1}/10</Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[1])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[2])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[3])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Result", { score: score })}
              >
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
              {ques !== 9 && (
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                  <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
              )}
              {ques == 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("Result", { score: score })
                  }
                >
                  <Text style={styles.buttonText}>SHOW RESULTS</Text>
                </TouchableOpacity>
              )}          
            </View>
          </View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 40,
    paddingHorizontral: 20,
    backgroundColor:  "#8338EC"
  },


  top: {
    marginVertical: 16,
    marginHorizontal: 20,
  },
  options: {
    marginVertical: 20,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: "#586ba4",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 30,
    fontWeight: "600",
    color: 'white'
  },
  option: {
    fontSize: 22,
    paddingLeft: 12,
    color: "white",
    fontWeight: "500",
  },
  optionButton: {
    paddingVertical: 24,
    marginVertical: 12,
    backgroundColor: "#F68E5F",
    marginHorizontal: 20,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});
