import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Header } from "../Components/Header";
import Pdf from "react-native-pdf";
import AsyncStorage from "@react-native-community/async-storage";

export const PdfViewer = ({ route }) => {
  const { pdf, onComplete } = route.params;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const resultModul = async (number) => {
    // Validasi dan simpan data di sesion storage
    await AsyncStorage.setItem("modul", JSON.stringify(number));
    // await AsyncStorage.setItem("silabus", "0");
  };

  useEffect(() => {
    if (currentPage === totalPages && totalPages > 0) {
      if (onComplete === "modul") {
        resultModul(100);
      } else {
        onComplete();
      }
    }
  }, [currentPage, totalPages]);

  return (
    <View>
      <View style={styles.container}>
        <Header />
        <Pdf
          trustAllCerts={false}
          source={{ uri: pdf }}
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          showsVerticalScrollIndicator={true}
          onLoadComplete={(numberOfPages) => setTotalPages(numberOfPages)}
          onPageChanged={(page) => setCurrentPage(page)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
