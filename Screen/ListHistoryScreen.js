import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Header } from "../Components/Header";
import AsyncStorage from "@react-native-community/async-storage";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { CardListHistory } from "../Components/CardListHistory";
import ListEmpty from "../Components/ListEmpty";
import { COLORS } from "../Config";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { Validation } from "../Components/Validation";
import { CardWarning } from "../Components/CardWarning";

export const ListHistoryScreen = () => {
  const [username, setUsername] = useState("");
  const [dataHistory, setDataHistory] = useState([]);
  const [NISN, setNISN] = useState("");
  const [grade, setGrade] = useState("");
  const [download, setDownload] = useState("");
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [modalValidation, setModalValidation] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [indexDelete, setIndexDelete] = useState();
  const [history, setHistory] = useState(false);
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
          <h1>${download.title}</h1>
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
                  <span>${download.time}</span>
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
                                    download.score >= 70
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
                                    download.score
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

  const downloadHistory = () => {};
  useEffect(() => {
    if (download.title !== undefined) {
      printToFile();
    }
  }, [download]);
  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        const storedResult = await AsyncStorage.getItem("result");
        const storedNISN = await AsyncStorage.getItem("NISN");
        const storedGrade = await AsyncStorage.getItem("grade");

        if (storedResult) {
          const resultObject = JSON.parse(storedResult);
          // Uncomment the following lines if you want to set the username as well
          setUsername(storedUsername);
          // ...
          setUsername(storedUsername);
          setNISN(storedNISN);
          setGrade(storedGrade);

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

  const deleteObject = (indexToDelete) => {
    // Hapus objek dari array
    const updatedData = [...lastThree];
    updatedData.splice(indexToDelete, 1);

    // Perbarui local storage dengan data yang baru
    try {
      AsyncStorage.setItem("result", JSON.stringify(updatedData));
      setDataHistory(updatedData); // Perbarui state komponen untuk memperbarui tampilan
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  const handleDelete = (index) => {
    setIndexDelete(index);
  };

  const lastThree = dataHistory.filter((item) => item.status === "ready");
  console.log(dataHistory);

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

  const closeWarning = () => {
    setModalWarning(false);
  };

  console.log(history);
  return (
    <View>
      <Header />
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
          backgroundColor: COLORS.tertiary,
          height: "56%",
        }}
      >
        <FlatList
          data={lastThree}
          renderItem={({ item, index }) => (
            <CardListHistory
              item={item}
              username={username}
              NISN={NISN}
              grade={grade}
              onPress={() => {
                navigation.navigate("DetailHistory", {
                  selectedItem: item,
                });
              }}
              download={() => {
                setModalValidation(true);
                setDownload(item);
              }}
              deleteObject={() => {
                handleDelete(index);
              }}
              setModalWarning={setModalWarning}
              setHistory={setHistory}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
          // columnWrapperStyle={{ justifyContent: "space-evenly" }}
          // numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Validation
        contain={
          history === true ? "Data berhasil dihapus." : "Data berhasil diunduh."
        }
        modalValidation={modalValidation}
        closeValidation={closeValidation}
      />

      <CardWarning
        contain={
          "Apakah anda yakin akan menghapus data riwayat ujian evaluasi tersebut?"
        }
        containTrue={"Hapus"}
        containFalse={"Kembali"}
        setModalValidation={setModalValidation}
        modalWarning={modalWarning}
        closeWarning={closeWarning}
        deleteObject={deleteObject}
        indexDelete={indexDelete}
        history={history}
        setHistory={setHistory}
      />
    </View>
  );
};
