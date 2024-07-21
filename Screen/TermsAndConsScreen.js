import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import Pdf from "react-native-pdf";
import { useNavigation } from "@react-navigation/native";
import { COLORS, PDF } from "../Config";

export const TermsAndConsScreen = () => {
  const navigation = useNavigation();
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
          source={{ uri: PDF.aturan }}
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          bottom: 0,
          gap: 10,
          left: 0,
          backgroundColor: "rgba(249, 249, 249, 0.80)",
          width: "100%",
          paddingLeft: "10%",
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pertanyaan");
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.textButton}>Selanjutnya</Text>
        </TouchableOpacity>
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
