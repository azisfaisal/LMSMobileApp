import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export const ResultScreen = () => {
  const [score, setScore] = useState();
  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      const storedScore = await AsyncStorage.getItem("score");
      if (storedScore) {
        setScore(storedScore);
        console.log(storedScore);
      }
    };

    fetchData();
  }, []);
  return (
    <View>
      <Text>score: {score}</Text>
    </View>
  );
};
