import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1ComingSoon = ({
  property1ComingSoonProper,
  property1ComingSoonPosition,
  property1ComingSoonWidth,
  property1ComingSoonTop,
  property1ComingSoonLeft,
  property1ComingSoonHeight,
}) => {
  const property1ComingSoonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1ComingSoonPosition),
      ...getStyleValue("width", property1ComingSoonWidth),
      ...getStyleValue("top", property1ComingSoonTop),
      ...getStyleValue("left", property1ComingSoonLeft),
      ...getStyleValue("height", property1ComingSoonHeight),
    };
  }, [
    property1ComingSoonPosition,
    property1ComingSoonWidth,
    property1ComingSoonTop,
    property1ComingSoonLeft,
    property1ComingSoonHeight,
  ]);

  return (
    <Image
      style={[styles.property1comingSoon, property1ComingSoonStyle]}
      contentFit="cover"
      source={property1ComingSoonProper}
    />
  );
};

const styles = StyleSheet.create({
  property1comingSoon: {
    width: 528,
    height: 263,
  },
});

export default Property1ComingSoon;
