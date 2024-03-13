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
import { BarChart } from "react-native-gifted-charts";
import { CardHistory } from "../Components/CardHistory";
import { COLORS } from "../Config";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import ListEmpty from "../Components/ListEmpty";

const HomeScreen = () => {
  const [username, setUsername] = useState("");
  const [dataHistory, setDataHistory] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      try {
        // const storedUsername = await AsyncStorage.getItem("username");
        const storedResult = await AsyncStorage.getItem("result");

        if (storedResult) {
          const resultObject = JSON.parse(storedResult);
          // Uncomment the following lines if you want to set the username as well
          // setUsername(storedUsername);
          // ...

          // console.log(resultObject);

          setDataHistory(resultObject);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // }
    };

    fetchData();
  }, [isFocused]);

  // const barData = [
  //   { value: 250, label: "M" },
  //   { value: 500, label: "T", frontColor: "#177AD5" },
  //   { value: 745, label: "W", frontColor: "#177AD5" },
  //   { value: 320, label: "T" },
  //   { value: 600, label: "F", frontColor: "#177AD5" },
  //   { value: 256, label: "S" },
  //   { value: 300, label: "S" },
  // ];

  const pickBar = () => {
    let data = [];
    dataHistory.map((item) => {
      data.push({
        value: item.score,
        label: item.title,
        status: item.status,
        frontColor: COLORS.primary,
      });
    });
    return data.filter((item) => item.status === "ready").slice(-3);
  };

  const lastThree = dataHistory
    .filter((item) => item.status === "ready")
    .slice(-3);

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
          <View style={styles.historyStyle}>
            <FlatList
              data={lastThree}
              renderItem={({ item }) => <CardHistory item={item} />}
              scrollEnabled={false}
              ListEmptyComponent={() => <ListEmpty />}
              // columnWrapperStyle={{ justifyContent: "space-evenly" }}
              // numColumns={2}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <BarChart
          barWidth={80}
          height={600}
          noOfSections={10}
          barBorderRadius={4}
          frontColor="lightgray"
          data={pickBar()}
          yAxisThickness={1}
          xAxisThickness={0}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardSmall: {
    backgroundColor: "#C7C8CC",
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
    backgroundColor: "#C7C8CC",
    width: 220,
    height: 250,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLarge: {
    width: 200,
    height: 230,
    borderRadius: 8,
  },
  imageSmall: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  historyStyle: {
    height: 340,
    backgroundColor: "#C7C8CC",
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default HomeScreen;
