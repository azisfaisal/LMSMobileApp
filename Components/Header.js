import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/favicon.png")}
        style={styles.ImageStyle}
      />
      <Text style={styles.textHeader}>
        Aplikasi Multimedia Animasi Gambar Teknik
      </Text>
      <FontAwesome name="user-circle-o" size={30} color="white" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#6464bb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  ImageStyle: {
    width: 45,
    height: 45,
  },
  textHeader: {
    color: "white",
  },
});
