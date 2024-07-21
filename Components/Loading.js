import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { COLORS } from "../Config";

export const Loading = () => {
  return (
    <Spinner
      visible={true}
      size="large"
      textStyle={styles.spinnerTextStyle}
      color={COLORS.primary}
    />
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#000",
  },
});
