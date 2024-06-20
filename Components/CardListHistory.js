import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Config";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const CardListHistory = ({
  item,
  username,
  onPress,
  download,
  deleteObject,
  setModalWarning,
  setHistory,
}) => {
  return (
    <View>
      <View style={styles.cardHistory}>
        {/* <View style={styles.wrapContain}> */}
        <View style={styles.content}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View style={styles.pictureStyle}>
              <View style={styles.circleStyle}>
                {/* <MaterialIcons
              name="manage-history"
              size={30}
              color={COLORS.secondary}
            /> */}
                <FontAwesome5
                  name="history"
                  size={30}
                  color={COLORS.secondary}
                />
              </View>
            </View>
            <View>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <Text style={styles.descriptionStyle}>{item.time}</Text>
              <Text style={styles.nameStyle}>{username}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View style={styles.line} />
            <TouchableOpacity style={styles.cardIcon} onPress={onPress}>
              <AntDesign name="eye" size={24} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardIcon}
              onPress={() => {
                download();
              }}
            >
              <AntDesign name="download" size={24} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardIcon}
              onPress={() => {
                deleteObject();
                setModalWarning(true);
                setHistory(true);
              }}
            >
              <AntDesign name="delete" size={24} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* <View>
          <View style={styles.line} />
        </View> */}
        {/* </View> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardHistory: {
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 10,
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
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
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
    gap: 50,
  },
  cardIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});
