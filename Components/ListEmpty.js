import React from "react";
import { Image, Text } from "react-native";
import { View } from "react-native";

const ListEmpty = () => {
  return (
    <View
      style={{
        height: 300,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tidak Ada Data</Text>
    </View>
  );
};

export default ListEmpty;
