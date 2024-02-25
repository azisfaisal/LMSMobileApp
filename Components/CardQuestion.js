import React from "react";
import { Button, Text, View } from "react-native";

export const CardQuestion = ({ question, answer, onPress }) => {
  return (
    <View>
      <Text>{question}</Text>
      {answer.map((option, index) => (
        <Button key={index} title={option} onPress={() => onPress(index)} />
      ))}
    </View>
  );
};
