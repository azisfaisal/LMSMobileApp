import React from "react";
import { Dimensions, Linking, StyleSheet, Text, View } from "react-native";
import { Header } from "../Components/Header";
import Pdf from "react-native-pdf";
import { PDF } from "../Config";

export const AboutScreen = () => {
  return (
    <View>
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
    marginBottom: 100,
  },
});
