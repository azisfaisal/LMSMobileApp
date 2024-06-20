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
import { FontAwesome5, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Header } from "../Components/Header";
import { Validation } from "../Components/Validation";
import { CardWarning } from "../Components/CardWarning";

export const ResultScreen = () => {
  const [score, setScore] = useState();
  const [title, setTitle] = useState();
  const [time, setTime] = useState();
  const [username, setUsername] = useState();
  const [NISN, setNISN] = useState("");
  const [grade, setGrade] = useState("");
  const [modalValidation, setModalValidation] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [type, setType] = useState("");
  const [save, setSave] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      const storedScore = await AsyncStorage.getItem("score");
      const storedTitle = await AsyncStorage.getItem("questionTitle");
      const storedTime = await AsyncStorage.getItem("questionTime");
      const storedUsername = await AsyncStorage.getItem("username");
      const storedNISN = await AsyncStorage.getItem("NISN");
      const storedGrade = await AsyncStorage.getItem("grade");
      if (storedScore) {
        setScore(storedScore);
        setTitle(storedTitle);
        setTime(storedTime);
        setUsername(storedUsername);
        setNISN(storedNISN);
        setGrade(storedGrade);
      }
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
          <h1>${title}</h1>
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
                  <span>${time}</span>
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
                                    score >= 70 ? "Kompeten" : "Tidak Kompeten"
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
                                  <span style="font-size: 60px;">${score}</span>
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
    closeValidation();
    closeWarning();
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
      // navigation.navigate("Home");
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  const closeValidation = () => {
    setModalValidation(false);
  };

  const closeWarning = () => {
    setModalWarning(false);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.cardDetail}>
        <View style={styles.HeaderStyle}>
          <Text style={styles.textHeader}>{title}</Text>
        </View>
        <View>
          <View style={styles.cardLeft}>
            <FontAwesome
              name="user-circle-o"
              size={100}
              color={COLORS.secondary}
            />
            <View style={styles.wrapText}>
              <View>
                <Text style={styles.textName}>{username}</Text>
                <Text style={styles.textNISN}>
                  {NISN} | {grade}
                </Text>
                <View style={styles.line} />
                <Text style={styles.textTime}>{time}</Text>
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
                    {score <= 59
                      ? "Tidak Kompeten"
                      : score <= 74
                      ? "Cukup Kompeten"
                      : score <= 89
                      ? "Kompeten"
                      : "Sangat Kompeten"}
                  </Text>
                </View>

                <View style={styles.wrapDescriptionText}>
                  <Text style={styles.descriptionText}>Nilai</Text>
                  <Text style={{ color: COLORS.primary }}>:</Text>
                  <Text style={styles.scoreText}>{score}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        {/* <Image
          source={require("../assets/pdf.png")}
          style={styles.imgaeStyle}
        /> */}
        <View style={styles.actionStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setType("save");
              setSave(true);
              setModalWarning(true);
              // handleSaveHistory();
              // navigation.navigate("Home");
            }}
          >
            <View style={styles.borderStyle}>
              <AntDesign name="save" size={24} color={COLORS.secondary} />
            </View>
            <Text style={styles.textStyle}>Simpan Ke Riwayat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setType("delete");
              // setModalValidation(true);
              setModalWarning(true);
              // navigation.navigate("Home");
            }}
          >
            <View style={styles.borderStyle}>
              <AntDesign name="delete" size={24} color={COLORS.secondary} />
            </View>
            <Text style={styles.textStyle}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              printToFile();
              closeWarning();
            }}
          >
            <View style={styles.borderStyle}>
              <FontAwesome5
                name="cloud-download-alt"
                size={24}
                color={COLORS.secondary}
              />
            </View>
            <Text style={styles.textStyle}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Validation
        contain={
          type === "delete"
            ? "Riwayat ujian evaluasi berhasil dihapus."
            : type === "save"
            ? "Hasil Ujian Evaluasi berhasil disimpan ke riwayat."
            : "Hasil Ujian Evaluasi berhasil di unduh."
        }
        modalValidation={modalValidation}
        closeValidation={closeValidation}
      />

      <CardWarning
        contain={
          type === "delete"
            ? "Apakah anda yakin akan menghapus data riwayat ujian evaluasi tersebut?"
            : "Apakah anda ingin mengyimpan “Hasil Ujian Evaluasi” ke “Riwayat” sebelum keluar?"
        }
        containTrue={type === "delete" ? "Hapus" : "Ya"}
        containFalse={type === "delete" ? "Tutup" : "Tidak"}
        setModalValidation={setModalValidation}
        modalWarning={modalWarning}
        closeWarning={closeWarning}
        save={save}
        setSave={setSave}
        handleSaveHistory={handleSaveHistory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.primary,
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
  },
  cardDetail: {
    backgroundColor: "white",
    width: "75%",
    height: "73%",
    marginTop: 10,
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
  borderStyle: {
    borderWidth: 3,
    borderColor: COLORS.secondary,
    borderRadius: 8,
    padding: 5,
  },
});
