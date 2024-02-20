import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screen/LoginScreen";
import SignUpScreen from "./Screen/SignUpScreen";
import HomeScreen from "./Screen/HomeScreen";
import SubjectScreen from "./Screen/SubjectScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, StyleSheet } from "react-native";

const Stack = createStackNavigator();

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
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

export default App;
