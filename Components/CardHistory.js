import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../Config";

export const CardHistory = ({ item }) => {
  return (
    <View style={styles.cardHistory}>
      <View style={styles.content}>
        <View style={styles.pictureStyle} />
        <View>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.descriptionStyle}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHistory: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    width: 330,
  },
  pictureStyle: {
    backgroundColor: COLORS.tertiary,
    width: 80,
    height: 80,
    borderRadius: 8,
    marginTop: 10,
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
