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
    width: 350,
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
