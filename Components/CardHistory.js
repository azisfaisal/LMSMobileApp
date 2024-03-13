import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../Config";
import { MaterialIcons } from "@expo/vector-icons";

export const CardHistory = ({ item }) => {
  return (
    <View style={styles.cardHistory}>
      <View style={styles.content}>
        <View style={styles.pictureStyle}>
          <MaterialIcons
            name="manage-history"
            size={50}
            color={COLORS.primary}
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.descriptionStyle}>Score: {item.score}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHistory: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 330,
    padding: 10,
    marginTop: 10,
  },
  pictureStyle: {
    backgroundColor: COLORS.tertiary,
    width: 80,
    height: 80,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionStyle: {
    width: 200,
  },
  titleStyle: {
    fontWeight: "bold",
  },
});
