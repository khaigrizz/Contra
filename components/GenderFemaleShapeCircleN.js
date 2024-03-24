import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GenderFemaleShapeCircleN = ({
  genderFemaleShapeCircleNG,
  genderFemaleShapeCircleNPosition,
  genderFemaleShapeCircleNBorderRadius,
  genderFemaleShapeCircleNWidth,
  genderFemaleShapeCircleNHeight,
  genderFemaleShapeCircleNTop,
  genderFemaleShapeCircleNLeft,
}) => {
  const genderFemaleShapeCircleNStyle = useMemo(() => {
    return {
      ...getStyleValue("position", genderFemaleShapeCircleNPosition),
      ...getStyleValue("borderRadius", genderFemaleShapeCircleNBorderRadius),
      ...getStyleValue("width", genderFemaleShapeCircleNWidth),
      ...getStyleValue("height", genderFemaleShapeCircleNHeight),
      ...getStyleValue("top", genderFemaleShapeCircleNTop),
      ...getStyleValue("left", genderFemaleShapeCircleNLeft),
    };
  }, [
    genderFemaleShapeCircleNPosition,
    genderFemaleShapeCircleNBorderRadius,
    genderFemaleShapeCircleNWidth,
    genderFemaleShapeCircleNHeight,
    genderFemaleShapeCircleNTop,
    genderFemaleShapeCircleNLeft,
  ]);

  return (
    <Image
      style={[styles.genderfemaleShapecircleN, genderFemaleShapeCircleNStyle]}
      contentFit="cover"
      source={genderFemaleShapeCircleNG}
    />
  );
};

const styles = StyleSheet.create({
  genderfemaleShapecircleN: {
    borderRadius: Border.br_181xl,
    width: 200,
    height: 200,
    overflow: "hidden",
  },
});

export default GenderFemaleShapeCircleN;
