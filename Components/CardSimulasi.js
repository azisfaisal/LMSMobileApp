import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Config";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const CardSimulasi = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.cardList}
        onPress={() => {
          // navigation.navigate("ListVideo");
          if (item.judul === "Proyeksi Orthogonal Amerika") {
            navigation.navigate("ListVideo");
          } else {
            navigation.navigate("ListVideoEropa");
          }
        }}
      >
        <View style={styles.cardFile}>
          <AntDesign name="folder1" size={30} color={COLORS.secondary} />
        </View>
        <Text style={styles.textStyle}>{item.judul}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  cardFile: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#E7E7E7",
  },
  cardList: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#c8c8c8",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "bold",
    color: COLORS.primary,
    fontSize: 15,
  },
});
