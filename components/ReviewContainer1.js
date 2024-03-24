import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ReviewContainer1 = ({
  dimensionCode,
  dimensionValues,
  productDimensions,
  generalImageSquareTop,
  generalImageSquareBottom,
  textWidth,
  textHeight,
}) => {
  const reviewCardStyle = useMemo(() => {
    return {
      ...getStyleValue("top", generalImageSquareTop),
      ...getStyleValue("bottom", generalImageSquareBottom),
    };
  }, [generalImageSquareTop, generalImageSquareBottom]);

  const generalImageSquareStyle = useMemo(() => {
    return {
      ...getStyleValue("width", textWidth),
      ...getStyleValue("height", textHeight),
    };
  }, [textWidth, textHeight]);

  return (
    <View style={[styles.reviewCard, styles.reviewCardLayout, reviewCardStyle]}>
      <View style={[styles.reviewCardChild, styles.reviewCardLayout]} />
      <Text style={styles.leonardoDaVinci}>Leonardo Da Vinci</Text>
      <Text style={[styles.lovedTheCourse, styles.todayTypo]}>
        Loved the course. I've learned some very subtle tecniques, expecially on
        leaves.
      </Text>
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <Image
        style={[styles.generalImageSquare, generalImageSquareStyle]}
        contentFit="cover"
        source={dimensionCode}
      />
      <Image
        style={styles.reviewCardItem}
        contentFit="cover"
        source={dimensionValues}
      />
      <View style={[styles.likesDislikes, styles.textPosition]}>
        <View style={styles.dislikes}>
          <Image
            style={[styles.thumbsUpIcon, styles.textPosition]}
            contentFit="cover"
            source={require("../assets/thumbsup.png")}
          />
          <Text style={[styles.text, styles.textPosition]}>12</Text>
        </View>
        <View style={styles.likes}>
          <Image
            style={[styles.thumbsUpIcon, styles.textPosition]}
            contentFit="cover"
            source={productDimensions}
          />
          <Text style={[styles.text, styles.textPosition]}>3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCardLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  todayTypo: {
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  reviewCardChild: {
    top: -6,
    left: -6,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGray_1100,
    borderWidth: 1,
    width: 309,
    height: 61,
  },
  leonardoDaVinci: {
    marginTop: -21.5,
    fontSize: FontSize.size_3xs_5,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.universe,
    textAlign: "left",
    left: 38,
    top: "50%",
    position: "absolute",
  },
  lovedTheCourse: {
    marginTop: -1,
    fontSize: FontSize.size_3xs,
    lineHeight: 13,
    color: Color.objectBlack60,
    width: 244,
    height: 27,
    left: 38,
  },
  today: {
    marginTop: -10.5,
    right: 239,
    fontSize: FontSize.size_5xs_2,
    lineHeight: 11,
    color: Color.colorGray_1200,
  },
  generalImageSquare: {
    top: 9,
    borderRadius: 18,
    width: 29,
    height: 29,
    left: 0,
    position: "absolute",
  },
  reviewCardItem: {
    top: 4,
    left: 138,
    width: 51,
    height: 11,
    position: "absolute",
  },
  thumbsUpIcon: {
    width: 9,
    overflow: "hidden",
    height: 9,
    left: 0,
  },
  text: {
    left: 12,
    fontSize: FontSize.size_5xs_4,
    letterSpacing: 0.1,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.subtitleTextColor,
    textAlign: "left",
  },
  dislikes: {
    width: 21,
    height: 9,
  },
  likes: {
    width: 17,
    marginLeft: 12.25,
    height: 9,
  },
  likesDislikes: {
    left: 232,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 6,
  },
  reviewCard: {
    height: "6.03%",
    width: "79.09%",
    top: "70.81%",
    right: "10.24%",
    bottom: "23.15%",
    left: "10.67%",
  },
});

export default ReviewContainer1;
