import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { PlusOutline } from "../../Icons";
import stories from "../../data/stories";

function Stories() {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal={true}>
        {stories.map((story) => (
          <View style={styles.story}>
            <LinearGradient
              colors={["#DE0046", "#F7A34B"]}
              style={styles.cover}
            >
              <Image
                style={styles.avatar}
                source={{
                  uri: story.user.avatar,
                }}
              />
            </LinearGradient>
            <Text numberOfLines={1}>{story.user.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Stories;

const styles = StyleSheet.create({
  stories: {
    paddingVertically: 10,
  },

  story: {
    width: 68,
    marginHorizontal: 6,
  },

  container: {
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
    paddingBottom: 10,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
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
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 60,
  },
  title: {
    fontSize: 13,
    marginTop: 3,
    textAlign: "center",
  },
});
