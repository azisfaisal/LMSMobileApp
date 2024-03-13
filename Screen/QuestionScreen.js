import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { CardQuestion } from "../Components/CardQuestion";
import { useNavigation } from "@react-navigation/native";

export const QuestionScreen = () => {
  const navigation = useNavigation();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [isSimulationComplete, setIsSimulationComplete] = useState(false);

  // const questionData = [
  //   {
  //     question: "Apa warna langit?",
  //     answer: ["Merah", "Hijau", "Biru"],
  //     correct: 2,
  //   },
  //   {
  //     question: "Apa warna gunung?",
  //     answer: ["Merah", "Hijau", "Biru"],
  //     correct: 1,
  //   },
  //   {
  //     question: "Apa warna daun?",
  //     answer: ["Merah", "Hijau", "Biru"],
  //     correct: 1,
  //   },
  //   // Add more questions here
  // ];
  const dataSoal = {
    judulSoal: "Soal Pembelajaran contoh 1",
    questionData: [
      {
        question: "Apa warna aspal?",
        image: require("../assets/icon.png"),
        answer: ["Merah", "Hitam", "Biru", "Ungu"],
        correct: 1,
      },
      {
        question: "Apa warna warna ban?",
        image: "",
        answer: ["Hitam", "Hijau", "Biru", "Ungu"],
        correct: 0,
      },
      {
        question: "Apa warna daun?",
        image: "",
        answer: ["Merah", "Hijau", "Biru", "Ungu"],
        correct: 1,
      },
      // Add more questions here
    ],
  };

  useEffect(() => {
    if (isSimulationComplete) {
      Alert.alert(
        "Simulasi Selesai!",
        `Anda telah berhasil menyelsaikan simulasi`,
        [
          {
            text: "OK",
            onPress: async () => {
              await saveScore();
              navigation.navigate("Hasil");
            },
          },
        ],
        { cancelable: false }
      );
    }
  }, [isSimulationComplete, navigation]);

  const saveScore = async () => {
    try {
      const storedResult = await AsyncStorage.getItem("result");
      const result = {
        score: score,
        title: dataSoal.judulSoal,
        status: "waiting",
      };
      if (storedResult !== undefined && storedResult !== null) {
        const arrResult = [...JSON.parse(storedResult)];
        arrResult.push(result);
        await AsyncStorage.setItem("result", JSON.stringify(arrResult));
      } else {
        await AsyncStorage.setItem("result", JSON.stringify([result]));
      }
      await AsyncStorage.setItem("score", score.toString());
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  const handleJawabanPress = (indexSoal, item) => {
    console.log(indexSoal);
    console.log(item);
    const question = dataSoal.questionData[questionIndex];
    const isCorrect =
      dataSoal.questionData[indexSoal].answer.indexOf(item) ===
      dataSoal.questionData[indexSoal].correct;

    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));

    if (questionIndex < dataSoal.questionData.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setIndex(index + 1);
    } else {
      setIsSimulationComplete(true);
    }
  };

  return (
    <View>
      <CardQuestion
        index={index}
        question={dataSoal.questionData[questionIndex].question}
        image={dataSoal.questionData[questionIndex].image}
        answer={dataSoal.questionData[questionIndex].answer}
        onPress={handleJawabanPress}
      />
    </View>
  );
};
