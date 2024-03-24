import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Ended = ({
  image88,
  group6,
  antDesignstarFilled,
  component1,
  group,
  group1,
  property1EndedPosition,
  property1EndedBorderRadius,
  property1EndedElevation,
  property1EndedWidth,
  property1EndedHeight,
  property1EndedTop,
  property1EndedLeft,
  image88IconBorderTopLeftRadius,
  image88IconBorderBottomLeftRadius,
  image88IconWidth,
  image88IconHeight,
  rectangleViewHeight,
  rectangleViewWidth,
  rectangleViewTop,
  rectangleViewRight,
  rectangleViewBottom,
  rectangleViewLeft,
  pestaKitaMarketTop,
  pestaKitaMarketLeft,
  pestaKitaMarketFontSize,
  pestaKitaMarketLineHeight,
  pestaKitaMarketWidth,
  groupViewHeight,
  groupViewWidth,
  groupViewTop,
  groupViewRight,
  groupViewBottom,
  groupViewLeft,
  minTop,
  minLeft,
  minFontSize,
  groupIconWidth,
  groupIconRight,
  groupIconHeight,
  groupIconBottom,
  frameViewHeight,
  frameViewWidth,
  frameViewRight,
  frameViewBottom,
  frameViewTop,
  frameViewLeft,
  antDesignstarFilledIconWidth,
  antDesignstarFilledIconHeight,
  textFontSize,
  textLineHeight,
  textMarginLeft,
  rectangleViewHeight1,
  rectangleViewWidth1,
  rectangleViewTop1,
  rectangleViewRight1,
  rectangleViewBottom1,
  rectangleViewBorderRadius,
  kTop,
  kLeft,
  kFontSize,
  kLineHeight,
  component1IconHeight,
  component1IconWidth,
  component1IconTop,
  component1IconRight,
  component1IconBottom,
  component1IconLeft,
  descriptionTop,
  descriptionLeft,
  descriptionFontSize,
  descriptionWidth,
  dateTop,
  dateLeft,
  dateFontSize,
  dateLineHeight,
  dateWidth,
  dateHeight,
  circleUsersMarginTop,
  circleUsersMarginLeft,
  circleUsersWidth,
  circleUsersHeight,
  groupIconHeight1,
  groupIconWidth1,
  groupIconRight1,
  groupIconBottom1,
  groupIconHeight2,
  groupIconWidth2,
  groupIconTop,
  groupIconRight2,
  groupIconBottom2,
  kLikedTop,
  kLikedLeft,
  kLikedFontSize,
  kLikedLineHeight,
  vendorsTop,
  vendorsLeft,
  vendorsFontSize,
  vendorsLineHeight,
  frameViewTop1,
  frameViewLeft1,
  frameViewBorderRadius,
  frameViewElevation,
  frameViewWidth1,
  frameViewHeight1,
  frameViewPadding,
  armanRokniFontSize,
  armanRokniLineHeight,
  armanRokniWidth,
}) => {
  const property1EndedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1EndedPosition),
      ...getStyleValue("borderRadius", property1EndedBorderRadius),
      ...getStyleValue("elevation", property1EndedElevation),
      ...getStyleValue("width", property1EndedWidth),
      ...getStyleValue("height", property1EndedHeight),
      ...getStyleValue("top", property1EndedTop),
      ...getStyleValue("left", property1EndedLeft),
    };
  }, [
    property1EndedPosition,
    property1EndedBorderRadius,
    property1EndedElevation,
    property1EndedWidth,
    property1EndedHeight,
    property1EndedTop,
    property1EndedLeft,
  ]);

  const image88IconStyle = useMemo(() => {
    return {
      ...getStyleValue("borderTopLeftRadius", image88IconBorderTopLeftRadius),
      ...getStyleValue(
        "borderBottomLeftRadius",
        image88IconBorderBottomLeftRadius
      ),
      ...getStyleValue("width", image88IconWidth),
      ...getStyleValue("height", image88IconHeight),
    };
  }, [
    image88IconBorderTopLeftRadius,
    image88IconBorderBottomLeftRadius,
    image88IconWidth,
    image88IconHeight,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", rectangleViewHeight),
      ...getStyleValue("width", rectangleViewWidth),
      ...getStyleValue("top", rectangleViewTop),
      ...getStyleValue("right", rectangleViewRight),
      ...getStyleValue("bottom", rectangleViewBottom),
      ...getStyleValue("left", rectangleViewLeft),
    };
  }, [
    rectangleViewHeight,
    rectangleViewWidth,
    rectangleViewTop,
    rectangleViewRight,
    rectangleViewBottom,
    rectangleViewLeft,
  ]);

  const pestaKitaMarketStyle = useMemo(() => {
    return {
      ...getStyleValue("top", pestaKitaMarketTop),
      ...getStyleValue("left", pestaKitaMarketLeft),
      ...getStyleValue("fontSize", pestaKitaMarketFontSize),
      ...getStyleValue("lineHeight", pestaKitaMarketLineHeight),
      ...getStyleValue("width", pestaKitaMarketWidth),
    };
  }, [
    pestaKitaMarketTop,
    pestaKitaMarketLeft,
    pestaKitaMarketFontSize,
    pestaKitaMarketLineHeight,
    pestaKitaMarketWidth,
  ]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", groupViewHeight),
      ...getStyleValue("width", groupViewWidth),
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("right", groupViewRight),
      ...getStyleValue("bottom", groupViewBottom),
      ...getStyleValue("left", groupViewLeft),
    };
  }, [
    groupViewHeight,
    groupViewWidth,
    groupViewTop,
    groupViewRight,
    groupViewBottom,
    groupViewLeft,
  ]);

  const minStyle = useMemo(() => {
    return {
      ...getStyleValue("top", minTop),
      ...getStyleValue("left", minLeft),
      ...getStyleValue("fontSize", minFontSize),
    };
  }, [minTop, minLeft, minFontSize]);

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", groupIconWidth),
      ...getStyleValue("right", groupIconRight),
      ...getStyleValue("height", groupIconHeight),
      ...getStyleValue("bottom", groupIconBottom),
    };
  }, [groupIconWidth, groupIconRight, groupIconHeight, groupIconBottom]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", frameViewHeight),
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("right", frameViewRight),
      ...getStyleValue("bottom", frameViewBottom),
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [
    frameViewHeight,
    frameViewWidth,
    frameViewRight,
    frameViewBottom,
    frameViewTop,
    frameViewLeft,
  ]);

  const antDesignstarFilledIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", antDesignstarFilledIconWidth),
      ...getStyleValue("height", antDesignstarFilledIconHeight),
    };
  }, [antDesignstarFilledIconWidth, antDesignstarFilledIconHeight]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
      ...getStyleValue("marginLeft", textMarginLeft),
    };
  }, [textFontSize, textLineHeight, textMarginLeft]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("height", rectangleViewHeight1),
      ...getStyleValue("width", rectangleViewWidth1),
      ...getStyleValue("top", rectangleViewTop1),
      ...getStyleValue("right", rectangleViewRight1),
      ...getStyleValue("bottom", rectangleViewBottom1),
      ...getStyleValue("borderRadius", rectangleViewBorderRadius),
    };
  }, [
    rectangleViewHeight1,
    rectangleViewWidth1,
    rectangleViewTop1,
    rectangleViewRight1,
    rectangleViewBottom1,
    rectangleViewBorderRadius,
  ]);

  const kStyle = useMemo(() => {
    return {
      ...getStyleValue("top", kTop),
      ...getStyleValue("left", kLeft),
      ...getStyleValue("fontSize", kFontSize),
      ...getStyleValue("lineHeight", kLineHeight),
    };
  }, [kTop, kLeft, kFontSize, kLineHeight]);

  const component1IconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", component1IconHeight),
      ...getStyleValue("width", component1IconWidth),
      ...getStyleValue("top", component1IconTop),
      ...getStyleValue("right", component1IconRight),
      ...getStyleValue("bottom", component1IconBottom),
      ...getStyleValue("left", component1IconLeft),
    };
  }, [
    component1IconHeight,
    component1IconWidth,
    component1IconTop,
    component1IconRight,
    component1IconBottom,
    component1IconLeft,
  ]);

  const descriptionStyle = useMemo(() => {
    return {
      ...getStyleValue("top", descriptionTop),
      ...getStyleValue("left", descriptionLeft),
      ...getStyleValue("fontSize", descriptionFontSize),
      ...getStyleValue("width", descriptionWidth),
    };
  }, [descriptionTop, descriptionLeft, descriptionFontSize, descriptionWidth]);

  const dateStyle = useMemo(() => {
    return {
      ...getStyleValue("top", dateTop),
      ...getStyleValue("left", dateLeft),
      ...getStyleValue("fontSize", dateFontSize),
      ...getStyleValue("lineHeight", dateLineHeight),
      ...getStyleValue("width", dateWidth),
      ...getStyleValue("height", dateHeight),
    };
  }, [dateTop, dateLeft, dateFontSize, dateLineHeight, dateWidth, dateHeight]);

  const circleUsersStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", circleUsersMarginTop),
      ...getStyleValue("marginLeft", circleUsersMarginLeft),
      ...getStyleValue("width", circleUsersWidth),
      ...getStyleValue("height", circleUsersHeight),
    };
  }, [
    circleUsersMarginTop,
    circleUsersMarginLeft,
    circleUsersWidth,
    circleUsersHeight,
  ]);

  const groupIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("height", groupIconHeight1),
      ...getStyleValue("width", groupIconWidth1),
      ...getStyleValue("right", groupIconRight1),
      ...getStyleValue("bottom", groupIconBottom1),
    };
  }, [groupIconHeight1, groupIconWidth1, groupIconRight1, groupIconBottom1]);

  const groupIcon2Style = useMemo(() => {
    return {
      ...getStyleValue("height", groupIconHeight2),
      ...getStyleValue("width", groupIconWidth2),
      ...getStyleValue("top", groupIconTop),
      ...getStyleValue("right", groupIconRight2),
      ...getStyleValue("bottom", groupIconBottom2),
    };
  }, [
    groupIconHeight2,
    groupIconWidth2,
    groupIconTop,
    groupIconRight2,
    groupIconBottom2,
  ]);

  const kLikedStyle = useMemo(() => {
    return {
      ...getStyleValue("top", kLikedTop),
      ...getStyleValue("left", kLikedLeft),
      ...getStyleValue("fontSize", kLikedFontSize),
      ...getStyleValue("lineHeight", kLikedLineHeight),
    };
  }, [kLikedTop, kLikedLeft, kLikedFontSize, kLikedLineHeight]);

  const vendorsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", vendorsTop),
      ...getStyleValue("left", vendorsLeft),
      ...getStyleValue("fontSize", vendorsFontSize),
      ...getStyleValue("lineHeight", vendorsLineHeight),
    };
  }, [vendorsTop, vendorsLeft, vendorsFontSize, vendorsLineHeight]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", frameViewTop1),
      ...getStyleValue("left", frameViewLeft1),
      ...getStyleValue("borderRadius", frameViewBorderRadius),
      ...getStyleValue("elevation", frameViewElevation),
      ...getStyleValue("width", frameViewWidth1),
      ...getStyleValue("height", frameViewHeight1),
      ...getStyleValue("padding", frameViewPadding),
    };
  }, [
    frameViewTop1,
    frameViewLeft1,
    frameViewBorderRadius,
    frameViewElevation,
    frameViewWidth1,
    frameViewHeight1,
    frameViewPadding,
  ]);

  const armanRokniStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", armanRokniFontSize),
      ...getStyleValue("lineHeight", armanRokniLineHeight),
      ...getStyleValue("width", armanRokniWidth),
    };
  }, [armanRokniFontSize, armanRokniLineHeight, armanRokniWidth]);

  return (
    <View style={[styles.property1ended, property1EndedStyle]}>
      <Image
        style={[styles.image88Icon, image88IconStyle]}
        contentFit="cover"
        source={image88}
      />
      <View
        style={[
          styles.property1endedChild,
          styles.property1endedBg,
          rectangleViewStyle,
        ]}
      />
      <Text style={[styles.pestaKitaMarket, pestaKitaMarketStyle]}>
        Pesta Kita market
      </Text>
      <View style={[styles.minParent, groupViewStyle]}>
        <Text style={[styles.min, minStyle]}>Central Market, Kuala Lumpur</Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout, groupIconStyle]}
          contentFit="cover"
          source={group6}
        />
      </View>
      <View style={[styles.antDesignstarFilledParent, frameViewStyle]}>
        <Image
          style={[styles.antDesignstarFilledIcon, antDesignstarFilledIconStyle]}
          contentFit="cover"
          source={antDesignstarFilled}
        />
        <Text style={[styles.text, textStyle]}>4.2</Text>
      </View>
      <View
        style={[
          styles.property1endedItem,
          styles.property1endedBg,
          rectangleView1Style,
        ]}
      />
      <Text style={[styles.k, styles.kClr, kStyle]}>+20k</Text>
      <Image
        style={[
          styles.component1Icon,
          styles.groupChildLayout,
          component1IconStyle,
        ]}
        contentFit="cover"
        source={component1}
      />
      <Text style={[styles.description, descriptionStyle]}>
        Raya is in the air. But wait… no new Baju Raya? Join us for plenty of
        Last Minit Raya shopping opportunitiesat Central Market Kuala Lumpur for
        you to get Raya-ready and all the essentials!
      </Text>
      <Text
        style={[styles.date, styles.dateTypo, dateStyle]}
      >{`Date      :     4 February, 2024
Time       :     10am – 10pm`}</Text>
      <View style={[styles.circleUsers, circleUsersStyle]}>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout, groupIcon1Style]}
          contentFit="cover"
          source={group}
        />
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout, groupIcon2Style]}
          contentFit="cover"
          source={group1}
        />
        <Text style={[styles.kLiked, styles.kLikedTypo, kLikedStyle]}>
          +1k Liked
        </Text>
        <Text style={[styles.vendors, styles.kLikedTypo, vendorsStyle]}>
          +100 Vendors
        </Text>
      </View>
      <View
        style={[styles.armanRokniWrapper, styles.armanFlexBox, frameView1Style]}
      >
        <Text style={[styles.armanRokni, styles.armanFlexBox, armanRokniStyle]}>
          Ended
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1endedBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  kClr: {
    color: Color.primary,
    lineHeight: 19,
    textAlign: "left",
    position: "absolute",
  },
  dateTypo: {
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.bodySmallBold_size,
    fontWeight: "700",
  },
  groupIconLayout: {
    height: "38.18%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  kLikedTypo: {
    color: Color.universe,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 19,
    textAlign: "center",
    position: "absolute",
  },
  armanFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  image88Icon: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    width: 297,
    position: "absolute",
    height: 263,
  },
  property1endedChild: {
    height: "135.7%",
    width: "55.92%",
    top: "-11.03%",
    right: "-11.64%",
    bottom: "-24.68%",
    left: "55.71%",
  },
  pestaKitaMarket: {
    width: "29.37%",
    top: "5.7%",
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    textAlign: "left",
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
    color: Color.colorMidnightblue_100,
    left: "57.61%",
    position: "absolute",
  },
  min: {
    top: "12.5%",
    left: "10.18%",
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.figtreeRegular,
    fontSize: FontSize.bodySmallBold_size,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    width: "9.49%",
    right: "90.51%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  minParent: {
    height: "6.08%",
    width: "33.33%",
    top: "18.25%",
    right: "9.06%",
    bottom: "75.67%",
    opacity: 0.5,
    left: "57.61%",
    position: "absolute",
  },
  antDesignstarFilledIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    lineHeight: 18,
    marginLeft: 8,
    fontSize: FontSize.bodySmallBold_size,
    textAlign: "left",
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
  },
  antDesignstarFilledParent: {
    height: "7.6%",
    width: "9.66%",
    top: "86.69%",
    right: "5.44%",
    bottom: "5.7%",
    left: "84.9%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  property1endedItem: {
    height: "10.27%",
    width: "12.51%",
    top: "87.45%",
    right: "45.61%",
    bottom: "2.28%",
    left: "41.88%",
    borderRadius: Border.br_11xl,
  },
  k: {
    top: "88.97%",
    left: "47.56%",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.primary,
    lineHeight: 19,
    fontSize: FontSize.bodySmallBold_size,
  },
  component1Icon: {
    height: "9.13%",
    width: "4.74%",
    top: "88.21%",
    right: "52.62%",
    bottom: "2.66%",
    left: "42.64%",
  },
  description: {
    width: "42.26%",
    top: "50.19%",
    left: "58.94%",
    color: Color.colorGray_800,
    display: "flex",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    position: "absolute",
  },
  date: {
    top: 79,
    left: 316,
    width: 212,
    height: 48,
    color: Color.primary,
    lineHeight: 19,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.montserratBold,
  },
  groupIcon: {
    width: "41.41%",
    right: "58.59%",
    bottom: "61.82%",
    top: "0%",
    height: "38.18%",
  },
  groupIcon1: {
    width: "28.13%",
    top: "43.64%",
    right: "71.88%",
    bottom: "18.18%",
  },
  kLiked: {
    top: "5.45%",
    left: "49.22%",
  },
  vendors: {
    top: "49.09%",
    left: "34.38%",
  },
  circleUsers: {
    marginTop: 76.5,
    marginLeft: 43.15,
    top: "50%",
    left: "50%",
    width: 128,
    height: 55,
    position: "absolute",
  },
  armanRokni: {
    lineHeight: 10,
    textTransform: "uppercase",
    width: 95,
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.bodySmallBold_size,
    fontWeight: "700",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    color: Color.colorMidnightblue_100,
  },
  armanRokniWrapper: {
    top: 17,
    left: 9,
    borderRadius: Border.br_3xs,
    width: 106,
    height: 35,
    padding: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  property1ended: {
    borderRadius: Border.br_mini,
    width: 528,
    height: 263,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default Property1Ended;
