import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Header } from "../Components/Header";
import { BarChart } from "react-native-gifted-charts";
import { CardHistory } from "../Components/CardHistory";
import { COLORS, PDF } from "../Config";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import ListEmpty from "../Components/ListEmpty";
import { AntDesign } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";
import { Loading } from "../Components/Loading";
import { ProgressChart } from "react-native-chart-kit";

const HomeScreen = () => {
  const [username, setUsername] = useState("");
  const [dataHistory, setDataHistory] = useState([]);
  const [rppProgress, setRppProgress] = useState(0);
  const [percentRpp, setPercentRpp] = useState(0);
  const [silabusProgress, setSilabusProgress] = useState(0);
  const [percentSilabus, setPercentSilabus] = useState(0);
  const [ModulProgress, setModulProgress] = useState(0);
  const [percentModul, setPercentModul] = useState(0);
  const [percentEvaluasi, setPercentEvaluasi] = useState(0);
  const [percentSimulasi, setPercentSimulasi] = useState(0);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        const storedResult = await AsyncStorage.getItem("result");
        const storedRpp = await AsyncStorage.getItem("rpp");
        const storedSilabus = await AsyncStorage.getItem("silabus");
        const storedModul = await AsyncStorage.getItem("modul");
        const storedEvaluasi = await AsyncStorage.getItem("evaluasi");
        const storedSimulasi = await AsyncStorage.getItem("simulasi");
        // await AsyncStorage.removeItem("username");
        // await AsyncStorage.removeItem("NISN");
        // await AsyncStorage.removeItem("grade");
        // await AsyncStorage.removeItem("avatar");

        if (storedResult) {
          const resultObject = JSON.parse(storedResult);

          setDataHistory(resultObject);
        }

        if (storedUsername) {
          setUsername(storedUsername);
        }
        if (JSON.parse(storedRpp !== null)) {
          setPercentRpp(JSON.parse(storedRpp));
        }
        if (JSON.parse(storedSilabus !== null)) {
          setPercentSilabus(JSON.parse(storedSilabus));
        }
        if (JSON.parse(storedModul !== null)) {
          setPercentModul(JSON.parse(storedModul));
        }
        if (JSON.parse(storedEvaluasi !== null)) {
          setPercentEvaluasi(JSON.parse(storedEvaluasi));
        }
        if (JSON.parse(storedSimulasi !== null)) {
          setPercentSimulasi(JSON.parse(storedSimulasi));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // }
    };

    fetchData();
  }, [isFocused, percentRpp]);

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
    return data.filter((item) => item.status === "ready").slice(-3);
  };

  const lastThree = dataHistory
    .filter((item) => item.status === "ready")
    .slice(-3);

  const resultRpp = async (number) => {
    // Validasi dan simpan data di sesion storage
    await AsyncStorage.setItem("rpp", JSON.stringify(number));
  };

  const resultSilabus = async (number) => {
    // Validasi dan simpan data di sesion storage
    if (number === 99) {
      await AsyncStorage.setItem("silabus", "100");
    } else {
      await AsyncStorage.setItem("silabus", JSON.stringify(number));
    }
  };

  const resultModul = async (number) => {
    // Validasi dan simpan data di sesion storage
    await AsyncStorage.setItem("modul", JSON.stringify(number));
    // await AsyncStorage.setItem("evaluasi", "0");
  };

  const totalPercent =
    percentRpp +
    percentSilabus +
    percentModul +
    percentEvaluasi +
    percentSimulasi;
  const roundedPercent = Math.round((totalPercent / 500) * 100);
  const roundedPercentResult = totalPercent / 500;

  const data = {
    labels: ["result"], // optional
    data: [roundedPercentResult],
  };

  console.log(roundedPercentResult, "bulet");
  console.log(totalPercent, "percent");
  console.log(percentRpp, "rpp");
  console.log(percentSilabus, "silabus");
  console.log(percentEvaluasi, "evaluasi");
  console.log(percentSimulasi, "simulasi");
  console.log(percentModul, "modul");
  console.log(totalPercent, "total");

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "red",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(45, 149, 150, ${opacity})`,
  };
  return (
    <ScrollView>
      {loading ? <Loading /> : null}
      <Header tipe={"home"} />
      {/* <Text>Welcome, {username}!</Text> */}
      <View style={styles.container}>
        <View>
          <View style={styles.ProgressStyle}>
            <Text style={[styles.titleBar, { marginTop: 20 }]}>
              Progres Penggunaan Aplikasi
            </Text>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <View
                style={{
                  width: "55%",
                  backgroundColor: "#E7E7E7",
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 8,
                  elevation: 10,
                }}
              >
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
                        fontSize: 12,
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
                        fontSize: 12,
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
                        fontSize: 12,
                        width: 50,
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
                        fontSize: 12,
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
                        fontSize: 12,
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

              <View style={{ alignItems: "center" }}>
                {/* <ProgressCircle
                  percent={roundedPercent}
                  radius={60}
                  borderWidth={10}
                  color={COLORS.secondary}
                  shadowColor="#E7E7E7"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 18 }}>{roundedPercent}%</Text>
                </ProgressCircle> */}
                <ProgressChart
                  data={data}
                  width={120}
                  height={150}
                  strokeWidth={16}
                  radius={50}
                  hideLegend={true}
                  chartConfig={chartConfig}
                  center={12}
                />
                <Text
                  style={{
                    fontSize: 18,
                    position: "absolute",
                    top: "16%",
                  }}
                >
                  {roundedPercent}%
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    width: 100,
                    textAlign: "center",
                    color: COLORS.grey,
                    fontSize: 12,
                  }}
                >
                  Fitur Aplikasi Digunakan
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.historyStyle}>
            <FlatList
              data={lastThree}
              renderItem={({ item }) => (
                <CardHistory
                  item={item}
                  username={username}
                  onPress={() => {
                    // navigation.navigate("DetailHistory", {
                    //   selectedItem: item,
                    // });
                    navigation.navigate("ListHistory");
                  }}
                />
              )}
              scrollEnabled={false}
              ListEmptyComponent={() => <ListEmpty />}
              // columnWrapperStyle={{ justifyContent: "space-evenly" }}
              // numColumns={2}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={styles.dashboardGrafik}>
          <View style={styles.dashboardSmall}>
            <TouchableOpacity
              style={styles.cardSmall}
              onPress={() => {
                // let number = rppProgress + 1 * 20;
                // setRppProgress(number);
                // if (percentRpp < 100) {
                //   resultRpp();
                // }
                navigation.navigate("Rpp");
              }}
            >
              <Image
                source={require("../assets/rpp.png")}
                style={styles.imageSmall}
              />
              <Text style={styles.textCardSmall}>RPP</Text>
              <View style={styles.cardNumber}>
                <AntDesign name="filetext1" size={18} color={COLORS.primary} />
                <Text style={styles.textNumber}>5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardSmall}
              onPress={() => {
                // let number = silabusProgress + 1 * 33;
                // setSilabusProgress(number);
                // if (percentSilabus < 100) {
                //   resultSilabus(number);
                // }
                navigation.navigate("Silabus");
              }}
            >
              <Image
                source={require("../assets/silabus.png")}
                style={styles.imageSmall}
              />
              <Text style={styles.textCardSmall}>Silabus</Text>
              <View style={styles.cardNumber}>
                <AntDesign name="filetext1" size={18} color={COLORS.primary} />
                <Text style={styles.textNumber}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardLarge}
              onPress={() => {
                let number = ModulProgress + 1 * 100;
                setModulProgress(number);
                // if (percentModul < 100) {
                //   resultModul(number);
                // }
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigation.navigate("PdfViewer", {
                    pdf: PDF.modul,
                    onComplete: "modul",
                  });
                }, 2000);
              }}
            >
              <Image
                source={require("../assets/modulgambarteknik.png")}
                style={styles.imageSmall}
              />
              <Text style={styles.textCardLarge}>
                Pengenalan dan Kelengkapan Gambar Teknik dan Standarisasi Gambar
                Teknik (Modul Gambar Teknik)
              </Text>
              <View style={styles.cardNumberLarge}>
                <AntDesign name="filetext1" size={18} color={COLORS.primary} />
                <Text style={styles.textNumber}>1</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTitleBarStyle}>
            <Text style={styles.titleBar}>
              Statistik Riwayat Ujian Evaluasi
            </Text>
            <TouchableOpacity
              style={styles.eyeCard}
              onPress={() => {
                navigation.navigate("DetailBar");
              }}
            >
              <AntDesign name="eye" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.barStyle}>
            <View style={styles.wrapEvaluasi}>
              <View style={styles.cardNilaiEvaluasi} />
              <Text style={styles.textEvaluasi}>Nilai Evaluasi</Text>
            </View>
            <BarChart
              barWidth={45}
              height={520}
              noOfSections={5}
              barBorderRadius={4}
              frontColor="lightgray"
              data={pickBar()}
              yAxisThickness={1}
              xAxisThickness={0}
              width={200}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardSmall: {
    backgroundColor: COLORS.secondary,
    width: "31%",
    height: 165,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
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
  wrapProgress: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  dashboard: {
    flexDirection: "row",
    gap: 10,
  },
  dashboardGrafik: {
    marginBottom: 100,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    width: 300,
  },
  cardLarge: {
    backgroundColor: COLORS.tertiary,
    width: "31%",
    height: 165,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  cardNumber: {
    padding: 5,
    backgroundColor: COLORS.tertiary,
    borderRadius: 8,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  cardNumberLarge: {
    padding: 5,
    backgroundColor: COLORS.quaternary,
    borderRadius: 8,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  textNumber: {
    color: COLORS.primary,
  },
  textCardSmall: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 10,
    height: "44%",
    textAlignVertical: "center",
  },
  textCardLarge: {
    color: COLORS.primary,
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 7.3,
    height: "44%",
  },
  imageLarge: {
    width: 200,
    height: 230,
    borderRadius: 8,
  },
  imageSmall: {
    width: 30,
    height: 30,
  },
  historyStyle: {
    height: 400,
    width: 300,
    backgroundColor: COLORS.tertiary,
    // marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 100,
  },
  ProgressStyle: {
    height: 460,
    width: 300,
    backgroundColor: "white",
    // marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 10,
    marginBottom: 10,
  },
  dashboardSmall: {
    flexDirection: "row",
    gap: 10,
  },
  barStyle: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    borderColor: COLORS.primary,
  },
  titleBar: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  eyeCard: {
    padding: 1,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    width: 35,
    alignItems: "center",
  },
  containerTitleBarStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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
});

export default HomeScreen;
