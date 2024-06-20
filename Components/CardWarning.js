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
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

export const CardWarning = ({
  contain,
  modalWarning,
  closeWarning,
  containTrue,
  containFalse,
  setModalValidation,
  save,
  setSave,
  handleSaveHistory,
  questionDone,
  saveScore,
  deleteObject,
  history,
  indexDelete,
  setHistory,
}) => {
  //   useEffect(() => {
  //     if (modalWarning) {
  //         const timeout = setTimeout(() => {
  //           closeWarning();
  //         }, 2000); // Change the duration as needed (in milliseconds)
  //         return () => clearTimeout(timeout);
  //     }
  //   }, [modalWarning, closeWarning]);
  const navigation = useNavigation();

  const resultEvaluasi = async () => {
    // Validasi dan simpan data di sesion storage
    await AsyncStorage.setItem("evaluasi", "100");
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalWarning}
      onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // setModalVisible(!modalVisible);
        closeWarning();
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
          <View style={styles.headerStyle}>
            <Text style={styles.warningText}>PERINGATAN</Text>
          </View>
          <Text style={styles.contain}>{contain}</Text>
          <View>
            <View style={styles.wrapButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (save) {
                    handleSaveHistory();
                    closeWarning();
                    setModalValidation(true);
                    navigation.navigate("Home");
                  } else if (questionDone) {
                    // resultEvaluasi();
                    navigation.navigate("Hasil");
                    closeWarning();
                  } else if (history) {
                    deleteObject(indexDelete);
                    closeWarning();
                    setModalValidation(true);
                    // setHistory(false);
                  } else {
                    closeWarning();
                    setModalValidation(true);
                    navigation.navigate("Home");
                  }
                }}
              >
                <Text style={styles.textButton}>{containTrue}</Text>
              </TouchableOpacity>
              {!questionDone ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    if (save) {
                      setSave(false);
                    } else if (setHistory) {
                      setHistory(false);
                    }
                    closeWarning();
                  }}
                >
                  <Text style={styles.textButton}>{containFalse}</Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    color: COLORS.secondary,
    width: 400,
    marginTop: 20,
  },
  headerStyle: {
    backgroundColor: COLORS.secondary,
    width: 500,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  warningText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
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
  wrapButton: {
    flexDirection: "row",
    gap: 20,
    marginTop: 40,
    marginBottom: 20,
  },
});
