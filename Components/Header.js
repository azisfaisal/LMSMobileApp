import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../Config";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

export const Header = ({ tipe }) => {
  const navigation = useNavigation();
  const [Avatar, setAvatar] = useState();
  const isFocused = useIsFocused();
  useEffect(() => {
    const fetchData = async () => {
      const storedAvatar = await AsyncStorage.getItem("avatar");
      setAvatar(storedAvatar);
    };
    fetchData();
  }, [Avatar, isFocused]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapIcon}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.ImageStyle}
        />
        <View style={styles.line} />
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
      {Avatar === null || Avatar === undefined ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <FontAwesome
            name="user-circle-o"
            size={30}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image
            source={{ uri: Avatar }}
            style={{ width: 30, height: 30, borderRadius: 20 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "96.5%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 20,
    marginHorizontal: 12,
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
