import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoadingView = () => (
  <View style={[styles.container, styles.centeredContainer]}>
    <Text style={styles.heading}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default LoadingView;
