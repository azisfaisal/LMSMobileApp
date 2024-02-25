import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { CardQuestion } from "../Components/CardQuestion";
import { useNavigation } from "@react-navigation/native";

export const QuestionScreen = () => {
  const navigation = useNavigation();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isSimulationComplete, setIsSimulationComplete] = useState(false);

  const questionData = [
    {
      question: "Apa warna langit?",
      answer: ["Merah", "Hijau", "Biru"],
      correct: 2,
    },
    {
      question: "Apa warna gunung?",
      answer: ["Merah", "Hijau", "Biru"],
      correct: 1,
    },
    {
      question: "Apa warna daun?",
      answer: ["Merah", "Hijau", "Biru"],
      correct: 1,
    },
    // Add more questions here
  ];

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
      await AsyncStorage.setItem("score", score.toString());
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  const handleJawabanPress = (jawabanIndex) => {
    const question = questionData[questionIndex];
    const isCorrect = jawabanIndex === question.correct;

    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));

    if (questionIndex < questionData.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsSimulationComplete(true);
    }
  };

  console.log("Score:", score);
  console.log("Question Index:", questionIndex);

  return (
    <View>
      <CardQuestion
        question={questionData[questionIndex].question}
        answer={questionData[questionIndex].answer}
        onPress={handleJawabanPress}
      />
    </View>
  );
};
