import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../Config";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export const MyTabs = () => {
  const [tabItemIndex, setTabItemIndex] = useState(1);
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-around",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <TouchableOpacity
          key={1}
          onPress={() => {
            setTabItemIndex(1);
            navigation.navigate("Home", { unread: false });
            // props.navigation.navigate('Home', { unread: false })
          }}
        >
          {tabItemIndex === 1 ? (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 3,
                  backgroundColor: COLORS.primary,
                  position: "absolute",
                  top: 0,
                  //shadow ios
                  shadowOffset: { width: -2, height: 5 },
                  shadowColor: COLORS.primary,
                  shadowOpacity: 0.4,
                  //shadow android
                  elevation: 2,
                }}
              />
              <Image
                source={require("../assets/BERANDA.png")}
                style={styles.ImageStyle}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Home
              </Text>
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <Image
                source={require("../assets/BERANDA.png")}
                style={styles.ImageStyle}
              />
              <Text
                style={{
                  color: COLORS.grey,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Home
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          key={2}
          onPress={() => {
            setTabItemIndex(2);
            navigation.navigate("Evaluasi", { unread: false });
            // props.navigation.navigate('Home', { unread: false })
          }}
        >
          {tabItemIndex === 2 ? (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 3,
                  backgroundColor: COLORS.primary,
                  position: "absolute",
                  top: 0,
                  //shadow ios
                  shadowOffset: { width: -2, height: 5 },
                  shadowColor: COLORS.primary,
                  shadowOpacity: 0.4,
                  //shadow android
                  elevation: 2,
                }}
              />
              <Image
                source={require("../assets/EVALUASI.png")}
                style={styles.ImageStyle}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Evaluasi
              </Text>
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <Image
                source={require("../assets/EVALUASI.png")}
                style={styles.ImageStyle}
              />
              <Text
                style={{
                  color: COLORS.grey,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Evaluasi
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          key={3}
          onPress={() => {
            setTabItemIndex(3);
            navigation.navigate("Simulasi", { unread: false });
            // props.navigation.navigate('Home', { unread: false })
          }}
        >
          {tabItemIndex === 3 ? (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 3,
                  backgroundColor: COLORS.primary,
                  position: "absolute",
                  top: 0,
                  //shadow ios
                  shadowOffset: { width: -2, height: 5 },
                  shadowColor: COLORS.primary,
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
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Simulasi
              </Text>
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
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
                Simulasi
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          key={4}
          onPress={() => {
            setTabItemIndex(4);
            navigation.navigate("Tentang", { unread: false });
            // props.navigation.navigate('Home', { unread: false })
          }}
        >
          {tabItemIndex === 4 ? (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 3,
                  backgroundColor: COLORS.primary,
                  position: "absolute",
                  top: 0,
                  //shadow ios
                  shadowOffset: { width: -2, height: 5 },
                  shadowColor: COLORS.primary,
                  shadowOpacity: 0.4,
                  //shadow android
                  elevation: 2,
                }}
              />
              <Image
                source={require("../assets/TENTANG.png")}
                style={styles.ImageStyle}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Tentang
              </Text>
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <Image
                source={require("../assets/TENTANG.png")}
                style={styles.ImageStyle}
              />
              <Text
                style={{
                  color: COLORS.grey,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Tentang
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          key={5}
          onPress={() => {
            setTabItemIndex(5);
            navigation.navigate("Deskripsi", { unread: false });
            // props.navigation.navigate('Home', { unread: false })
          }}
        >
          {tabItemIndex === 5 ? (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 3,
                  backgroundColor: COLORS.primary,
                  position: "absolute",
                  top: 0,
                  //shadow ios
                  shadowOffset: { width: -2, height: 5 },
                  shadowColor: COLORS.primary,
                  shadowOpacity: 0.4,
                  //shadow android
                  elevation: 2,
                }}
              />
              <Image
                source={require("../assets/DESKRIPSI.png")}
                style={styles.ImageStyle}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Deskripsi
              </Text>
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                height: 95,
                justifyContent: "center",
                width: 80,
              }}
            >
              <Image
                source={require("../assets/DESKRIPSI.png")}
                style={styles.ImageStyle}
              />
              <Text
                style={{
                  color: COLORS.grey,
                  position: "absolute",
                  bottom: 35,
                }}
              >
                Deskripsi
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
