import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { COLORS } from "../Config";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { Validation } from "../Components/Validation";

export const DetailHistoryScreen = ({ route }) => {
  const item = route.params;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [NISN, setNISN] = useState("");
  const [grade, setGrade] = useState("");
  const [modalValidation, setModalValidation] = useState(false);

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      const storedPassword = await AsyncStorage.getItem("password");
      const storedNISN = await AsyncStorage.getItem("NISN");
      const storedGrade = await AsyncStorage.getItem("grade");
      setUsername(storedUsername);
      setPassword(storedPassword);
      setNISN(storedNISN);
      setGrade(storedGrade);
    };

    fetchData();
  }, []);

  const html = `
  <html>

  <head>
      <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  </head>
  
  <body style="padding: 0; margin: 0;font-family: Arial, sans-serif; font-weight: normal;"">
      <div style=" padding:1rem; background-color: #2D9596; color: #fff; display: flex; align-items: center;
      justify-content: space-between;">
          <h1>${item.selectedItem.title}</h1>
      </div>
      <div style="padding: 2rem;">
          <div
              style="border: 9px solid #2D9596; width: 100px; height: 100px; border-radius: 100%; display: flex; align-items: end; justify-content: center;">
              <i class="fa-solid fa-user" style="font-size: 80px; color: #2D9596;"></i>
          </div>
          <div style="display: flex; padding: 2rem 0; color: #265073;">
              <div
                  style="flex: 1; display: flex; flex-direction: column; align-items: start; justify-content: center; gap: 1.5rem;">
                  <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                      <span style="font-size: 30px; font-weight: bold;">${username}</span>
                      <span>${NISN} | ${grade}</span>
                  </div>
                  <div style="width: 50px; background-color: #2D9596; height: 5px;"></div>
                  <span>${item.selectedItem.time}</span>
              </div>
              <div style="flex: 1; display: flex; align-items: start;">
                  <table style="width: 50%; border-spacing: 0.5em;  color: #265073; font-weight: 600;">
                      <tr>
                          <td>
                              <span style="font-size: 18px;">Mata Pelajaran</span>
                          </td>
                          <td>
                              <div style="display: flex; align-items: center; gap: 1rem;">
                                  <span style="font-size: 18px;">:</span>
                                  <span style="font-size: 18px;">Gambar Teknik</span>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <span style="font-size: 18px;">Keterangan</span>
                          </td>
                          <td>
                              <div style="display: flex; align-items: center; gap: 1rem;">
                                  <span style="font-size: 18px;">:</span>
                                  <span style="font-size: 18px;">${
                                    item.selectedItem.score >= 70
                                      ? "Kompeten"
                                      : "Tidak Kompeten"
                                  }</span>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <span style="font-size: 18px;">Nilai</span>
                          </td>
                          <td>
                              <div style="display: flex; align-items: center; gap: 1rem;">
                                  <span style="font-size: 18px;">:</span>
                                  <span style="font-size: 60px;">${
                                    item.selectedItem.score
                                  }</span>
                              </div>
                          </td>
                      </tr>
                  </table>
              </div>
          </div>
      </div>
  </body>
  
  </html>
  `;

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    closeValidation();
  };

  const closeValidation = () => {
    setModalValidation(false);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={{ marginBottom: "20%", width: "75%" }}>
          <View style={styles.cardDetail}>
            <View style={styles.HeaderStyle}>
              <Text style={styles.textHeader}>{item.selectedItem.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalValidation(true);
                  printToFile();
                }}
              >
                <AntDesign name="download" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.cardLeft}>
                <FontAwesome
                  name="user-circle-o"
                  size={50}
                  color={COLORS.secondary}
                />
                <View style={styles.wrapText}>
                  <View>
                    <Text style={styles.textName}>{username}</Text>
                    <Text style={styles.textNISN}>
                      {NISN} | {grade}
                    </Text>
                    <View style={styles.line} />
                    <Text style={styles.textTime}>
                      {item.selectedItem.time}
                    </Text>
                  </View>
                  <View>
                    <View style={styles.wrapDescriptionText}>
                      <Text style={styles.descriptionText}>Mata Pelajaran</Text>
                      <Text style={{ color: COLORS.primary }}>:</Text>
                      <Text style={styles.descriptionText}>Gambar Teknik</Text>
                    </View>

                    <View style={styles.wrapDescriptionText}>
                      <Text style={styles.descriptionText}>Keterangan</Text>
                      <Text style={{ color: COLORS.primary }}>:</Text>
                      <Text style={styles.descriptionText}>
                        {item.selectedItem.score > 70
                          ? "Kompeten"
                          : "Tidak Kompeten"}
                      </Text>
                    </View>

                    <View style={styles.wrapDescriptionText}>
                      <Text style={styles.descriptionText}>Nilai</Text>
                      <Text style={{ color: COLORS.primary }}>:</Text>
                      <Text style={styles.scoreText}>
                        {item.selectedItem.score}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Validation
          contain={"Data berhasil diunduh."}
          modalValidation={modalValidation}
          closeValidation={closeValidation}
        />
      </View>
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
    marginTop: 15,
    elevation: 30,
  },
  HeaderStyle: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  cardLeft: {
    marginTop: 10,
    marginHorizontal: 40,
  },
  line: {
    width: 50,
    height: 5,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginVertical: 10,
  },
  textName: {
    color: COLORS.primary,
    fontSize: 30,
    fontWeight: "bold",
  },
  textNISN: {
    color: COLORS.tertiary,
  },
  textTime: {
    color: COLORS.primary,
  },
  wrapText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapDescriptionText: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
  descriptionText: {
    width: 120,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  scoreText: {
    fontSize: 30,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
