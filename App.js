import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screen/LoginScreen";
import SignUpScreen from "./Screen/SignUpScreen";
import HomeScreen from "./Screen/HomeScreen";
import SubjectScreen from "./Screen/SubjectScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { TutorialScreen } from "./Screen/TutorialScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabs } from "./Screen/MyTabs";
import { Main } from "./Screen/Main";
import { EvaluationScreen } from "./Screen/EvaluationScreen";
import { SimulationScreen } from "./Screen/SimulationScreen";
import { AboutScreen } from "./Screen/AboutScreen";
import { DescriptionScreen } from "./Screen/DescriptionScreen";
import { ProfileScreen } from "./Screen/ProfileScreen";
import { QuestionScreen } from "./Screen/QuestionScreen";
import { ResultScreen } from "./Screen/ResultScreen";
import { PdfViewer } from "./Screen/PdfViewer";
import { SilabusListScreen } from "./Screen/SilabusListScreen";
import { RppListScreen } from "./Screen/RppListScreen";
import { TermsAndConsScreen } from "./Screen/TermsAndConsScreen";
import { DetailHistoryScreen } from "./Screen/DetailHistoryScreen";
import { DetailBarScreen } from "./Screen/DetailBarScreen";
import { ListHistoryScreen } from "./Screen/ListHistoryScreen";
import { ListVideo } from "./Screen/ListVideo";
import { VideoPlayerScreen } from "./Screen/VideoPlayerScreen";
import { ListVideoEropa } from "./Screen/ListVideoEropa";
import AsyncStorage from "@react-native-community/async-storage";
import { Loading } from "./Components/Loading";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Sembunyikan header
        orientation: "landscape", // Atur orientasi landscape
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Rpp" component={RppListScreen} />
      <Stack.Screen name="DetailHistory" component={DetailHistoryScreen} />
      <Stack.Screen name="DetailBar" component={DetailBarScreen} />
      <Stack.Screen name="Silabus" component={SilabusListScreen} />
      <Stack.Screen name="ListVideo" component={ListVideo} />
      <Stack.Screen name="ListVideoEropa" component={ListVideoEropa} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ListHistory" component={ListHistoryScreen} />
      {/* Tambahkan halaman lain yang perlu navigasi di sini */}
    </Stack.Navigator>
  );
};

function AuthenticatedStack({ route }) {
  return (
    <SafeAreaView style={styles.rootScreen}>
      <StatusBar />
      <Stack.Navigator
        initialRouteName={route}
        screenOptions={{
          headerShown: false, // Sembunyikan header
          orientation: "landscape", // Atur orientasi landscape
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Subject" component={SubjectScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Pertanyaan" component={QuestionScreen} />
        <Stack.Screen name="Hasil" component={ResultScreen} />
        <Stack.Screen name="PdfViewer" component={PdfViewer} />
        <Stack.Screen name="Silabus" component={SilabusListScreen} />
        <Stack.Screen name="Rpp" component={RppListScreen} />
        <Stack.Screen name="TNC" component={TermsAndConsScreen} />
        <Stack.Screen name="DetailHistory" component={DetailHistoryScreen} />
        <Stack.Screen name="DetailBar" component={DetailBarScreen} />
        {/* <Stack.Screen name="ListVideo" component={ListVideo} />
          <Stack.Screen name="ListVideoEropa" component={ListVideoEropa} /> */}
        <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
function App() {
  const [route, setRoute] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("username")
      .then((storedUsername) => {
        if (storedUsername === null) {
          setRoute("SignUp");
        } else {
          setRoute("Main");
        }
      })
      .catch((error) => {
        console.error("Error fetching username:", error);
        setRoute("SignUp"); // fallback to login on error
      });
  }, []);
  console.log(route);
  return (
    <NavigationContainer>
      {route === "" ? <Loading /> : <AuthenticatedStack route={route} />}
    </NavigationContainer>
  );
}

export default App;

export const BottomTabs = () => {
  return (
    <View style={{ height: Platform.OS === "ios" ? "100%" : height }}>
      <Tab.Navigator
        tabBar={(props) => <MyTabs {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Evaluasi"
          component={EvaluationScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Simulasi"
          component={SimulationScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tentang"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Deskripsi"
          component={DescriptionScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
};

// export const BottomTabsSimulasi = () => {
//   return (
//     <View style={{ height: Platform.OS === "ios" ? "100%" : height }}>
//       <Tab.Navigator
//         tabBar={(props) => <MyTabsSimulation {...props} />}
//         initialRouteName="ListVideo"
//       >
//         <Tab.Screen
//           name="ListVideo"
//           component={ListVideo}
//           options={{ headerShown: false }}
//         />
//         <Tab.Screen
//           name="ListVideoEropa"
//           component={ListVideoEropa}
//           options={{ headerShown: false }}
//         />
//       </Tab.Navigator>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
