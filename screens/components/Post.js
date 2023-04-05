import { useState } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import {
  Heart,
  Comment,
  Message,
  More,
  Dots,
  Share,
  Bookmark,
} from "../../Icons";
import { dayjs } from "../../utils";
import SeeMore from "react-native-see-more-inline";
import FitImage from "./FitImage";
import ReadMore from "@fawazahmed/react-native-read-more";

const Post = ({ post }) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image style={styles.avatar} source={{ uri: post.user.avatar }} />
          <Text style={styles.title}>{post.user.name}</Text>
        </View>
        <Dots size={16} fill="#262626" />
      </View>
      <FitImage src={post.image} />
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Heart style={styles.action} size={24} fill="#222" />
          <Comment style={styles.action} size={24} fill="#222" />
          <Share style={styles.action} size={24} fill="#222" />
        </View>
        <Bookmark size={22} fill="#222" />
      </View>
      <View style={{ marginBottom: 6 }}>
        <Text style={styles.likes}>{post.likes} likes</Text>
      </View>
      <View>
        <Text>
          <ReadMore
            numberOfLines={2}
            seeLessStyle={{ color: "blue" }}
            expandOnly={true}
            seeMoreText="more"
          >
            <Text styles={styles.user} style={{ fontWeight: "600" }}>
              {post.user.name}
            </Text>
            {"  "}
            {post.description}
          </ReadMore>
        </Text>
      </View>

      <View style={{ marginTop: 7 }}>
        <Text style={styles.comments}>View all {post.comments} comments</Text>
      </View>
      <View style={{ marginTop: 7, flexDirection: "row" }}>
        <Text style={styles.time}>{dayjs(post.date).fromNow()}</Text>
        <Text style={styles.translation}>See Translation</Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    height: 49,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 49,
  },
  action: {
    marginRight: 15,
  },
  user: {
    marginLeft: 15,
  },
  inner: {
    paddingHorizontal: 15,
  },
  likes: {
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 10,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  description: {
    fontSize: 14,
    fontWeight: "normal",
  },
  post: {
    marginBottom: 20,
  },
  comments: {
    opacity: 0.5,
    fontWeight: "600",
  },
  time: {
    fontSize: 12,
    opacity: 0.5,
  },
  translation: {
    fontSize: 12,
    fontWeight: "600",
    paddingLeft: 10,
  },
  hashtag: {
    color: "#00376b",
  },
});
