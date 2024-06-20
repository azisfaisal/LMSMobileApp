import React from "react";
import { FlatList, Text, View } from "react-native";
import { Header } from "../Components/Header";
import { CardSimulasi } from "../Components/CardSimulasi";
import ListEmpty from "../Components/ListEmpty";

export const SimulationScreen = () => {
  const dataSimulasi = [
    {
      judul: "Proyeksi Orthogonal Amerika",
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
    },
    {
      judul: "Proyeksi Orthogonal Eropa",
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
    },
  ];
  return (
    <View>
      <Header />
      <FlatList
        data={dataSimulasi}
        renderItem={({ item }) => <CardSimulasi item={item} />}
        ListEmptyComponent={() => <ListEmpty />}
        // columnWrapperStyle={{ justifyContent: "space-evenly" }}
        // numColumns={2}
        style={{ marginTop: 20, marginHorizontal: 20 }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
