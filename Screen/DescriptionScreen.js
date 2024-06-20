import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Header } from "../Components/Header";
import Pdf from "react-native-pdf";
import { PDF } from "../Config";

export const DescriptionScreen = () => {
  return (
    <View>
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
