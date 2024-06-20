import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Platform,
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
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons";
import { BarChart } from "react-native-gifted-charts";
import { Validation } from "../Components/Validation";
import ProgressCircle from "react-native-progress-circle";

export const ProfileScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [NISN, setNISN] = useState("");
  const [grade, setGrade] = useState("");
  const [description, setDescripstion] = useState("");
  const [percentRpp, setPercentRpp] = useState("0");
  const [percentSilabus, setPercentSilabus] = useState("0");
  const [percentModul, setPercentModul] = useState("0");
  const [percentEvaluasi, setPercentEvaluasi] = useState("0");
  const [percentSimulasi, setPercentSimulasi] = useState("0");
  const [dataHistory, setDataHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalValidation, setModalValidation] = useState(false);

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      const storedPassword = await AsyncStorage.getItem("password");
      const storedNISN = await AsyncStorage.getItem("NISN");
      const storedGrade = await AsyncStorage.getItem("grade");
      const storedDescription = await AsyncStorage.getItem("description");
      const storedResult = await AsyncStorage.getItem("result");
      const resultObject = JSON.parse(storedResult);
      const storedRpp = await AsyncStorage.getItem("rpp");
      const storedSilabus = await AsyncStorage.getItem("silabus");
      const storedModul = await AsyncStorage.getItem("modul");
      const storedEvaluasi = await AsyncStorage.getItem("evaluasi");
      const storedSimulasi = await AsyncStorage.getItem("simulasi");
      setUsername(storedUsername);
      setPassword(storedPassword);
      setNISN(storedNISN);
      setGrade(storedGrade);
      setDescripstion(storedDescription);
      setDataHistory(resultObject);
      setPercentRpp(JSON.parse(storedRpp));
      setPercentSilabus(JSON.parse(storedSilabus));
      setPercentModul(JSON.parse(storedModul));
      setPercentEvaluasi(JSON.parse(storedEvaluasi));
      setPercentSimulasi(JSON.parse(storedSimulasi));
      setDataHistory(resultObject);
    };

    fetchData();
  }, []);

  const pickBar = () => {
    let data = [];
    dataHistory.map((item) => {
      data.push({
        value: item.score,
        label: item.title,
        status: item.status,
        frontColor: COLORS.primary,
      });
    });
    return data.filter((item) => item.status === "ready").slice(-1);
  };

  const navigation = useNavigation();
  const handleSignUp = async () => {
    // Validasi dan simpan data di sesion storage
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("password", password);
    await AsyncStorage.setItem("NISN", NISN);
    await AsyncStorage.setItem("grade", grade);
    await AsyncStorage.setItem("description", description);
    // alert("Data Berhasil Di Ubah");
  };

  const closeValidation = () => {
    setModalValidation(false);
  };

  const totalPercent =
    percentRpp +
    percentSilabus +
    percentModul +
    percentEvaluasi +
    percentSimulasi;
  const roundedPercent = Math.round((totalPercent / 500) * 100);

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <View style={styles.descriptionStyle}>
          <View style={styles.wrapTextProfile}>
            <TouchableOpacity
              style={styles.cardEdit}
              onPress={() => setModalVisible(true)}
            >
              <Feather name="edit" size={24} color={COLORS.primary} />
            </TouchableOpacity>
            <Text style={styles.profileText}>Profil</Text>
          </View>
          <View style={styles.wrapContainProfile}>
            <FontAwesome
              name="user-circle-o"
              size={100}
              color={COLORS.secondary}
            />
            <Text style={styles.textUser}>{username}</Text>
            <Text style={styles.textNISN}>
              {NISN} | {grade}
            </Text>
            <Text style={styles.titleText}>{description}</Text>
          </View>
        </View>

        <View style={styles.ProgressStyle}>
          <View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginVertical: 10,
              }}
            >
              <ProgressCircle
                percent={roundedPercent}
                radius={50}
                borderWidth={5}
                color={COLORS.secondary}
                shadowColor="#E7E7E7"
                bgColor="#fff"
              >
                <Text style={{ fontSize: 18 }}>{roundedPercent}%</Text>
              </ProgressCircle>
              <Text style={[styles.titleBar, { marginTop: 20, width: 150 }]}>
                Progres Penggunaan Aplikasi
              </Text>
            </View>
          </View>
          <View style={styles.wrapProgress}>
            <View style={styles.circleProgress}>
              <Image
                source={require("../assets/rpp.png")}
                style={styles.imageSmall}
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 18,
                }}
              >
                RPP
              </Text>
              <Text
                style={{
                  color: COLORS.secondary,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {percentRpp >= 100
                  ? 100
                  : percentRpp === null
                  ? "0"
                  : percentRpp}
                %
              </Text>
            </View>
          </View>

          <View style={styles.wrapProgress}>
            <View style={styles.circleProgress}>
              <Image
                source={require("../assets/silabus.png")}
                style={styles.imageSmall}
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 18,
                }}
              >
                Silabus
              </Text>
              <Text
                style={{
                  color: COLORS.secondary,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {percentSilabus >= 100
                  ? 100
                  : percentSilabus === null
                  ? "0"
                  : percentSilabus}
                %
              </Text>
            </View>
          </View>

          <View style={styles.wrapProgress}>
            <View style={styles.circleProgress}>
              <Image
                source={require("../assets/modulgambarteknik.png")}
                style={styles.imageSmall}
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 18,
                  width: 150,
                }}
              >
                Modul Gambar Teknik
              </Text>
              <Text
                style={{
                  color: COLORS.secondary,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {percentModul >= 100
                  ? 100
                  : percentModul === null
                  ? "0"
                  : percentModul}
                %
              </Text>
            </View>
          </View>

          <View style={styles.wrapProgress}>
            <View style={styles.circleProgress}>
              <Image
                source={require("../assets/EVALUASI.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 18,
                }}
              >
                Evaluasi
              </Text>
              <Text
                style={{
                  color: COLORS.secondary,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {percentEvaluasi >= 100
                  ? 100
                  : percentEvaluasi === null
                  ? "0"
                  : percentEvaluasi}
                %
              </Text>
            </View>
          </View>

          <View style={styles.wrapProgress}>
            <View style={styles.circleProgress}>
              <Image
                source={require("../assets/SIMULASI.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 18,
                }}
              >
                Simulasi
              </Text>
              <Text
                style={{
                  color: COLORS.secondary,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {percentSimulasi >= 100
                  ? 100
                  : percentSimulasi === null
                  ? "0"
                  : percentSimulasi}
                %
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.coloumStyle}>
          <View style={styles.containerTitleBarStyle}></View>
          <View style={styles.barStyle}>
            <Text style={styles.titleBar}>
              Statistik Riwayat Ujian Evaluasi
            </Text>
            <View style={styles.wrapEvaluasi}>
              <View style={styles.cardNilaiEvaluasi} />
              <Text style={styles.textEvaluasi}>Nilai Evaluasi</Text>
            </View>
            <BarChart
              barWidth={70}
              height={350}
              noOfSections={5}
              barBorderRadius={4}
              frontColor="lightgray"
              data={pickBar()}
              yAxisThickness={1}
              xAxisThickness={0}
              width={100}
            />
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={[
            Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
            styles.backdrop,
          ]}
        />
        <View>
          <View style={styles.modalView}>
            <View style={styles.HeaderStyle}>
              <Text style={styles.textHeader}>Perbaharui Profile</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <AntDesign name="closecircleo" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.contentEditStyle}>
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
              </View>
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 8,
                  width: 300,
                  marginTop: 35,
                  borderColor: COLORS.secondary,
                }}
              >
                <TextInput
                  editable
                  multiline
                  numberOfLines={4}
                  value={description}
                  placeholder="Deskripsi diri"
                  onChangeText={(text) => setDescripstion(text)}
                  style={{ padding: 10 }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                handleSignUp();
                setModalVisible(!modalVisible);
                setModalValidation(true);
              }}
            >
              <Text style={styles.textButton}>Ubah Data</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Validation
        contain={"Data berhasil diperbaharui."}
        modalValidation={modalValidation}
        closeValidation={closeValidation}
      />
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
    marginTop: 20,
    backgroundColor: "white",
    marginBottom: 40,
    borderRadius: 15,
    marginHorizontal: 8,
    gap: 5,
  },
  textInputstyle: {
    borderWidth: 2,
    borderRadius: 8,
    width: 300,
    padding: 5,
    marginTop: 10,
    borderColor: COLORS.secondary,
  },
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
  subTitle: {
    color: COLORS.primary,
    marginTop: 5,
    fontWeight: "bold",
  },
  textContain: {
    color: "#72777a",
  },
  textSignUp: {
    color: COLORS.primary,
  },
  descriptionStyle: {
    width: "30%",
  },
  coloumStyle: {
    marginRight: 40,
  },
  cardEdit: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#E7EAE9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  profileText: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  wrapTextProfile: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
    marginLeft: 20,
  },
  textUser: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  textNISN: {
    fontSize: 15,
    color: COLORS.tertiary,
  },
  wrapContainProfile: {
    alignItems: "center",
  },
  barStyle: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    borderColor: "#E7E7E7",
    marginTop: "25%",
  },
  cardNilaiEvaluasi: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  textEvaluasi: {
    color: COLORS.primary,
    opacity: 0.5,
  },
  wrapEvaluasi: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  titleBar: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: 80,
  },
  containerTitleBarStyle: {
    marginBottom: 10,
    marginRight: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.7,
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.7,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  HeaderStyle: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
  contentEditStyle: {
    flexDirection: "row",
    gap: 10,
  },
  ProgressStyle: {
    width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    borderColor: "#E7E7E7",
    marginBottom: 40,
    marginTop: "10%",
  },
  titleBar: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  wrapProgress: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  circleProgress: {
    backgroundColor: COLORS.secondary,
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imageSmall: {
    width: 30,
    height: 30,
  },
});
