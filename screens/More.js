import React from "react";
import { ScrollView, View } from "react-native";
import { default as Card } from "../components/SearchLabelCard";
import Constants from "expo-constants";

export default function ({ navigation, route }) {
  const { datas } = route.params;
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ display: "flex", flex: 1 }}
      >
        {datas.length != 0
          ? datas.map((data) => (
              <Card
                title={data.title}
                imgSrc={data.urlToImage}
                key={data.publishedAt}
                postedAt={data.publishedAt.substring(0, 10)}
                author={data.author === null ? "anonymous" : data.author}
                onPress={() =>
                  navigation.navigate("Details", {
                    title: data.title,
                    label: data.source.name,
                    content: data.content,
                    imgSrc: data.urlToImage,
                    postedBy: data.author,
                    postedAt: data.publishedAt.substring(0, 10),
                  })
                }
              />
            ))
          : null}
      </ScrollView>
    </View>
  );
}
