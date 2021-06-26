import React from "react";
import { ScrollView, View, StyleSheet, ActivityIndicator } from "react-native";
import { default as Card } from "../components/SearchLabelCard";
import { useNavigation } from "@react-navigation/native";

export default function ({ onPress, data = [], isLoading }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        {isLoading ? (
          <ActivityIndicator color="black" size={100} />
        ) : data.length != 0 ? (
          data.map((dataVal) => (
            <Card
              imgSrc={dataVal.urlToImage}
              title={dataVal.title}
              author={dataVal.author === null ? "anonymous" : dataVal.author}
              key={dataVal.publishedAt}
              postedAt={dataVal.publishedAt.substring(0, 10)}
              onPress={() =>
                navigation.navigate("Details", {
                  title: dataVal.title,
                  imgSrc: dataVal.urlToImage,
                  description: dataVal.description,
                  label: dataVal.source.name,
                  postedBy: dataVal.author,
                  content: dataVal.content,
                  postedAt: dataVal.publishedAt.substring(0, 10),
                })
              }
            />
          ))
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 10,
  },
});
