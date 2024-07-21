import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { Header } from "../Components/Header";
import Pdf from "react-native-pdf";
import { PDF } from "../Config";
import { useIsFocused } from "@react-navigation/native";

export const DescriptionScreen = () => {
  const isFocused = useIsFocused();
  function showToast() {
    ToastAndroid.show("Gunakan dua jari untuk zoom", ToastAndroid.SHORT);
  }

  useEffect(() => {
    showToast();
  }, []);
  return (
    <View style={{ marginBottom: "30%" }}>
      <View style={styles.container}>
        <Header tipe={"deskripsi"} />
        <Pdf
          trustAllCerts={false}
          source={{ uri: PDF.deskripsi }}
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
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
    marginBottom: 100,
  },
});
