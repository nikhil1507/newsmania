import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <AntDesign name="search1" color="black" size={24} />
        <Text style={styles.textInp}>Search</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginTop: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: "5%",
  },
  textInp: {
    fontFamily: "Lato",
    fontSize: 25,
    flex: 1,
    marginLeft: 10,
    color: "#dddddd",
  },
});
