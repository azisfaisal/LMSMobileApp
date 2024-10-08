import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../Config";
import { Loading } from "../Components/Loading";

const SignUpScreen = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [NISN, setNISN] = useState("");
  const [grade, setGrade] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    // Validasi dan simpan data di sesion storage
    if (username && NISN && grade) {
      await AsyncStorage.setItem("username", username);
      // await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("NISN", NISN);
      await AsyncStorage.setItem("grade", grade);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("Subject");
      }, 2000);
    } else {
      alert("Mohon Lengakapi Form");
    }
  };

  return (
    <ScrollView>
      {loading ? <Loading /> : null}
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/logo.png")} style={styles.image} />
          <View style={styles.line} />
          <Text style={styles.titleText}>
            Aplikasi Multimedia Animasi Gambar Teknik
          </Text>
        </View>

        <View style={styles.cardLogin}>
          <View style={styles.label}>
            <Text style={styles.labelText}>Masuk</Text>
          </View>
          <Text style={styles.subTitle}>Nama Lengkap</Text>
          <TextInput
            placeholder="Masukan Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.textInputstyle}
          />
          <Text style={styles.subTitle}>NISN</Text>
          <TextInput
            placeholder="Masukan NISN"
            value={NISN}
            onChangeText={(text) => setNISN(text)}
            style={styles.textInputstyle}
          />
          <Text style={styles.subTitle}>Kelas</Text>
          <TextInput
            placeholder="Masukan Kelas"
            value={grade}
            onChangeText={(text) => setGrade(text)}
            style={styles.textInputstyle}
          />
          <TouchableOpacity style={styles.buttonStyle} onPress={handleSignUp}>
            <Text style={styles.textButton}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              Linking.openURL(
                "https://nisn.data.kemdikbud.go.id/index.php/Cindex/formcaribynama"
              );
            }}
          >
            <Text style={{ color: COLORS.grey }}>Lupa NISN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  titleText: {
    fontSize: 20,
    maxWidth: "83%",
    fontWeight: "bold",
    color: COLORS.secondary,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: "5%",
    alignItems: "center",
    width: "45%",
    justifyContent: "space-between",
  },
  textInputstyle: {
    borderWidth: 1,
    borderRadius: 8,
    width: 300,
    padding: 10,
    marginTop: 10,
    borderColor: COLORS.secondary,
  },
  buttonStyle: {
    borderRadius: 8,
    width: 300,
    padding: 10,
    marginTop: 30,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
  subTitle: {
    color: COLORS.primary,
    marginTop: 10,
    fontWeight: "bold",
  },
  contentSignUp: {
    flexDirection: "row",
    gap: 5,
  },
  textContain: {
    color: "#72777a",
  },
  textSignUp: {
    color: COLORS.primary,
  },
  line: {
    width: 60,
    height: 10,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginVertical: 20,
  },
  cardLogin: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  label: {
    backgroundColor: COLORS.secondary,
    position: "absolute",
    top: 0,
    width: 380,
    height: 40,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default SignUpScreen;
