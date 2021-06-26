import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import DetailsIntro from "../components/DetailsIntro";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function ({ navigation, route }) {
  const [loaded] = useFonts({
    Lato: require("../assets/font/Lato-Regular.ttf"),
  });
  if (!loaded) return null;
  return (
    <View style={styles.container}>
      <DetailsIntro
        mainTitle={route.params.title}
        imgSrc={route.params.imgSrc}
        description={route.params.description}
        newsCategoryLabel={route.params.label}
        onPress={() => navigation.pop()}
      />
      <ScrollView style={styles.details}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Label name="user" tag={route.params.postedBy} />
          <Label name="clockcircleo" tag={route.params.postedAt} />
        </View>
        <Text style={styles.txt}>{route.params.content}</Text>
      </ScrollView>
    </View>
  );
}

const Label = ({ tag, name }) => {
  return (
    <View style={styles.label}>
      <AntDesign name={name} color="#444444" size={20} />
      <Text
        numberOfLines={1}
        style={{ color: "black", fontSize: 20, marginLeft: 5 }}
      >
        {tag}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  details: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 0.4,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  label: {
    backgroundColor: "#DDDDDD",
    width: "40%",
    justifyContent: "space-between",
    opacity: 0.6,
    padding: 4,
    borderRadius: 8,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  txt: {
    fontFamily: "Lato",
    fontSize: 20,
    textAlign: "justify",
  },
});
