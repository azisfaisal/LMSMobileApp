import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { COLORS } from "../Config";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

export const ProfileScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [NISN, setNISN] = useState("");
  const [grade, setGrade] = useState("");
  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      const storedPassword = await AsyncStorage.getItem("password");
      const storedNISN = await AsyncStorage.getItem("NISN");
      const storedGrade = await AsyncStorage.getItem("grade");
      setUsername(storedUsername);
      setPassword(storedPassword);
      setNISN(storedNISN);
      setGrade(storedGrade);
    };

    fetchData();
  }, []);

  const navigation = useNavigation();
  const handleSignUp = async () => {
    // Validasi dan simpan data di sesion storage
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("password", password);
    await AsyncStorage.setItem("NISN", NISN);
    await AsyncStorage.setItem("grade", grade);
    alert("Data Berhasil Di Ubah");
  };

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <View style={styles.descriptionStyle}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>

        <View style={styles.coloumStyle}>
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
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              handleSignUp();
            }}
          >
            <Text style={styles.textButton}>Ubah Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  titleText: {
    maxWidth: "65%",
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
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
  textContain: {
    color: "#72777a",
  },
  textSignUp: {
    color: COLORS.primary,
  },
  descriptionStyle: {
    alignItems: "center",
    width: "50%",
  },
  coloumStyle: {
    marginRight: 40,
  },
});
