import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Container = ({
  dimensionsCode,
  productDimensions,
  productDimensionsCode,
}) => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.headerParent}>
        <View style={styles.header}>
          <Text style={[styles.pestaWownita, styles.textTypo]}>
            Pesta WOWnita
          </Text>
          <View style={styles.ratingStar}>
            <Text style={[styles.ratings, styles.ratingsFlexBox]}>
              (501 ratings)
            </Text>
            <Text style={[styles.text, styles.textTypo]}>4.9</Text>
            <Image
              style={[styles.component1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/component-123.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.fluentchatHelp24RegularParent,
            styles.armanRokniWrapperFlexBox,
          ]}
        >
          <Image
            style={styles.fluentchatHelp24RegularIcon}
            contentFit="cover"
            source={require("../assets/fluentchathelp24regular.png")}
          />
          <Image
            style={styles.bellClickIcon}
            contentFit="cover"
            source={require("../assets/bell-click.png")}
          />
        </View>
        <View style={[styles.locationWrapper, styles.locationPosition]}>
          <Text style={[styles.location, styles.locationTypo]}>
            Central Market, Kuala Lumpur
          </Text>
        </View>
        <Text
          style={[styles.dateAndTime, styles.dateAndTimeTypo]}
        >{`Date : 8-10 March 2024
Time : 10am - 10pm`}</Text>
        <Text style={[styles.description, styles.frameChildPosition]}>
          Description
        </Text>
        <View style={[styles.locationContainer, styles.locationPosition]}>
          <Text
            style={[styles.location1, styles.locationTypo]}
          >{`Pesta WOWNITA empowers women to pursue their entrepreneurial dreams and contribute to economic development. We `}</Text>
        </View>
        <Text style={[styles.readMore, styles.kLikedClr]}>Read more...</Text>
        <Image
          style={[styles.mapPinIcon, styles.iconLayout]}
          contentFit="cover"
          source={dimensionsCode}
        />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={productDimensions}
          />
          <Text style={[styles.kLiked, styles.kLikedClr]}>+2k liked</Text>
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/line-6.png")}
        />
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={productDimensionsCode}
      />
      <View style={[styles.armanRokniWrapper, styles.armanFlexBox]}>
        <Text style={[styles.armanRokni, styles.armanFlexBox]}>
          Happening now
        </Text>
      </View>
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
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  armanRokniWrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
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
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  kLikedClr: {
    color: Color.primary,
    position: "absolute",
  },
  armanFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  pestaWownita: {
    top: 1,
    left: -1,
    fontSize: FontSize.size_lg,
    color: Color.colorMidnightblue_100,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
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
  },
  text: {
    left: 17,
    fontSize: FontSize.size_mini_3,
    color: Color.titelTextColor,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: 0,
  },
  component1Icon: {
    width: "13.83%",
    right: "86.17%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    top: "0%",
    height: "100%",
  },
  ratingStar: {
    height: "71.73%",
    width: "39.02%",
    top: "25.32%",
    right: "-4.95%",
    bottom: "2.95%",
    left: "65.94%",
    position: "absolute",
  },
  header: {
    width: 315,
    height: 24,
    top: 0,
    left: 1,
    position: "absolute",
  },
  fluentchatHelp24RegularIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  bellClickIcon: {
    width: 14,
    marginLeft: 12.63,
    height: 16,
  },
  fluentchatHelp24RegularParent: {
    top: 68,
    right: 16,
    width: 43,
    height: 20,
    opacity: 0.6,
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
    position: "absolute",
  },
  description: {
    top: 112,
    fontSize: FontSize.size_sm_5,
    fontFamily: FontFamily.figtreeSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.titelTextColor,
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
  kLiked: {
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
  },
  headerParent: {
    top: 268,
    height: 208,
    overflow: "hidden",
    left: 1,
    width: 324,
    position: "absolute",
  },
  maskGroupIcon: {
    marginTop: -238.3,
    marginLeft: -162.15,
    top: "50%",
    left: "50%",
    width: 320,
    height: 248,
    position: "absolute",
  },
  armanRokni: {
    fontSize: FontSize.size_3xs,
    lineHeight: 9,
    textTransform: "uppercase",
    width: 98,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  armanRokniWrapper: {
    top: 8,
    left: 13,
    borderRadius: 9,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3.4285717010498047,
    },
    shadowRadius: 3.43,
    elevation: 3.43,
    shadowOpacity: 1,
    width: 105,
    height: 30,
    padding: 9,
    flexDirection: "row",
    position: "absolute",
  },
  frameParent: {
    top: 84,
    left: 24,
    height: 477,
    width: 324,
    position: "absolute",
  },
});

export default Container;
