import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const categories = [
  {
    id: 1,
    category: "Health",
  },
  {
    id: 2,
    category: "Politics",
  },
  {
    id: 3,
    category: "Art",
  },
  {
    id: 4,
    category: "Food",
  },
  {
    id: 5,
    category: "Science",
  },
  {
    id: 6,
    category: "Cryptocurrency",
  },
];

export default function ({ onPress }) {
  const [loaded] = useFonts({
    Lato: require("../assets/font/Lato-Regular.ttf"),
  });
  if (!loaded) return null;

  return (
    <View style={{ display: "flex", padding: 5 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((i) => (
          <TouchableOpacity key={i.id} onPress={() => onPress(i.category)}>
            <Label tag={i.category} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const Label = ({ tag }) => {
  return (
    <View style={styles.label}>
      <Text style={{ color: "#232323", fontSize: 25, fontFamily: "Lato" }}>
        {tag}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    backgroundColor: "#DDDDDD",
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    padding: 2,
    borderRadius: 8,
    marginRight: 10,
  },
});
