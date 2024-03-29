import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { useNavigation } from "@react-navigation/native";

const numColumns = 3;
export const SilabusListScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      image: require("../assets/pdf.png"),
      title: "01_silabus kelas x_Pengenalan dan Penggunaan Alat Gambar Teknik",
      pdf: require("../assets/silabus_1.pdf"),
    },
    {
      image: require("../assets/pdf.png"),
      title: "02_silabus kelas x_standarisasi gambar Teknik",
      pdf: require("../assets/silabus_2.pdf"),
    },
    {
      image: require("../assets/pdf.png"),
      title: "03_silabus kelas x_Proyeksi",
      pdf: require("../assets/silabus_3.pdf"),
    },
    // Add more questions here
  ];

  const numRows = Math.ceil(data.length / 3);

  const rows = Array.from({ length: numRows }, (_, rowIndex) =>
    data.slice(rowIndex * 3, rowIndex * 3 + 3)
  );

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  };

  const renderRow = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("PdfViewer", item.pdf);
        }}
      >
        <Image source={item.image} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Header />
      {/* <FlatList
        data={data}
        renderItem={({ item }) => <CardListPdf item={item} />}
        columnWrapperStyle={{
          gap: 70,
          marginVertical: 10,
          marginHorizontal: 20,
        }}
        numColumns={3}
        style={{ marginBottom: "10%" }}
      /> */}
      <FlatList
        data={formatData(data, numColumns)}
        renderItem={renderRow}
        keyExtractor={(row, index) => `row_${index}`}
        columnWrapperStyle={{
          gap: 70,
          marginVertical: 10,
          marginHorizontal: 20,
        }}
        numColumns={numColumns}
        style={{ marginBottom: "10%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
  },
  textStyle: {
    maxWidth: 200,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
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
});
