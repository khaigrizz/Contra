import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerWithDimensions = ({
  dimensionsCode,
  productDimensionsCode,
  productDimensions,
  productDimensionsCoordina,
  mapPinIconTop,
  onFramePressablePress,
}) => {
  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("top", mapPinIconTop),
    };
  }, [mapPinIconTop]);

  return (
    <View style={[styles.headerParent, frameView5Style]}>
      <View style={styles.header}>
        <Text style={[styles.pasarSelokaRaya, styles.textTypo]}>
          Pasar Seloka Raya
        </Text>
        <View style={styles.ratingStar}>
          <Text style={[styles.ratings, styles.ratingsFlexBox]}>
            (99 ratings)
          </Text>
          <Text style={[styles.text, styles.textTypo]}>4.7</Text>
          <Image
            style={[styles.component1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={dimensionsCode}
          />
        </View>
      </View>
      <Pressable
        style={styles.fluentchatHelp24RegularParent}
        onPress={onFramePressablePress}
      >
        <Image
          style={[styles.fluentchatHelp24RegularIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fluentchathelp24regular.png")}
        />
        <Image
          style={[styles.bellIcon, styles.iconLayout]}
          contentFit="cover"
          source={productDimensionsCode}
        />
      </Pressable>
      <View style={[styles.locationWrapper, styles.locationPosition]}>
        <Text style={[styles.location, styles.locationTypo]}>
          Paradigm Mall, Petaling Jaya
        </Text>
      </View>
      <Text
        style={[styles.dateAndTime, styles.dateAndTimeTypo]}
      >{`Date : 16 Mar -7 April 2024
Time : 10am - 10pm`}</Text>
      <Text style={[styles.description, styles.dateAndTimeTypo]}>
        Description
      </Text>
      <View style={[styles.locationContainer, styles.locationPosition]}>
        <Text
          style={[styles.location1, styles.locationTypo]}
        >{`Pesta WOWNITA empowers women to pursue their entrepreneurial dreams and contribute to economic development. We `}</Text>
      </View>
      <Text style={[styles.readMore, styles.likedClr]}>Read more...</Text>
      <Image
        style={[styles.mapPinIcon, styles.iconLayout1]}
        contentFit="cover"
        source={productDimensions}
      />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.iconLayout1]}
          contentFit="cover"
          source={productDimensionsCoordina}
        />
        <Text style={[styles.liked, styles.likedClr]}>+900 liked</Text>
      </View>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  ratingsFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    overflow: "hidden",
  },
  locationPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  locationTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.figtreeRegular,
    fontSize: FontSize.bodySmallBold_size,
    width: "100%",
    left: "0%",
    top: "0%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  dateAndTimeTypo: {
    fontFamily: FontFamily.figtreeSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  likedClr: {
    color: Color.primary,
    position: "absolute",
  },
  pasarSelokaRaya: {
    top: 1,
    fontSize: FontSize.size_lg,
    color: Color.colorMidnightblue_100,
    left: 0,
  },
  ratings: {
    height: "72.35%",
    width: "63.79%",
    top: "8.82%",
    left: "36.29%",
    fontSize: FontSize.size_xs_3,
    lineHeight: 13,
    fontWeight: "500",
    fontFamily: FontFamily.figtreeMedium,
    color: Color.shadesOfBlackGrey3,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    left: 17,
    fontSize: FontSize.size_mini_3,
    color: Color.titelTextColor,
    top: 0,
  },
  component1Icon: {
    width: "13.83%",
    right: "86.17%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    height: "100%",
  },
  ratingStar: {
    height: "71.73%",
    width: "39.02%",
    top: "24.89%",
    right: "-9.27%",
    bottom: "3.38%",
    left: "70.25%",
    position: "absolute",
  },
  header: {
    left: 1,
    width: 315,
    height: 24,
    top: 0,
    position: "absolute",
  },
  fluentchatHelp24RegularIcon: {
    width: 16,
  },
  bellIcon: {
    width: 14,
    marginLeft: 12.63,
  },
  fluentchatHelp24RegularParent: {
    top: 68,
    right: 16,
    width: 43,
    height: 20,
    flexDirection: "row",
    opacity: 0.6,
    position: "absolute",
  },
  location: {
    textDecoration: "underline",
  },
  locationWrapper: {
    height: "6.72%",
    width: "51.28%",
    top: "13.92%",
    right: "43.68%",
    bottom: "79.37%",
    left: "5.04%",
  },
  dateAndTime: {
    width: "53.44%",
    top: "24.95%",
    left: "0.09%",
    fontSize: FontSize.bodyMediumBold_size,
    color: Color.colorOrangered_100,
    alignItems: "center",
    display: "flex",
  },
  description: {
    top: 112,
    fontSize: FontSize.size_sm_5,
    color: Color.titelTextColor,
    left: 0,
  },
  location1: {
    height: "100%",
  },
  locationContainer: {
    height: "25.91%",
    width: "79.55%",
    top: "62.38%",
    right: "19.74%",
    bottom: "11.71%",
    left: "0.71%",
  },
  readMore: {
    top: 164,
    left: 157,
    fontSize: FontSize.size_xs_4,
    fontWeight: "800",
    fontFamily: FontFamily.figtreeExtraBold,
    textAlign: "left",
  },
  mapPinIcon: {
    height: "5.81%",
    width: "3.74%",
    top: "13.77%",
    right: "96.26%",
    bottom: "80.42%",
    left: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupIcon: {
    height: "56.11%",
    width: "66.75%",
    right: "0%",
    bottom: "43.89%",
    left: "33.25%",
    top: "0%",
  },
  liked: {
    height: "34.91%",
    width: "98.22%",
    top: "65.09%",
    fontSize: FontSize.size_4xs_5,
    lineHeight: 12,
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "right",
    fontWeight: "600",
    color: Color.primary,
    left: "0%",
  },
  groupParent: {
    height: "19.24%",
    width: "24.25%",
    top: "66.7%",
    right: "-0.03%",
    bottom: "14.06%",
    left: "75.78%",
    position: "absolute",
  },
  frameChild: {
    top: 101,
    width: 301,
    height: 2,
    left: 0,
    position: "absolute",
  },
  headerParent: {
    top: 353,
    left: 25,
    width: 324,
    height: 208,
    position: "absolute",
  },
});

export default ContainerWithDimensions;
