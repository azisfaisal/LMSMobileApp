import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
              <AntDesign
                name="home"
                color={COLORS.primary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 40,
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
              <AntDesign
                name="home"
                color={COLORS.tertiary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />
              <Text
                style={{
                  color: COLORS.tertiary,
                  position: "absolute",
                  bottom: 40,
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
              <AntDesign
                name="book"
                color={COLORS.primary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 40,
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
              <AntDesign
                name="book"
                color={COLORS.tertiary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />
              <Text
                style={{
                  color: COLORS.tertiary,
                  position: "absolute",
                  bottom: 40,
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
              <AntDesign
                name="hourglass"
                color={COLORS.primary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 40,
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
              <AntDesign
                name="hourglass"
                color={COLORS.tertiary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />
              <Text
                style={{
                  color: COLORS.tertiary,
                  position: "absolute",
                  bottom: 40,
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
              <MaterialCommunityIcons
                name="account-question"
                color={COLORS.primary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 40,
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
              <MaterialCommunityIcons
                name="account-question"
                color={COLORS.tertiary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />
              <Text
                style={{
                  color: COLORS.tertiary,
                  position: "absolute",
                  bottom: 40,
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
              <MaterialCommunityIcons
                name="lightbulb-on-outline"
                color={COLORS.primary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />

              <Text
                style={{
                  color: COLORS.primary,
                  position: "absolute",
                  bottom: 40,
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
              <MaterialCommunityIcons
                name="lightbulb-on-outline"
                color={COLORS.tertiary}
                size={24}
                style={{ position: "absolute", top: 5 }}
              />
              <Text
                style={{
                  color: COLORS.tertiary,
                  position: "absolute",
                  bottom: 40,
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
