import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";

const Label = ({ tag }) => {
  return (
    <View style={styles.label}>
      <Text style={{ color: "white" }}>{tag}</Text>
    </View>
  );
};

export default function ({
  newsCategoryLabel,
  mainTitle,
  description,
  onPress,
  imgSrc,
}) {
  const [loaded] = useFonts({
    Lato: require("../assets/font/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ImageBackground source={{ uri: imgSrc }} style={styles.conatiner}>
      <TouchableOpacity onPress={onPress}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          style={{ marginTop: Constants.statusBarHeight }}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Label tag={newsCategoryLabel} />
        <Text numberOfLines={3} style={styles.txt}>
          {mainTitle}
        </Text>
        <Text
          numberOfLines={2}
          style={[styles.txt, { fontSize: 17, marginTop: 20 }]}
        >
          {description}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
    resizeMode: "contain",
    padding: 20,
  },
  label: {
    backgroundColor: "#DDDDDD",
    alignSelf: "flex-start",
    opacity: 0.6,
    padding: 2,
    borderRadius: 8,
    marginBottom: 5,
  },
  titleContainer: {
    display: "flex",
    flex: 0.4,
    // backgroundColor: "red",
    position: "relative",
    top: "35%",
  },
  txt: {
    color: "white",
    fontSize: 30,
    fontFamily: "Lato",
  },
});
