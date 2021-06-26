import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

export default function ({ onPress, imgSrc, title, author, postedAt }) {
  const [loaded] = useFonts({
    Lato: require("../assets/font/Lato-Regular.ttf"),
  });
  if (!loaded) return null;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: imgSrc }} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <View
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign
              style={styles.icon}
              name="user"
              color="#444444"
              size={15}
            />
            <Text
              numberOfLines={1}
              style={[styles.txt, { marginRight: 20, width: "35%" }]}
            >
              By {author}
            </Text>
            <AntDesign
              style={styles.icon}
              name="clockcircleo"
              color="#444444"
              size={15}
            />
            <Text numberOfLines={1} style={[styles.txt, { width: "25%" }]}>
              On {postedAt}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: "Lato",
    width: 240,
  },
  txt: {
    fontFamily: "Lato",
    fontSize: 15,
    color: "#444444",
  },
  icon: {
    marginRight: 5,
  },
});
