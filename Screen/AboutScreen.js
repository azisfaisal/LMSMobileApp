import React, { useEffect } from "react";
import {
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import Pdf from "react-native-pdf";
import { PDF } from "../Config";
import { useIsFocused } from "@react-navigation/native";

export const AboutScreen = () => {
  const isFocused = useIsFocused();
  function showToast() {
    ToastAndroid.show("Gunakan dua jari untuk zoom", ToastAndroid.SHORT);
  }

  useEffect(() => {
    showToast();
  }, []);
  return (
    <View style={{ marginBottom: "15%" }}>
      <View style={styles.container}>
        <Header tipe={"tentang"} />
        <Pdf
          trustAllCerts={false}
          source={{ uri: PDF.tentang }}
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
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
