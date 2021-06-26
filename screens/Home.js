import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import HeroNews from "../components/HeroNews";
import HomeNewsSlider from "../components/HomeNewsSlider";
import axios from "axios";

export default function ({ navigation }) {
  const [datas, setDatas] = useState([]);
  const [uri, setUri] = useState("");

  useEffect(() => {
    getUri();
    getDataForHome();
  }, []);

  async function getDataForHome() {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=306efa25e57d41eaa1895132f1aa1dd0"
      )
      .then((res) => setDatas(res.data.articles))
      .catch((err) => console.log(err));
  }

  async function getUri() {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=306efa25e57d41eaa1895132f1aa1dd0"
      )
      .then((res) => setUri(res.data.articles[0].urlToImage))
      .catch((err) => console.log(err));
  }

  return (
    <View style={styles.container}>
      <HeroNews
        onPressSearch={() => navigation.navigate("Search")}
        data={datas}
        onPress={() => navigation.openDrawer()}
        uri={uri}
      />
      <HomeNewsSlider data={datas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
