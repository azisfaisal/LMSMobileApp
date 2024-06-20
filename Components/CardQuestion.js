import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../Config";

const numColumns = 1;

export const CardQuestion = ({ question, answer, onPress, index, image }) => {
  const numRows = Math.ceil(answer.length / 2);

  const rows = Array.from({ length: numRows }, (_, rowIndex) =>
    answer.slice(rowIndex * 2, rowIndex * 2 + 2)
  );

  const formatData = (answer, numColumns) => {
    const numberOfFullRows = Math.floor(answer.length / numColumns);

    let numberOfElementsLastRow = answer.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      answer.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return answer;
  };

  const [checked, setChecked] = useState([]);
  const renderRow = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            // const tmp = [...checked];
            // tmp.push(item);
            // console.log(tmp);
            setChecked((prev) => [...prev, item]);
            setTimeout(() => {
              onPress(index, item);
            }, 1000);
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            marginTop: 10,
          }}
        >
          {checked[index] === item ? (
            <View style={styles.buttonStyle}>
              <Fontisto name="radio-btn-active" size={24} color="white" />
            </View>
          ) : (
            <View style={styles.buttonStyle}>
              <Fontisto name="radio-btn-passive" size={24} color="white" />
            </View>
          )}
          {typeof item === "number" ? (
            <Image source={item} style={styles.ImageAnswerStyle} />
          ) : (
            <Text style={styles.textButton}>{item}</Text>
          )}
        </TouchableOpacity>
        <View style={styles.Divider} />
      </>
    );
  };

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.wrapTitle}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.ImageStyle}
          />
          <View>
            <Text style={styles.textTitle}>UJIAN EVALUASI AMMAGT</Text>
            <View style={styles.line} />
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={styles.borderQuestion}>
            <View style={styles.questionStyle}>
              <Text style={styles.numberText}>Soal Nomor {index + 1}</Text>
              {image !== "" ? (
                <View style={{ alignItems: "center", marginTop: 10 }}>
                  <Image source={image} style={styles.imageStyle} />
                </View>
              ) : null}
              <Text style={styles.questionText}>{question}</Text>
            </View>

            <FlatList
              data={formatData(answer, numColumns)}
              renderItem={renderRow}
              keyExtractor={(row, index) => `row_${index}`}
              // columnWrapperStyle={{
              //   gap: 70,
              //   marginVertical: 10,
              //   marginHorizontal: 20,
              // }}
              numColumns={numColumns}
              scrollEnabled={false}
            />
          </View>

          <View style={styles.borderIndicator}>
            <Text style={styles.numberText}>Indikator Soal</Text>

            <View style={{ flexDirection: "row", gap: 5 }}>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 1 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 1 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 1 ? "white" : null }}>
                  1
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 2 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 2 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 2 ? "white" : null }}>
                  2
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 3 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 3 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 3 ? "white" : null }}>
                  3
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 4 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 4 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 4 ? "white" : null }}>
                  4
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 5 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 5 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 5 ? "white" : null }}>
                  5
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 5 }}>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 6 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 6 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 6 ? "white" : null }}>
                  6
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 7 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 7 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 7 ? "white" : null }}>
                  7
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 8 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 8 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 8 ? "white" : null }}>
                  8
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 9 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 9 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 9 ? "white" : null }}>
                  9
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 10 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 10 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 10 ? "white" : null }}>
                  10
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 5 }}>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 11 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 11 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 11 ? "white" : null }}>
                  11
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 12 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 12 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 12 ? "white" : null }}>
                  12
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 13 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 13 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 13 ? "white" : null }}>
                  13
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 14 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 14 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 14 ? "white" : null }}>
                  14
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 15 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 15 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 15 ? "white" : null }}>
                  15
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 5 }}>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 16 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 16 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 16 ? "white" : null }}>
                  16
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 17 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 17 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 17 ? "white" : null }}>
                  17
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 18 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 18 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 18 ? "white" : null }}>
                  18
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 19 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 19 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 19 ? "white" : null }}>
                  19
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 20 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 20 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 20 ? "white" : null }}>
                  20
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 5 }}>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 21 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 21 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 21 ? "white" : null }}>
                  21
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 22 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 22 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 22 ? "white" : null }}>
                  22
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 23 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 23 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 23 ? "white" : null }}>
                  23
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 24 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 24 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 24 ? "white" : null }}>
                  24
                </Text>
              </View>
              <View
                style={[
                  styles.numberStyle,
                  {
                    borderWidth: index + 1 >= 25 ? 0 : 1,
                    backgroundColor:
                      index + 1 >= 25 ? COLORS.secondary : "white",
                  },
                ]}
              >
                <Text style={{ color: index + 1 >= 25 ? "white" : null }}>
                  25
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  questionStyle: {
    width: "100%",
  },
  page: {
    padding: 20,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 15,
  },
  questionText: {
    fontSize: 20,
    marginTop: 20,
    color: COLORS.primary,
  },
  numberText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
  buttonStyle: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.secondary,
    gap: 20,
    width: 50,
    alignItems: "center",
  },
  textButton: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 15,
    width: "80%",
  },
  answerStyle: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 1, // approximate a square
    marginTop: 10,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  borderQuestion: {
    borderWidth: 3,
    borderColor: "#C8C8C8",
    borderRadius: 15,
    width: "67%",
    padding: 20,
  },
  borderIndicator: {
    borderWidth: 3,
    borderColor: "#C8C8C8",
    borderRadius: 15,
    width: "33%",
    height: 270,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageStyle: {
    width: 70,
    height: 70,
  },
  ImageAnswerStyle: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
  line: {
    width: 40,
    height: 5,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginVertical: 10,
  },
  Divider: {
    width: "100%",
    height: 5,
    borderRadius: 4,
    backgroundColor: "#C8C8C8",
  },
  wrapTitle: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 30,
    color: COLORS.secondary,
    fontWeight: "bold",
  },
  numberStyle: {
    borderRadius: 8,
    padding: 5,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
