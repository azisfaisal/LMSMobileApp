import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import { Header } from "../Components/Header";
import { COLORS, PDF } from "../Config";
import Pdf from "react-native-pdf";

const SubjectScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Header />
        {/* <WebView
          source={{
            uri: "https://docs.google.com/presentation/d/e/2PACX-1vR3ySPeMa2KOmIeqifuoOKPJ2CvMl8fpsfK-CAtKZixgqZf5rynDwoyUujJZ_jjyQ/pub?start=false&loop=false&delayms=3000",
          }}
          style={{ flex: 1 }}
        /> */}
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Tutorial");
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

export default SubjectScreen;
