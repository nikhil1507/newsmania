import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { default as Results } from "../components/SearchFastQuery";

export default function ({ navigation }) {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [loaded] = useFonts({
    Lato: require("../assets/font/Lato-Regular.ttf"),
  });
  if (!loaded) return null;

  async function getData() {
    setIsLoading(true);
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=306efa25e57d41eaa1895132f1aa1dd0`
      )
      .then((res) => setDatas(res.data.articles))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

  const handleSearch = () => {
    getData();
    setSearch("");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
          <AntDesign
            name="arrowleft"
            size={30}
            color="black"
            style={{
              marginTop: Constants.statusBarHeight * 1.5,
            }}
          />
        </TouchableWithoutFeedback>
        <TextInput
          selectionColor="gray"
          style={styles.inp}
          value={search}
          placeholder="Search"
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <AntDesign
            style={{ marginTop: Constants.statusBarHeight * 1.5 }}
            name="arrowright"
            color="#444444"
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderBottomWidth: 2, borderColor: "#eee", marginVertical: 5 }}
      ></View>
      <Results isLoading={isLoading} data={datas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  inp: {
    marginTop: Constants.statusBarHeight * 1.5,
    padding: 10,
    fontFamily: "Lato",
    fontSize: 20,
    width: "70%",
  },
});
