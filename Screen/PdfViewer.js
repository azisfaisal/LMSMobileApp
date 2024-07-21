import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { COLORS } from "../Config";
import Pdf from "react-native-pdf";
import AsyncStorage from "@react-native-community/async-storage";
import { useIsFocused, useNavigation } from "@react-navigation/native";

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

  const navigation = useNavigation();

  const isFocused = useIsFocused();
  function showToast() {
    ToastAndroid.show("Gunakan dua jari untuk zoom", ToastAndroid.SHORT);
  }

  useEffect(() => {
    showToast();
  }, []);

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
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            bottom: 0,
            gap: 10,
            left: 0,
            backgroundColor: "rgba(249, 249, 249, 0.80)",
            width: "100%",
            paddingLeft: "30%",
            paddingBottom: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.buttonStyle}
          >
            <Text style={styles.textButton}>Kembali</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  buttonStyle: {
    borderRadius: 8,
    padding: 5,
    marginVertical: 10,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    width: 90,
  },
  textButton: {
    color: "white",
    fontSize: 12,
  },
});
