import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import SearchBar from "../components/SearchBar";
import { useFonts } from "expo-font";
import CategoryPicker from "../components/CategoryPicker";
import { default as Results } from "../components/SearchFastQuery";
import axios from "axios";
export default function ({ navigation, onPress }) {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [loaded] = useFonts({
    Lato: require("../assets/font/Lato-Regular.ttf"),
    Abril: require("../assets/font/AbrilFatface-Regular.ttf"),
  });
  if (!loaded) return null;

  async function getData(categ) {
    setIsLoading(true);
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=${categ}&apiKey=306efa25e57d41eaa1895132f1aa1dd0`
      )
      .then((res) => setDatas(res.data.articles))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

  const handlePress = (categ) => {
    getData(categ.toLowerCase());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Discover</Text>
      <Text style={styles.label}>News from all over the world</Text>
      <SearchBar onPress={() => navigation.navigate("SearchPage")} />
      <CategoryPicker onPress={handlePress} />
      <Results isLoading={isLoading} data={datas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 10,
  },
  txt: {
    marginTop: Constants.statusBarHeight * 3,
    fontSize: 40,
    fontFamily: "Abril",
    marginBottom: 5,
  },
  label: {
    color: "#444444",
    fontFamily: "Lato",
    fontSize: 15,
  },
});
