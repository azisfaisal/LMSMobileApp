import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { COLORS } from "../Config";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { AntDesign } from "@expo/vector-icons";

export const VideoPlayerScreen = ({ route }) => {
  const item = route.params;
  const video = useRef(null);
  const [isFinished, setIsFinished] = useState(false);
  const [percentSimulasi, setPercentSimulasi] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      try {
        const storedSimulasi = await AsyncStorage.getItem("simulasi");

        if (storedSimulasi) {
          console.log(storedSimulasi);
          setPercentSimulasi(JSON.parse(storedSimulasi));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // }
    };

    fetchData();
  }, [isFocused, percentSimulasi]);

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setIsFinished(true);
    }
  };

  const resultSimulasi = async (number) => {
    // Validasi dan simpan data di sesion storage
    if (number === 94) {
      await AsyncStorage.setItem("simulasi", "100");
    } else {
      await AsyncStorage.setItem("simulasi", JSON.stringify(number));
    }
  };

  useEffect(() => {
    let number = percentSimulasi + 1 * 2;
    if (isFinished === true && percentSimulasi < 100) {
      resultSimulasi(number);
    }
  }, [isFinished, percentSimulasi]);

  console.log(isFinished);

  const navigation = useNavigation();
  videoListAmerika = [
    {
      judulVideo: "simulasi 1",
      video: require("../assets/Video/Amerika/1.mp4"),
    },
    {
      judulVideo: "simulasi 2",
      video: require("../assets/Video/Amerika/2.mp4"),
    },
    {
      judulVideo: "simulasi 3",
      video: require("../assets/Video/Amerika/3.mp4"),
    },
    {
      judulVideo: "simulasi 4",
      video: require("../assets/Video/Amerika/4.mp4"),
    },
    {
      judulVideo: "simulasi 5",
      video: require("../assets/Video/Amerika/5.mp4"),
    },
    {
      judulVideo: "simulasi 6",
      video: require("../assets/Video/Amerika/6.mp4"),
    },
    {
      judulVideo: "simulasi 7",
      video: require("../assets/Video/Amerika/7.mp4"),
    },
    {
      judulVideo: "simulasi 8",
      video: require("../assets/Video/Amerika/8.mp4"),
    },
    {
      judulVideo: "simulasi 9",
      video: require("../assets/Video/Amerika/9.mp4"),
    },
    {
      judulVideo: "simulasi 10",
      video: require("../assets/Video/Amerika/10.mp4"),
    },
    {
      judulVideo: "simulasi 11",
      video: require("../assets/Video/Amerika/11.mp4"),
    },
    {
      judulVideo: "simulasi 12",
      video: require("../assets/Video/Amerika/12.mp4"),
    },
    {
      judulVideo: "simulasi 13",
      video: require("../assets/Video/Amerika/13.mp4"),
    },
    {
      judulVideo: "simulasi 14",
      video: require("../assets/Video/Amerika/14.mp4"),
    },
    {
      judulVideo: "simulasi 15",
      video: require("../assets/Video/Amerika/15.mp4"),
    },
    {
      judulVideo: "simulasi 16",
      video: require("../assets/Video/Amerika/16.mp4"),
    },
    {
      judulVideo: "simulasi 17",
      video: require("../assets/Video/Amerika/17.mp4"),
    },
    {
      judulVideo: "simulasi 18",
      video: require("../assets/Video/Amerika/18.mp4"),
    },
    {
      judulVideo: "simulasi 19",
      video: require("../assets/Video/Amerika/19.mp4"),
    },
    {
      judulVideo: "simulasi 20",
      video: require("../assets/Video/Amerika/20.mp4"),
    },
    {
      judulVideo: "simulasi 21",
      video: require("../assets/Video/Amerika/21.mp4"),
    },
    {
      judulVideo: "simulasi 22",
      video: require("../assets/Video/Amerika/22.mp4"),
    },
    {
      judulVideo: "simulasi 23",
      video: require("../assets/Video/Amerika/23.mp4"),
    },
    {
      judulVideo: "simulasi 24",
      video: require("../assets/Video/Amerika/24.mp4"),
    },
  ];

  videoListEropa = [
    {
      judulVideo: "simulasi 1",
      video: require("../assets/Video/Eropa/1.mp4"),
    },
    {
      judulVideo: "simulasi 2",
      video: require("../assets/Video/Eropa/2.mp4"),
    },
    {
      judulVideo: "simulasi 3",
      video: require("../assets/Video/Eropa/3.mp4"),
    },
    {
      judulVideo: "simulasi 4",
      video: require("../assets/Video/Eropa/4.mp4"),
    },
    // {
    //   judulVideo: "simulasi 5",
    //   video: require("../assets/Video/Eropa/5.mp4"),
    // },
    {
      judulVideo: "simulasi 6",
      video: require("../assets/Video/Eropa/6.mp4"),
    },
    {
      judulVideo: "simulasi 7",
      video: require("../assets/Video/Eropa/7.mp4"),
    },
    {
      judulVideo: "simulasi 8",
      video: require("../assets/Video/Eropa/8.mp4"),
    },
    {
      judulVideo: "simulasi 9",
      video: require("../assets/Video/Eropa/9.mp4"),
    },
    {
      judulVideo: "simulasi 10",
      video: require("../assets/Video/Eropa/10.mp4"),
    },
    {
      judulVideo: "simulasi 11",
      video: require("../assets/Video/Eropa/11.mp4"),
    },
    {
      judulVideo: "simulasi 12",
      video: require("../assets/Video/Eropa/12.mp4"),
    },
    {
      judulVideo: "simulasi 13",
      video: require("../assets/Video/Eropa/13.mp4"),
    },
    {
      judulVideo: "simulasi 14",
      video: require("../assets/Video/Eropa/14.mp4"),
    },
    {
      judulVideo: "simulasi 15",
      video: require("../assets/Video/Eropa/15.mp4"),
    },
    {
      judulVideo: "simulasi 16",
      video: require("../assets/Video/Eropa/16.mp4"),
    },
    {
      judulVideo: "simulasi 17",
      video: require("../assets/Video/Eropa/17.mp4"),
    },
    {
      judulVideo: "simulasi 18",
      video: require("../assets/Video/Eropa/18.mp4"),
    },
    {
      judulVideo: "simulasi 19",
      video: require("../assets/Video/Eropa/19.mp4"),
    },
    {
      judulVideo: "simulasi 20",
      video: require("../assets/Video/Eropa/20.mp4"),
    },
    {
      judulVideo: "simulasi 21",
      video: require("../assets/Video/Eropa/21.mp4"),
    },
    {
      judulVideo: "simulasi 22",
      video: require("../assets/Video/Eropa/22.mp4"),
    },
    {
      judulVideo: "simulasi 23",
      video: require("../assets/Video/Eropa/23.mp4"),
    },
    {
      judulVideo: "simulasi 24",
      video: require("../assets/Video/Eropa/24.mp4"),
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    setCurrentVideoIndex(item?.index);
  }, []);

  const handleNextVideo = () => {
    if (item?.tipe === "amerika") {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoListAmerika.length
      );
    } else {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoListEropa.length
      );
    }
  };

  const handlePrevVideo = () => {
    if (item?.tipe === "amerika") {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex - 1) % videoListAmerika.length
      );
    } else {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex - 1) % videoListEropa.length
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View
          style={{
            height: 250,
            width: "80%",
            marginVertical: 10,
            flexDirection: "row",
          }}
        >
          <Video
            ref={video}
            style={styles.video}
            source={
              // uri: item,
              item?.tipe === "amerika"
                ? videoListAmerika[currentVideoIndex].video
                : videoListEropa[currentVideoIndex].video
              // videoListAmerika[currentVideoIndex].video
            }
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            vide
            isLooping
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            shouldPlay
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="closecircleo" size={24} color={COLORS.secondary} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapButton}>
          {currentVideoIndex === 0 ? null : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handlePrevVideo();
              }}
            >
              <Text style={styles.textButton}>Sebelumnya</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleNextVideo();
              setIsFinished(false);
            }}
          >
            <Text style={styles.textButton}>Selanjutnya</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
  button: {
    padding: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    alignItems: "center",
    width: 150,
  },
  textButton: {
    color: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  wrapButton: {
    flexDirection: "row",
    gap: 10,
  },
});
