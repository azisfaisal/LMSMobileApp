import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../Config";
import { Header } from "../Components/Header";
import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

export const EvaluationScreen = () => {
  const navigation = useNavigation();
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

  const handleSignUp = async () => {
    // Validasi dan simpan data di sesion storage
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("NISN", NISN);
    await AsyncStorage.setItem("grade", grade);
    alert("Data Berhasil Di Ubah");
  };

  const currentDate = moment().format("dddd, DD MMMM YYYY HH:mm");
  return (
    <ScrollView>
      <Header tipe={"evaluasi"} />
      <View style={styles.HeaderStyle}>
        <Text style={styles.textHeader}>Ujian Evaluasi</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.subTitle}>Username</Text>
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
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              handleSignUp();
            }}
          >
            <Text style={styles.textButton}>Ubah Data</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subTitle}>Waktu Ujian Evaluasi</Text>
          <View style={styles.textInputstyle}>
            <Text>{currentDate}</Text>
          </View>
          <Text style={styles.desText}>
            Perikasalah data diri anda sebelum melaksanakan ujian evaluasi, data
            yang anda lihat di layar merupakan data yang akan terekam di
            “Riwayat Ujian Evaluasi”. serta akan diakumulasikan pada “Grafik
            Riwayat Ujian Evaluasi”. Waktu Pelaksanaan akan dimulai ketika anda
            menekan tombol “Mulai Ujian Evaluasi”.
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("TNC");
            }}
          >
            <Text style={styles.textButton}>Mulai Ujian Simulasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 8,
    width: 300,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 120,
    backgroundColor: "white",
    width: "90%",
    marginHorizontal: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInputstyle: {
    borderWidth: 1,
    borderRadius: 8,
    width: 300,
    padding: 10,
    marginTop: 10,
    borderColor: COLORS.secondary,
  },
  subTitle: {
    color: COLORS.primary,
    fontWeight: "bold",
    marginTop: 10,
  },
  desText: {
    width: 300,
    marginTop: 10,
    color: COLORS.primary,
  },
  HeaderStyle: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    marginHorizontal: 40,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
});
