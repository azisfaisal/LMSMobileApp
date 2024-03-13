import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../Config";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { Header } from "../Components/Header";

export const ResultScreen = () => {
  const [score, setScore] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      const storedScore = await AsyncStorage.getItem("score");
      if (storedScore) {
        setScore(storedScore);
      }
    };

    fetchData();
  }, []);

  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Score : ${score}
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

  const [selectedPrinter, setSelectedPrinter] = useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  const handleSaveHistory = async () => {
    try {
      const storedResult = await AsyncStorage.getItem("result");
      const resultObject = JSON.parse(storedResult);
      const tmp = resultObject[resultObject.length - 1];
      tmp["status"] = "ready";
      await AsyncStorage.setItem("result", JSON.stringify(resultObject));
      console.log(resultObject);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image
          source={require("../assets/pdf.png")}
          style={styles.imgaeStyle}
        />
        <View style={styles.actionStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              print();
            }}
          >
            <FontAwesome5 name="eye" size={30} color="black" />
            <Text style={styles.textStyle}>Lihat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              printToFile();
            }}
          >
            <FontAwesome5 name="cloud-download-alt" size={30} color="black" />
            <Text style={styles.textStyle}>Download</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <AntDesign name="delete" size={30} color="black" />
            <Text style={styles.textStyle}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              handleSaveHistory();
              navigation.navigate("Home");
            }}
          >
            <AntDesign name="save" size={30} color="black" />
            <Text style={styles.textStyle}>Simpan Ke History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    padding: 10,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginTop: 10,
    fontSize: 16,
  },
  imgaeStyle: {
    width: 150,
    height: 150,
  },
  actionStyle: {
    flexDirection: "row",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
