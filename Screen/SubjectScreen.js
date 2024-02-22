import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import { Header } from "../Components/Header";
import { COLORS } from "../Config";

const SubjectScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Header />
        <WebView
          source={{
            uri: "https://docs.google.com/presentation/d/e/2PACX-1vR3ySPeMa2KOmIeqifuoOKPJ2CvMl8fpsfK-CAtKZixgqZf5rynDwoyUujJZ_jjyQ/pub?start=false&loop=false&delayms=3000",
          }}
          style={{ flex: 1 }}
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
    backgroundColor: COLORS.primary,
    alignItems: "center",
    marginHorizontal: 20,
    width: 150,
  },
  textButton: {
    color: "white",
  },
});

export default SubjectScreen;
