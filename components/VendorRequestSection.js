import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VendorRequestSection = ({
  dimensionText,
  locationNameText,
  propTop,
  propHeight,
  propHeight1,
}) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
    };
  }, [propHeight1]);

  return (
    <View style={[styles.multipleAccInboxParent, frameView2Style]}>
      <View style={[styles.multipleAccInbox, styles.multipleAccInboxPosition]}>
        <View style={styles.groupProfile}>
          <Image
            style={[styles.memojiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/memoji13.png")}
          />
          <Image
            style={[styles.memojiIcon1, styles.memojiIconLayout]}
            contentFit="cover"
            source={require("../assets/memoji14.png")}
          />
          <Image
            style={[styles.memojiIcon2, styles.memojiIconLayout]}
            contentFit="cover"
            source={dimensionText}
          />
        </View>
        <Text
          style={[styles.hoursAgo, styles.hoursAgoTypo]}
        >{`2 hours ago `}</Text>
        <Image
          style={styles.multipleAccInboxChild}
          contentFit="cover"
          source={require("../assets/ellipse-746.png")}
        />
        <Text style={[styles.centralMarket, styles.hoursAgoTypo]}>
          {locationNameText}
        </Text>
        <Text
          style={[styles.ericAnd10Container, styles.multipleAccInboxPosition]}
        >
          <Text style={styles.ericAnd10Others}>
            <Text style={styles.ericAnd10Typo}>Eric and +10 others</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.hasRequestedTo}>has requested to</Text>
          <Text style={[styles.joinAsVendor, styles.ericAnd10Typo]}>{` 
Join as Vendor`}</Text>
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <View
        style={[
          styles.declineAllWrapper,
          styles.allWrapperFlexBox,
          frameView3Style,
        ]}
      >
        <Text style={[styles.declineAll, styles.allTypo]}>decline all</Text>
      </View>
      <View
        style={[
          styles.reviewAllWrapper,
          styles.allWrapperFlexBox,
          frameView4Style,
        ]}
      >
        <Text style={[styles.reviewAll, styles.allTypo]}>Review all</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  multipleAccInboxPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  memojiIconLayout: {
    borderRadius: 216,
    overflow: "hidden",
    width: 39,
    height: 39,
    top: 0,
    position: "absolute",
  },
  hoursAgoTypo: {
    textAlign: "center",
    color: Color.colorGray_1400,
    fontSize: FontSize.size_2xs_8,
    top: 28,
    fontFamily: FontFamily.figtreeMedium,
    fontWeight: "500",
    position: "absolute",
  },
  ericAnd10Typo: {
    fontFamily: FontFamily.figtreeSemiBold,
    fontWeight: "600",
  },
  allWrapperFlexBox: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 21,
    borderRadius: Border.br_base_2,
    top: 45,
    position: "absolute",
  },
  allTypo: {
    fontSize: FontSize.size_4xs_1,
    textAlign: "center",
    fontFamily: FontFamily.figtreeMedium,
    fontWeight: "500",
  },
  memojiIcon: {
    left: 51,
    borderRadius: 67,
    width: 39,
    overflow: "hidden",
    height: 39,
    top: 0,
  },
  memojiIcon1: {
    left: 24,
  },
  memojiIcon2: {
    left: 0,
  },
  groupProfile: {
    top: 1,
    height: 39,
    width: 90,
    left: 0,
    position: "absolute",
  },
  hoursAgo: {
    left: 97,
  },
  multipleAccInboxChild: {
    top: 35,
    left: 160,
    width: 4,
    height: 4,
    position: "absolute",
  },
  centralMarket: {
    left: 170,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.figtreeBold,
  },
  ericAnd10Others: {
    color: Color.titelTextColor,
  },
  hasRequestedTo: {
    color: Color.colorGray_1600,
    fontFamily: FontFamily.figtreeMedium,
    fontWeight: "500",
  },
  joinAsVendor: {
    color: Color.titelTextColor,
  },
  ericAnd10Container: {
    fontSize: FontSize.size_xs_9,
    textAlign: "left",
    left: 97,
  },
  vectorIcon: {
    height: "25.12%",
    width: "1.8%",
    top: "31.71%",
    right: "0%",
    bottom: "43.17%",
    left: "98.2%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  multipleAccInbox: {
    height: 41,
    left: 0,
    width: 350,
  },
  declineAll: {
    color: Color.titelTextColor,
  },
  declineAllWrapper: {
    left: 96,
    borderStyle: "solid",
    borderColor: Color.titelTextColor,
    borderWidth: 0.8,
    width: 91,
    opacity: 0.4,
  },
  reviewAll: {
    color: Color.colorWhite,
  },
  reviewAllWrapper: {
    left: 199,
    backgroundColor: Color.primary,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 21,
    borderRadius: Border.br_base_2,
    top: 45,
  },
  multipleAccInboxParent: {
    top: 182,
    left: 12,
    height: 63,
    width: 350,
    position: "absolute",
  },
});

export default VendorRequestSection;
