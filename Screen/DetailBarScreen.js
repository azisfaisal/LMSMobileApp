import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { BarChart } from "react-native-gifted-charts";
import { COLORS } from "../Config";
import AsyncStorage from "@react-native-community/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { Validation } from "../Components/Validation";

export const DetailBarScreen = () => {
  const [dataHistory, setDataHistory] = useState([]);
  const isFocused = useIsFocused();
  const [modalValidation, setModalValidation] = useState(false);
  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      try {
        const storedResult = await AsyncStorage.getItem("result");

        if (storedResult) {
          const resultObject = JSON.parse(storedResult);
          // Uncomment the following lines if you want to set the username as well
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
    return data.filter((item) => item.status === "ready");
  };

  const closeValidation = () => {
    setModalValidation(false);
  };

  const printToFile = async () => {
    // Generate dynamic HTML content for the PDF
    const chartData = pickBar();
    console.log("ChartData:", chartData); // Log chartData to check if it's empty or contains data

    // Calculate the maximum value to scale the bars
    const maxValue = Math.max(...chartData.map((item) => item.value));

    // Generate HTML for the vertical bar chart
    const chartBars = chartData
      .map(({ label, value }) => {
        const barHeight = (value / maxValue) * 300; // Scale the height of the bar
        return `
        <div class="bar">
          <div class="bar-value">${value}</div>
          <div class="bar-fill" style="height: ${barHeight}px;"></div>
          <div class="bar-label">${label}</div>
        </div>
      `;
      })
      .join("");

    const dynamicHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Evaluation History</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center
          }
          .chart-container {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 400px;
          }
          .bar {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 10px;
            margin-top: 5px,
          }
          .bar-fill {
            width: 50px;
            background-color: #265073;
            border-radius: 8px
          }
          .bar-label, .bar-value {
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <h2>Statistik Riwayat Ujian Evaluasi</h2>
        <div class="chart-container">
          ${chartBars}
        </div>
      </body>
      </html>
    `;

    // Print the dynamically generated HTML content to PDF
    const { uri } = await Print.printToFileAsync({ html: dynamicHtml });
    console.log("File has been saved to:", uri);

    // Share the generated PDF
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.cardDetail}>
          <View style={styles.containerTitleBarStyle}>
            <Text style={styles.titleBar}>
              Statistik Riwayat Ujian Evaluasi
            </Text>
            <View style={styles.cardAction}>
              <TouchableOpacity
                style={styles.eyeCard}
                onPress={() => {
                  setModalValidation(true);
                  printToFile();
                }}
              >
                <AntDesign name="download" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.barStyle}>
            <View style={styles.wrapEvaluasi}>
              <View style={styles.cardNilaiEvaluasi} />
              <Text style={styles.textEvaluasi}>Nilai Evaluasi</Text>
            </View>
            <BarChart
              barWidth={80}
              height={280}
              noOfSections={5}
              barBorderRadius={4}
              frontColor="lightgray"
              data={pickBar()}
              yAxisThickness={1}
              xAxisThickness={0}
            />
          </View>
        </View>
      </View>
      <Validation
        contain={"Data berhasil diunduh."}
        modalValidation={modalValidation}
        closeValidation={closeValidation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardDetail: {
    backgroundColor: "white",
    width: "90%",
    marginTop: 15,
    elevation: 30,
    padding: 20,
  },
  barStyle: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    borderColor: COLORS.primary,
  },
  cardNilaiEvaluasi: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  textEvaluasi: {
    color: COLORS.primary,
    opacity: 0.5,
  },
  wrapEvaluasi: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  titleBar: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  containerTitleBarStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  eyeCard: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    width: 35,
    alignItems: "center",
  },
  cardAction: {
    flexDirection: "row",
    gap: 10,
    marginRight: 20,
  },
});
