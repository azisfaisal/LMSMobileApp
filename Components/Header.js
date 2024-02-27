import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../Config";
import { useNavigation } from "@react-navigation/native";

export const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.ImageStyle} />
      <Text style={styles.textHeader}>
        Aplikasi Multimedia Animasi Gambar Teknik (AMMAGT)
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <FontAwesome name="user-circle-o" size={30} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "white",
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
    color: COLORS.primary,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
