import React, { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import Home from "./screens/Home";
import SearchPage from "./screens/SearchPage";
import Details from "./screens/Details";
import Search from "./screens/Search";
import More from "./screens/More";
import axios from "axios";

const contextProvider = React.createContext(null);

export default function App() {
  const scheme = useColorScheme();
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Navigator>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen name="Search" options={{ headerShown: false }}>
          {(props) => <Search {...props} />}
        </Screen>
        <Screen
          name="SearchPage"
          component={SearchPage}
          options={{ headerShown: false }}
        />
        <Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Screen name="More" component={More} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}

export { contextProvider };
