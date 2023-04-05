import { StyleSheet, View } from "react-native";
import { Chat, Heart, Logo, Plus } from "../../Icons";

function Header() {
  return (
    <View style={styles.header}>
      <Logo size={120} fill="#000" />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  actions: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 20,
    position: "relative",
  },
  notification: {
    width: 8,
    height: 8,
    backgroundColor: "#FF3450",
    borderRadius: 100,
  },
  notificationContent: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#fff",
    padding: 1.5,
  },
});