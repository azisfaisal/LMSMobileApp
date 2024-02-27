import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../Config";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const storedUsername = await AsyncStorage.getItem("username");
    const storedPassword = await AsyncStorage.getItem("password");
    if (storedUsername === username && storedPassword === password) {
      navigation.navigate("Subject");
    } else {
      alert("Username atau Password Salah");
    }
  };

  return (
    <View>
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
          <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <View style={styles.contentSignUp}>
            <Text style={styles.textContain}>
              Apakah Anda Tidak Mempunyai Akun?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.textSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
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

export default LoginScreen;
