import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Config";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const CardHistory = ({ item, username, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardHistory} onPress={onPress}>
      {/* <View style={styles.wrapContain}> */}
      <View style={styles.content}>
        <View style={styles.pictureStyle}>
          <View style={styles.circleStyle}>
            {/* <MaterialIcons
              name="manage-history"
              size={30}
              color={COLORS.secondary}
            /> */}
            <FontAwesome5 name="history" size={30} color={COLORS.secondary} />
          </View>
        </View>
        <View>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.descriptionStyle}>{item.time}</Text>
          <Text style={styles.nameStyle}>{username}</Text>
        </View>
        <View style={styles.line} />
        <AntDesign name="eye" size={24} color={COLORS.secondary} />
      </View>

      {/* <View>
          <View style={styles.line} />
        </View> */}
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardHistory: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 330,
    marginTop: 10,
  },
  pictureStyle: {
    backgroundColor: COLORS.secondary,
    width: 80,
    height: 80,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  circleStyle: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionStyle: {
    width: 100,
    fontSize: 12,
  },
  nameStyle: {
    width: 100,
    color: COLORS.secondary,
    marginTop: 10,
    fontWeight: "bold",
  },
  titleStyle: {
    width: "90%",
    fontWeight: "bold",
  },
  line: {
    width: 3,
    height: 80,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginVertical: 20,
  },
  wrapContain: {
    flexDirection: "row",
    gap: 40,
  },
});
