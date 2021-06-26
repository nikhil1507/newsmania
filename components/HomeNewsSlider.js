import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import HomeCard from "./HomeCard";
import { useNavigation } from "@react-navigation/native";

export default function ({ onPress, data = [] }) {
  const [loaded] = useFonts({
    Lato: require("../assets/font/Lato-Regular.ttf"),
    Abril: require("../assets/font/AbrilFatface-Regular.ttf"),
  });
  if (!loaded) return null;

  const datas = data.slice(1, 6);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.txt}>Breaking News</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("More", { datas: data })}
        >
          <Text style={[styles.txt, { fontSize: 20 }]}>More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ display: "flex", flex: 1 }}
      >
        {datas.map((dataVal) => (
          <HomeCard
            key={dataVal.publishedAt}
            title={dataVal.title}
            onPress={() =>
              navigation.navigate("Details", {
                title: dataVal.title,
                imgSrc: dataVal.urlToImage,
                description: dataVal.description,
                postedBy:
                  dataVal.author === null ? "By anonymous" : dataVal.author,
                content: dataVal.content,
                label: dataVal.source.name,
                postedAt: dataVal.publishedAt.substring(0, 10),
              })
            }
            author={dataVal.author === null ? "anonymous" : dataVal.author}
            imgSrc={dataVal.urlToImage}
            postedAt={dataVal.publishedAt.substring(0, 10)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 0.4,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginTop: 10,
  },
  txt: {
    fontFamily: "Abril",
    color: "black",
    fontSize: 25,
  },
});
