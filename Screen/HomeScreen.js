import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const HomeScreen = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Ambil data dari sesion storage saat komponen dipasang
    const fetchData = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Welcome, {username}!</Text>
    </View>
  );
};

export default HomeScreen;
