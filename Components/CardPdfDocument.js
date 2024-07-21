import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Config";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "./Loading";

export const CardPdfDocument = ({ item, onPress, isOpened }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  return (
    <View>
      {loading ? <Loading /> : null}
      <TouchableOpacity
        style={styles.cardList}
        onPress={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            onPress();
          }, 2000);
        }}
      >
        <View style={styles.cardFile}>
          <AntDesign name="filetext1" size={30} color={COLORS.secondary} />
        </View>
        <View>
          <Text style={styles.textStyle}>{item.title}</Text>
          {isOpened && <Text style={styles.openedText}>Telah dibuka</Text>}
        </View>
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
  openedText: {
    marginTop: 5,
    color: COLORS.secondary,
    fontSize: 12,
  },
});
