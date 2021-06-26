import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const Label = ({ tag }) => {
  return (
    <View style={styles.label}>
      <Text style={{ color: "white" }}>{tag}</Text>
    </View>
  );
};

export default function ({ onPressSearch, data, onMorePress, uri }) {
  const [loaded] = useFonts({
    Lato: require("../assets/font/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const datas = data.slice(0, 1);
  const navigation = useNavigation();
  console.log(data[0]);

  return (
    <ImageBackground
      source={{
        uri: uri,
      }}
      style={styles.conatiner}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FontAwesome5
          style={{ marginTop: Constants.statusBarHeight }}
          name="newspaper"
          color="black"
          size={50}
        />
        <TouchableOpacity onPress={onPressSearch}>
          <FontAwesome5
            style={{ marginTop: Constants.statusBarHeight }}
            name="search"
            color="black"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Label tag="News of the day" />
        <Text numberOfLines={3} style={styles.txt}>
          {datas.length === 0 ? null : datas[0].title}
        </Text>
      </View>
      <TouchableOpacity
        style={{ position: "relative", top: "45%" }}
        onPress={() =>
          navigation.navigate("Details", {
            title: data[0].title,
            imgSrc: data[0].urlToImage,
            content: data[0].content,
            label: data[0].source.name,
            postedBy: data[0].author,
            postedAt: data[0].publishedAt.substring(0, 10),
          })
        }
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontFamily: "Lato", fontSize: 25 }}>
            Learn More
          </Text>
          <AntDesign name="arrowright" color="white" size={25} />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    display: "flex",
    flex: 0.6,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    top: "40%",
  },
  txt: {
    color: "white",
    fontSize: 30,
    fontFamily: "Lato",
  },
});
