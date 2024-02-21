import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { useNavigation } from "@react-navigation/native";
import Pdf from "react-native-pdf";

export const TutorialScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Header />
        <Pdf
          trustAllCerts={false}
          source={{
            uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            cache: true,
          }}
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
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
    backgroundColor: "#6464bb",
    alignItems: "center",
    marginHorizontal: 20,
    width: 150,
  },
  textButton: {
    color: "white",
  },
});
