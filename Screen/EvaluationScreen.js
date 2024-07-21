import { useIsFocused, useNavigation } from "@react-navigation/native";
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
import { Loading } from "../Components/Loading";
import { Validation } from "../Components/Validation";
moment.locale("id");

export const EvaluationScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [NISN, setNISN] = useState("");
  const [grade, setGrade] = useState("");
  const [loading, setLoading] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newNISN, setNewNISN] = useState("");
  const [newGrade, setnewGrade] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [modalValidation, setModalValidation] = useState(false);
  const isFocused = useIsFocused();
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
      setRefresh(false);
    };

    fetchData();
  }, [refresh, isFocused]);

  useEffect(() => {
    setNewUsername("");
    setNewNISN("");
    setnewGrade("");
  }, [isFocused]);

  const handleSignUp = async () => {
    // Validasi dan simpan data di sesion storage
    if (newUsername === "") {
      await AsyncStorage.setItem("username", username);
    } else {
      await AsyncStorage.setItem("username", newUsername);
    }

    if (newNISN === "") {
      await AsyncStorage.setItem("NISN", NISN);
    } else {
      await AsyncStorage.setItem("NISN", newNISN);
    }

    if (newGrade === "") {
      await AsyncStorage.setItem("grade", grade);
    } else {
      await AsyncStorage.setItem("grade", newGrade);
    }

    if (NewDescription === "") {
      await AsyncStorage.setItem("description", description);
    } else {
      await AsyncStorage.setItem("description", NewDescription);
    }

    setRefresh(true);
  };

  const closeValidation = () => {
    setModalValidation(false);
  };

  const currentDate = moment().format("dddd, DD MMMM YYYY HH:mm");
  return (
    <ScrollView>
      {loading ? <Loading /> : null}
      <Header tipe={"evaluasi"} />
      <View style={styles.HeaderStyle}>
        <Text style={styles.textHeader}>Ujian Evaluasi</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.subTitle}>Username</Text>
          <TextInput
            placeholder={username}
            value={newUsername}
            onChangeText={(text) => setNewUsername(text)}
            style={styles.textInputstyle}
          />
          <Text style={styles.subTitle}>NISN</Text>
          <TextInput
            placeholder={NISN}
            value={newNISN}
            onChangeText={(text) => setNewNISN(text)}
            style={styles.textInputstyle}
          />
          <Text style={styles.subTitle}>Kelas</Text>
          <TextInput
            placeholder={grade}
            value={newGrade}
            onChangeText={(text) => setnewGrade(text)}
            style={styles.textInputstyle}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              handleSignUp();
              setModalValidation(true);
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
          <View style={{ alignItems: "center" }}>
            <Text style={styles.desText}>
              Perikasalah data diri anda sebelum melaksanakan ujian evaluasi,
              data yang anda lihat di layar merupakan data yang akan terekam di
              “Riwayat Ujian Evaluasi”. serta akan diakumulasikan pada “Grafik
              Riwayat Ujian Evaluasi”. Waktu Pelaksanaan akan dimulai ketika
              anda menekan tombol “Mulai Ujian Evaluasi”.
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigation.navigate("TNC");
                }, 2000);
              }}
            >
              <Text style={styles.textButton}>Mulai Ujian Simulasi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Validation
        contain={"Data berhasil diperbaharui."}
        modalValidation={modalValidation}
        closeValidation={closeValidation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 8,
    width: 200,
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
    marginBottom: 120,
    backgroundColor: "white",
    width: "90%",
    marginHorizontal: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-between",
    padding: 20,
  },
  textInputstyle: {
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
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
