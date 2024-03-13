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

const numColumns = 2;

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
        style={styles.buttonStyle}
      >
        {checked[index] === item ? (
          <Fontisto name="radio-btn-active" size={24} color="white" />
        ) : (
          <Fontisto name="radio-btn-passive" size={24} color="white" />
        )}
        <Text style={styles.textButton}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.questionStyle}>
          <Text style={styles.questionText}>{index + 1}. </Text>
          <Text style={styles.questionText}>{question}</Text>
        </View>
        {image !== "" ? (
          <Image source={image} style={styles.imageStyle} />
        ) : null}
        <FlatList
          data={formatData(answer, numColumns)}
          renderItem={renderRow}
          keyExtractor={(row, index) => `row_${index}`}
          columnWrapperStyle={{
            gap: 70,
            marginVertical: 10,
            marginHorizontal: 20,
          }}
          numColumns={numColumns}
          style={{ marginBottom: "10%" }}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  questionStyle: {
    flexDirection: "row",
    width: "100%",
  },
  page: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    fontSize: 20,
  },
  buttonStyle: {
    borderRadius: 8,
    width: 200,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  textButton: {
    color: "white",
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
});
