import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { CardPdfDocument } from "../Components/CardPdfDocument";
import AsyncStorage from "@react-native-community/async-storage";
import { PDF } from "../Config";

// const numColumns = 3;
export const SilabusListScreen = () => {
  const navigation = useNavigation();
  const [openedItemsSilabus, setOpenedItemsSilabus] = useState([]);
  const [completedItemsSilabus, setCompletedItemsSilabus] = useState([]);
  const [percentSilabus, setPercentSilabus] = useState(0);
  const isFocused = useIsFocused();

  const data = [
    {
      id: 1,
      image: require("../assets/pdf.png"),
      title: "01_silabus kelas x_Pengenalan dan Penggunaan Alat Gambar Teknik",
      pdf: PDF.silabus1,
    },
    {
      id: 2,
      image: require("../assets/pdf.png"),
      title: "02_silabus kelas x_standarisasi gambar Teknik",
      pdf: PDF.silabus2,
    },
    {
      id: 3,
      image: require("../assets/pdf.png"),
      title: "03_silabus kelas x_Proyeksi",
      pdf: PDF.silabus3,
    },
    // Add more questions here
  ];

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      try {
        const storedSilabus = await AsyncStorage.getItem("silabus");
        // await AsyncStorage.removeItem("silabus");
        if (storedSilabus) {
          console.log("stored", storedSilabus);
          setPercentSilabus(JSON.parse(storedSilabus));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // }
    };

    fetchData();
  }, [isFocused]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedOpenedItemsSilabus = await AsyncStorage.getItem(
          "openedItemssilabus"
        );
        const storedCompletedItemsSilabus = await AsyncStorage.getItem(
          "completedItemssilabus"
        );
        if (storedOpenedItemsSilabus) {
          setOpenedItemsSilabus(JSON.parse(storedOpenedItemsSilabus));
        }
        if (storedCompletedItemsSilabus) {
          setCompletedItemsSilabus(JSON.parse(storedCompletedItemsSilabus));
        }
      } catch (error) {
        console.error("Failed to load items", error);
      }
    };

    loadItems();
  }, []);

  const handleItemPress = async (item) => {
    // console.log("Item pressed:", item); // Debug statement
    if (!openedItemsSilabus.includes(item.id)) {
      const newOpenedItemsSilabus = [...openedItemsSilabus, item.id];
      setOpenedItemsSilabus(newOpenedItemsSilabus);
      try {
        await AsyncStorage.setItem(
          "openedItemssilabus",
          JSON.stringify(newOpenedItemsSilabus)
        );
      } catch (error) {
        console.error("Failed to save opened items", error);
      }
    }
    navigation.navigate("PdfViewer", {
      pdf: item.pdf,
      onComplete: () => handlePdfComplete(item.id),
    });
  };

  const handlePdfComplete = async (id) => {
    let number = percentSilabus + 33;
    if (percentSilabus < 100) {
      if (number === 99) {
        await AsyncStorage.setItem("silabus", "100");
      } else {
        await AsyncStorage.setItem("silabus", JSON.stringify(number));
      }
    }
    if (!completedItemsSilabus.includes(id)) {
      const newCompletedItemsSilabus = [...completedItemsSilabus, id];
      setCompletedItems(newCompletedItemsSilabus);
      try {
        await AsyncStorage.setItem(
          "completedItemssilabus",
          JSON.stringify(newCompletedItemsSilabus)
        );
      } catch (error) {
        console.error("Failed to save completed items", error);
      }
    }
  };

  return (
    <View>
      <Header />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardPdfDocument
            item={item}
            tipe={"silabus"}
            onPress={() => handleItemPress(item)}
            isOpened={openedItemsSilabus.includes(item.id)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty />}
        // columnWrapperStyle={{ justifyContent: "space-evenly" }}
        // numColumns={2}
        style={{ marginTop: 20, marginHorizontal: 20, height: "50%" }}
        keyExtractor={(item) => item.id}
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
