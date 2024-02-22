import React from "react";
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.rootScreen}>
        <StatusBar />
        <Stack.Navigator
          initialRouteName="Login"
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
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export const BottomTabs = () => {
  return (
    <View style={{ height: Platform.OS === "ios" ? "100%" : height }}>
      <Tab.Navigator
        tabBar={(props) => <MyTabs {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

export default App;
