import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";

const SubjectScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <WebView
          source={{
            uri: "https://docs.google.com/presentation/d/e/2PACX-1vR3ySPeMa2KOmIeqifuoOKPJ2CvMl8fpsfK-CAtKZixgqZf5rynDwoyUujJZ_jjyQ/pub?start=false&loop=false&delayms=3000",
          }}
          style={{ flex: 1 }}
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
    height: "80%",
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

export default SubjectScreen;
