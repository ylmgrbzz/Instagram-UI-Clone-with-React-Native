import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { PlusOutline } from "../../Icons";
import stories from "../../data/stories";

function Stories() {
  return (
    <ScrollView>
      {stories.map((story) => (
        <View>
          <Image
            source={{
              uri: story.avatar,
            }}
          />
          <Text>{story.user.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
    paddingBottom: 10,
  },
  story: {
    width: 68,
    marginRight: 15,
    position: "relative",
  },
  avatarParent: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2,
  },
  plus: {
    position: "absolute",
    bottom: 20,
    right: 0,
    padding: 3,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 64,
  },
  title: {
    fontSize: 13,
    marginTop: 3,
    textAlign: "center",
  },
});
