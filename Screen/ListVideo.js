import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import ListEmpty from "../Components/ListEmpty";
import { CardListVideo } from "../Components/CardListVideo";
import { COLORS } from "../Config";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ListVideo = ({ route }) => {
  // const item = route.params;
  item = {
    materi: [
      {
        tipe: "amerika",
        judulVideo: "simulasi 1",
        video: require("../assets/Video/Amerika/1.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 2",
        video: require("../assets/Video/Amerika/2.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 3",
        video: require("../assets/Video/Amerika/3.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 4",
        video: require("../assets/Video/Amerika/4.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 5",
        video: require("../assets/Video/Amerika/5.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 6",
        video: require("../assets/Video/Amerika/6.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 7",
        video: require("../assets/Video/Amerika/7.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 8",
        video: require("../assets/Video/Amerika/8.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 9",
        video: require("../assets/Video/Amerika/9.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 10",
        video: require("../assets/Video/Amerika/10.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 11",
        video: require("../assets/Video/Amerika/11.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 12",
        video: require("../assets/Video/Amerika/12.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 13",
        video: require("../assets/Video/Amerika/13.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 14",
        video: require("../assets/Video/Amerika/14.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 15",
        video: require("../assets/Video/Amerika/15.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 16",
        video: require("../assets/Video/Amerika/16.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 17",
        video: require("../assets/Video/Amerika/17.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 18",
        video: require("../assets/Video/Amerika/18.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 19",
        video: require("../assets/Video/Amerika/19.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 20",
        video: require("../assets/Video/Amerika/20.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 21",
        video: require("../assets/Video/Amerika/21.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 22",
        video: require("../assets/Video/Amerika/22.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 23",
        video: require("../assets/Video/Amerika/23.mp4"),
      },
      {
        tipe: "amerika",
        judulVideo: "simulasi 24",
        video: require("../assets/Video/Amerika/24.mp4"),
      },
    ],
  };

  const navigation = useNavigation();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Header />
      <View style={styles.container}>
        <View style={styles.cardJudul}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.textJudul}>
              Materi Simulasi Proyeksi Orthogonal Amerika
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Simulasi");
              }}
            >
              <Ionicons
                name="arrow-back-circle-outline"
                size={30}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </View>
        <FlatList
          data={item.materi}
          renderItem={({ item, index }) => (
            <CardListVideo item={item} index={index} />
          )}
          ListEmptyComponent={() => <ListEmpty />}
          scrollEnabled={true}
          // columnWrapperStyle={{ justifyContent: "space-evenly" }}
          numColumns={4}
          style={{}}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 20,
    width: "95%",
    marginBottom: 50,
    height: "53%",
  },
  cardJudul: {
    marginHorizontal: 40,
  },
  textJudul: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  line: {
    width: 50,
    height: 3,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginTop: 20,
  },
});
