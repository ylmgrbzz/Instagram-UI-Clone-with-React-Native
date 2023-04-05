import React from "react";
import {
  View,
  Text,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "./components/Post";
import posts from "../data/posts";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
