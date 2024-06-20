import React, { useEffect, useState } from "react";
import {
  Alert,
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
export const RppListScreen = () => {
  const navigation = useNavigation();
  const [openedItems, setOpenedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [percentRpp, setPercentRpp] = useState(0);
  const isFocused = useIsFocused();
  const data = [
    {
      id: 1,
      image: require("../assets/pdf.png"),
      title: "01_KD 3.1 4.1",
      pdf: PDF.rpp1,
    },
    {
      id: 2,
      image: require("../assets/pdf.png"),
      title: "02_KD 3.2 4.2",
      pdf: PDF.rpp2,
    },
    {
      id: 3,
      image: require("../assets/pdf.png"),
      title: "03_KD 3.3 4.3",
      pdf: PDF.rpp3,
    },
    {
      id: 4,
      image: require("../assets/pdf.png"),
      title: "04_KD 3.5 4.5",
      pdf: PDF.rpp4,
    },
    {
      id: 5,
      image: require("../assets/pdf.png"),
      title: "05_KD 3.6 4.6",
      pdf: PDF.rpp5,
    },
  ];

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      try {
        const storedRpp = await AsyncStorage.getItem("rpp");
        // await AsyncStorage.removeItem("rpp");

        if (storedRpp) {
          // console.log(storedRpp);
          setPercentRpp(JSON.parse(storedRpp));
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
        const storedOpenedItems = await AsyncStorage.getItem("openedItems");
        const storedCompletedItems = await AsyncStorage.getItem(
          "completedItems"
        );
        if (storedOpenedItems) {
          setOpenedItems(JSON.parse(storedOpenedItems));
        }
        if (storedCompletedItems) {
          setCompletedItems(JSON.parse(storedCompletedItems));
        }
      } catch (error) {
        console.error("Failed to load items", error);
      }
    };

    loadItems();
  }, []);

  const handleItemPress = async (item) => {
    // console.log("Item pressed:", item); // Debug statement
    if (!openedItems.includes(item.id)) {
      const newOpenedItems = [...openedItems, item.id];
      setOpenedItems(newOpenedItems);
      try {
        await AsyncStorage.setItem(
          "openedItems",
          JSON.stringify(newOpenedItems)
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
    let number = percentRpp + 20;
    if (percentRpp < 100) {
      await AsyncStorage.setItem("rpp", JSON.stringify(number));
    }
    if (!completedItems.includes(id)) {
      const newCompletedItems = [...completedItems, id];
      setCompletedItems(newCompletedItems);
      try {
        await AsyncStorage.setItem(
          "completedItems",
          JSON.stringify(newCompletedItems)
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
            onPress={() => handleItemPress(item)}
            isOpened={openedItems.includes(item.id)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty />}
        style={{ marginTop: 20, marginHorizontal: 20, height: "80%" }}
        keyExtractor={(item) => item.id.toString()}
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
