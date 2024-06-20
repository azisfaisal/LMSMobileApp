import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Config";
import { Octicons, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const CardListVideo = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(
          "VideoPlayer",
          (data = {
            index: index,
            tipe: item.tipe,
          })
        );
      }}
    >
      <View style={styles.cardIcon}>
        <Octicons name="video" size={50} color="white" />
      </View>
      <View style={{}}>
        <View style={styles.cardJudul}>
          <Text style={styles.textJudul}>{item.judulVideo}</Text>
          <FontAwesome6 name="play-circle" size={14} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
  },
  cardIcon: {
    borderWidth: 1,
    padding: 20,
    borderColor: "white",
  },
  textJudul: {
    color: "white",
  },
  cardJudul: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.tertiary,
    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    gap: 10,
  },
});
