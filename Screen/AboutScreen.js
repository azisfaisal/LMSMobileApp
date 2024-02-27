import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Header } from "../Components/Header";
import Pdf from "react-native-pdf";

export const AboutScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <Header />
        <Pdf
          trustAllCerts={false}
          source={require("../assets/tentang.pdf")}
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
  },
});
