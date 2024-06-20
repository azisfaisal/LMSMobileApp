import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Config";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export const MyTabsSimulation = () => {
  const [tabItemIndex, setTabItemIndex] = useState(1);
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-around",
          borderRadius: 20,
          elevation: 20,
          position: "absolute",
          bottom: 35,
          width: "95%",
          marginHorizontal: 20,
          height: 65,
        }}
      >
        <TouchableOpacity
          key={1}
          onPress={() => {
            setTabItemIndex(1);
            navigation.navigate("ListVideo", { unread: false });
            // props.navigation.navigate('Home', { unread: false })
          }}
        >
          {tabItemIndex === 1 ? (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 250,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: 3,
                  backgroundColor: COLORS.secondary,
                  position: "absolute",
                  top: 0,
                  //shadow ios
                  shadowOffset: { width: -2, height: 5 },
                  shadowColor: COLORS.secondary,
                  shadowOpacity: 0.4,
                  //shadow android
                  elevation: 2,
                }}
              />
              <Image
                source={require("../assets/SIMULASI.png")}
                style={styles.ImageStyle}
              />

              <Text
                style={{
                  color: COLORS.secondary,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Proyeksi Orthogonal Amerika
              </Text>
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 250,
              }}
            >
              <Image
                source={require("../assets/SIMULASI.png")}
                style={styles.ImageStyle}
              />
              <Text
                style={{
                  color: COLORS.grey,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Proyeksi Orthogonal Amerika
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          key={2}
          onPress={() => {
            setTabItemIndex(2);
            navigation.navigate("ListVideoEropa", { unread: false });
            // props.navigation.navigate('Home', { unread: false })
          }}
        >
          {tabItemIndex === 2 ? (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 250,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: 3,
                  backgroundColor: COLORS.secondary,
                  position: "absolute",
                  top: 0,
                  //shadow ios
                  shadowOffset: { width: -2, height: 5 },
                  shadowColor: COLORS.secondary,
                  shadowOpacity: 0.4,
                  //shadow android
                  elevation: 2,
                }}
              />
              <Image
                source={require("../assets/SIMULASI.png")}
                style={styles.ImageStyle}
              />

              <Text
                style={{
                  color: COLORS.secondary,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Proyeksi Orthogonal Eropa
              </Text>
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 250,
              }}
            >
              <Image
                source={require("../assets/SIMULASI.png")}
                style={styles.ImageStyle}
              />
              <Text
                style={{
                  color: COLORS.grey,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Proyeksi Orthogonal Eropa
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    position: "absolute",
    top: 0,
    width: 50,
    height: 50,
  },
});
