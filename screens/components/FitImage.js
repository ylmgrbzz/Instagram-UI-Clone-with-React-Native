import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

const FitImage = ({ src }) => {
  const width = Dimensions.get("window").width;
  const ratio = 1080 / width;
  const height = 607 / ratio;

  return (
    <Image
      style={{
        width: width,
        height: height,
      }}
      source={{
        uri: src,
      }}
    />
  );
};

export default FitImage;
