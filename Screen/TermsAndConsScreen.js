import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import Pdf from "react-native-pdf";
import { useNavigation } from "@react-navigation/native";
import { COLORS, PDF } from "../Config";

export const TermsAndConsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Header />
        <Pdf
          trustAllCerts={false}
          source={{ uri: PDF.aturan }}
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Pertanyaan");
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.textButton}>Selanjutnya</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "83%",
  },
  buttonStyle: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    marginHorizontal: 20,
    width: 150,
  },
  textButton: {
    color: "white",
  },
});
