import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ({ imgSrc, title, author, postedAt, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            height: 150,
            width: 200,
            resizeMode: "cover",
            borderRadius: 10,
          }}
          source={{ uri: imgSrc }}
        />
      </TouchableOpacity>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.labels}>On {postedAt}</Text>
      <Text numberOfLines={1} style={styles.labels}>
        By {author}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 250,
    padding: 10,
    alignSelf: "flex-start",
  },
  title: {
    color: "black",
    fontFamily: "Lato",
    fontSize: 20,
    marginBottom: 5,
  },
  labels: {
    fontFamily: "Lato",
    fontSize: 15,
    color: "#444444",
  },
});
