import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Header } from "../Components/Header";
// import { BarChart } from "react-native-chart-kit";
import { BarChart } from "react-native-gifted-charts";
import { CardHistory } from "../Components/CardHistory";
import { COLORS } from "../Config";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };

    fetchData();
  }, []);

  const barData = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#177AD5" },
    { value: 745, label: "W", frontColor: "#177AD5" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#177AD5" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];

  const dataHistory = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Histori 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Histori 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Histori 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const navigation = useNavigation();
  return (
    <ScrollView>
      <Header />
      {/* <Text>Welcome, {username}!</Text> */}
      <View style={styles.container}>
        <View>
          <View style={styles.dashboard}>
            <View>
              <TouchableOpacity
                style={styles.cardSmall}
                onPress={() => {
                  navigation.navigate("Silabus");
                }}
              >
                <Image
                  source={require("../assets/silabus.jpg")}
                  style={styles.imageSmall}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardSmall}
                onPress={() => {
                  navigation.navigate("Rpp");
                }}
              >
                <Image
                  source={require("../assets/rpp.jpg")}
                  style={styles.imageSmall}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.cardLarge}
              onPress={() => {
                navigation.navigate(
                  "PdfViewer",
                  require("../assets/MODUL GAMBAR TEKNIK.pdf")
                );
              }}
            >
              <Image
                source={require("../assets/gambarTeknik.jpg")}
                style={styles.imageLarge}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            key={"#"}
            data={dataHistory}
            renderItem={({ item }) => (
              <View key={item.id}>
                <CardHistory item={item} />
              </View>
            )}
            scrollEnabled={false}
            style={{ marginTop: 20 }}
            // columnWrapperStyle={{ justifyContent: "space-evenly" }}
            // numColumns={2}
            keyExtractor={(item) => "#" + item.id}
          />
        </View>
        <BarChart
          barWidth={22}
          height={600}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardSmall: {
    backgroundColor: COLORS.primary,
    width: 120,
    height: 120,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    gap: 60,
    alignItems: "center",
  },
  dashboard: {
    flexDirection: "row",
    gap: 10,
  },
  cardLarge: {
    backgroundColor: COLORS.primary,
    width: 220,
    height: 250,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLarge: {
    width: 210,
    height: 240,
    borderRadius: 8,
  },
  imageSmall: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
});

export default HomeScreen;
