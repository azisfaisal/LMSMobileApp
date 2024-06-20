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
          <View style={styles.line} />
          <Text style={styles.titleText}>
            Aplikasi Multimedia Animasi Gambar Teknik
          </Text>
        </View>

        <View style={styles.cardLogin}>
          <View style={styles.label}>
            <Text style={styles.labelText}>Masuk</Text>
          </View>
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
          <View style={styles.wrapButton}>
            <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
              <Text style={styles.textButton}>Masuk</Text>
            </TouchableOpacity>
            <View style={styles.contentSignUp}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text style={styles.textSignUp}>Lupa NISN</Text>
              </TouchableOpacity>
            </View>
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
  },
  titleText: {
    fontSize: 25,
    maxWidth: "83%",
    fontWeight: "bold",
    color: COLORS.secondary,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: "5%",
    alignItems: "center",
    width: "57%",
  },
  textInputstyle: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    borderColor: COLORS.secondary,
    marginHorizontal: 40,
  },
  buttonStyle: {
    borderRadius: 50,
    width: 150,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
  },
  subTitle: {
    color: COLORS.primary,
    marginTop: 10,
    fontWeight: "bold",
    marginHorizontal: 40,
  },
  contentSignUp: {
    flexDirection: "row",
    gap: 5,
  },
  textContain: {
    color: "#72777a",
  },
  textSignUp: {
    color: "#72777a",
    marginBottom: 10,
  },
  cardLogin: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "80%",
  },
  label: {
    backgroundColor: COLORS.secondary,
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
  line: {
    width: 60,
    height: 10,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginVertical: 20,
  },
  wrapButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
