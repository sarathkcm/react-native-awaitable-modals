import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ModalContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "space-between",
  },
});
