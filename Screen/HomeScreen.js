import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Header } from "../Components/Header";
import { BarChart } from "react-native-chart-kit";

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

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfigs = {
    backgroundColor: "#000000",
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <ScrollView>
      <Header />
      {/* <Text>Welcome, {username}!</Text> */}
      <View style={styles.container}>
        <View style={styles.dashboard}>
          <View>
            <View style={styles.cardSmall}>
              <Text>RPP</Text>
            </View>
            <View style={styles.cardSmall}>
              <Text>SIlabus</Text>
            </View>
          </View>
          <View style={styles.cardLarge}>
            <Text>Gambar Teknik</Text>
          </View>
        </View>
        {/* <BarChart
          data={data}
          width={220}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
          verticalLabelRotation={30}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardSmall: {
    backgroundColor: "grey",
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
  },
  dashboard: {
    flexDirection: "row",
    gap: 10,
  },
  cardLarge: {
    backgroundColor: "grey",
    width: 200,
    height: 250,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
