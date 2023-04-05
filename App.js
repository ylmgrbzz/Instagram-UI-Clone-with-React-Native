// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./Screens";

export default function App() {
  return (
    <NavigationContainer>
      <Screens />
      {/* <Text>Hello, world!</Text> */}
    </NavigationContainer>
  );
}
