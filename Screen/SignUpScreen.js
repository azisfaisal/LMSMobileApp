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
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../Config";

const SignUpScreen = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [NISN, setNISN] = useState("");
  const [grade, setGrade] = useState("");

  const navigation = useNavigation();

  const handleSignUp = async () => {
    // Validasi dan simpan data di sesion storage
    if (username && password && NISN && grade) {
      await AsyncStorage.setItem("username", username);
      await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("NISN", NISN);
      await AsyncStorage.setItem("grade", grade);
      navigation.navigate("Login");
    } else {
      alert("Mohon Lengakapi Form");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/logo.png")} style={styles.image} />
          <Text style={styles.titleText}>
            Aplikasi Multimedia Animasi Gambar Teknik
          </Text>
        </View>

        <View>
          <Text style={styles.subTitle}>Username</Text>
          <TextInput
            placeholder="Masukan Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.textInputstyle}
          />
          <Text style={styles.subTitle}>Password</Text>
          <TextInput
            placeholder="Masukan Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
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
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginLeft: 40,
  },
  titleText: {
    fontSize: 25,
    maxWidth: "65%",
    marginTop: 10,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: "5%",
    alignItems: "center",
  },
  textInputstyle: {
    borderWidth: 1,
    borderRadius: 8,
    width: 300,
    padding: 10,
    marginTop: 10,
  },
  buttonStyle: {
    borderRadius: 8,
    width: 300,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
  subTitle: {
    color: "#72777a",
    marginTop: 10,
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
});

export default SignUpScreen;
