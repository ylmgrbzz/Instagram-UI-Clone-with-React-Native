import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "./screens/Home";
import SearchScreen from "./screens/Search";
import ReelScreen from "./screens/Reel";
import ShopScreen from "./screens/Shop";
import ProfileScreen from "./screens/Profile";
import {
  HomeFilled,
  Home,
  Search,
  SearchFilled,
  Reel,
  ReelFilled,
  Shop,
  ShopFilled,
} from "./Icons";

function Screens() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#DBDBDB",
          height: 50,
          paddingTop: 15,
          paddingBottom: 15,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#333",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <HomeFilled fill={color} />;
            return <Home fill={color} />;
          },
        }}
      />
      <Tab.Screen name="search" component={SearchScreen} />
      <Tab.Screen name="reel" component={ReelScreen} />
      <Tab.Screen name="shop" component={ShopScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Screens;
