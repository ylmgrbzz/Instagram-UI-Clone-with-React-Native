import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { useState } from "react";

function FitImage({ src }) {
  const [height, setHeight] = useState(0);

  const screenWidth = Dimensions.get("window").width;
  Image.getSize(src, (width, height) => {
    const ratio = width / screenWidth;
    setHeight(height / ratio);
  });
  return (
    <Image
      style={{
        width: screenWidth,
        height: height,
      }}
      source={{
        uri: src,
      }}
    />
  );
}

export default FitImage;
