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

export const ListVideoEropa = () => {
  item = {
    materi: [
      {
        tipe: "eropa",
        judulVideo: "simulasi 1",
        video: require("../assets/Video/Eropa/1.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 2",
        video: require("../assets/Video/Eropa/2.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 3",
        video: require("../assets/Video/Eropa/3.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 4",
        video: require("../assets/Video/Eropa/4.mp4"),
      },
      // {
      //   judulVideo: "simulasi 5",
      //   video: require("../assets/Video/Eropa/5.mp4"),
      // },
      {
        tipe: "eropa",
        judulVideo: "simulasi 6",
        video: require("../assets/Video/Eropa/6.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 7",
        video: require("../assets/Video/Eropa/7.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 8",
        video: require("../assets/Video/Eropa/8.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 9",
        video: require("../assets/Video/Eropa/9.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 10",
        video: require("../assets/Video/Eropa/10.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 11",
        video: require("../assets/Video/Eropa/11.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 12",
        video: require("../assets/Video/Eropa/12.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 13",
        video: require("../assets/Video/Eropa/13.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 14",
        video: require("../assets/Video/Eropa/14.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 15",
        video: require("../assets/Video/Eropa/15.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 16",
        video: require("../assets/Video/Eropa/16.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 17",
        video: require("../assets/Video/Eropa/17.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 18",
        video: require("../assets/Video/Eropa/18.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 19",
        video: require("../assets/Video/Eropa/19.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 20",
        video: require("../assets/Video/Eropa/20.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 21",
        video: require("../assets/Video/Eropa/21.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 22",
        video: require("../assets/Video/Eropa/22.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 23",
        video: require("../assets/Video/Eropa/23.mp4"),
      },
      {
        tipe: "eropa",
        judulVideo: "simulasi 24",
        video: require("../assets/Video/Eropa/24.mp4"),
      },
    ],
  };
  const navigation = useNavigation();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={item.materi}
          renderItem={({ item, index }) => (
            <CardListVideo item={item} index={index} />
          )}
          ListEmptyComponent={() => <ListEmpty />}
          ListHeaderComponent={() => (
            <View style={styles.cardJudul}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textJudul}>
                  Materi Simulasi Proyeksi Orthogonal Eropa
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
          )}
          scrollEnabled={true}
          // columnWrapperStyle={{ justifyContent: "space-evenly" }}
          numColumns={4}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 20,
    width: "95%",
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
