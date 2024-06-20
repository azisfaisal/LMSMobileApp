import React, { useEffect, useState } from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../Config";
import { Entypo } from "@expo/vector-icons";

export const Validation = ({ contain, modalValidation, closeValidation }) => {
  useEffect(() => {
    if (modalValidation) {
      const timeout = setTimeout(() => {
        closeValidation();
      }, 2000); // Change the duration as needed (in milliseconds)

      return () => clearTimeout(timeout);
    }
  }, [modalValidation, closeValidation]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalValidation}
      onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // setModalVisible(!modalVisible);
        closeValidation();
      }}
    >
      <TouchableOpacity
        style={[
          Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
      />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Entypo name="check" size={150} color="white" />
          <Text style={styles.contain}>{contain}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "rgba(86, 169, 170, 0.78)",
    borderRadius: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 40,
  },

  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.7,
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.7,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  contain: {
    color: "white",
  },
});
