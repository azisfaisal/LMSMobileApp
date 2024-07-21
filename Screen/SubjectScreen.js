import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import { Header } from "../Components/Header";
import { COLORS, PDF } from "../Config";
import Pdf from "react-native-pdf";
import { useEffect, useRef, useState } from "react";
import { Loading } from "../Components/Loading";

const SubjectScreen = ({}) => {
  const navigation = useNavigation();
  const pdfRef = useRef(null);
  const [loading, setLoading] = useState(false);
  // const isFocused = useIsFocused();
  function showToast() {
    ToastAndroid.show("Gunakan dua jari untuk zoom", ToastAndroid.SHORT);
  }

  useEffect(() => {
    showToast();
  }, []);

  return (
    <View>
      {loading ? <Loading /> : null}
      <View style={styles.container}>
        {/* <Header /> */}
        {/* <WebView
          source={{
            uri: "https://docs.google.com/presentation/d/e/2PACX-1vR3ySPeMa2KOmIeqifuoOKPJ2CvMl8fpsfK-CAtKZixgqZf5rynDwoyUujJZ_jjyQ/pub?start=false&loop=false&delayms=3000",
          }}
          style={{ flex: 1 }}
        /> */}
        <Pdf
          ref={pdfRef}
          trustAllCerts={false}
          source={{ uri: PDF.deskripsi }}
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
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.textButton}>Kembali</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              navigation.navigate("Main");
            }, 15000);
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

export default SubjectScreen;
