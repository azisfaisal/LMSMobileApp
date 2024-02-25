import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Config";

export const EvaluationScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>EvaluationScreen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Pertanyaan");
        }}
      >
        <Text style={styles.textButton}>Mulai Ujian Simulasi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 8,
    width: 300,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
});
