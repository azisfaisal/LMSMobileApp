import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../Config";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ tipe }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapIcon}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.ImageStyle}
        />
        <View style={styles.line} />
        {tipe === "home" ||
        tipe == "evaluasi" ||
        tipe === "listVideo" ||
        tipe === "listVideoEropa" ||
        tipe === "tentang" ||
        tipe === "deskripsi" ? null : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.buttonStyle}
          >
            <Text style={styles.textButton}>Kembali</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text
        style={[
          styles.textHeader,
          {
            marginRight:
              tipe === "home" ||
              tipe == "evaluasi" ||
              tipe === "listVideo" ||
              tipe === "listVideoEropa" ||
              tipe === "tentang" ||
              tipe === "deskripsi"
                ? 0
                : "10%",
          },
        ]}
      >
        Aplikasi Multimedia Animasi Gambar Teknik (AMMAGT)
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <FontAwesome name="user-circle-o" size={30} color={COLORS.secondary} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "95%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginHorizontal: 20,
    elevation: 20,
  },
  ImageStyle: {
    width: 45,
    height: 45,
  },
  textHeader: {
    color: COLORS.secondary,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  line: {
    width: 5,
    height: 40,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginVertical: 20,
  },
  wrapIcon: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    borderRadius: 8,
    padding: 8,
    marginVertical: 10,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
});
