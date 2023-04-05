import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./Screens";
import { Image, StyleSheet, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaView>
  );
}
