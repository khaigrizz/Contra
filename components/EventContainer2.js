import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EventContainer2 = ({ dimensionsText, productDimensionsText }) => {
  return (
    <View style={[styles.eventCard, styles.eventCardShadowBox]}>
      <Image
        style={[styles.maskGroupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <View style={[styles.eventCardChild, styles.childPosition]} />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={dimensionsText}
      />
      <View style={[styles.nameStar, styles.nameStarFlexBox]} />
      <Text style={[styles.pestaWownita, styles.minFlexBox]}>
        Pesta WoWnita
      </Text>
      <View style={[styles.antDesignstarFilledParent, styles.nameStarFlexBox]}>
        <Image
          style={styles.antDesignstarFilledIcon}
          contentFit="cover"
          source={require("../assets/antdesignstarfilled14.png")}
        />
        <Text style={styles.text}>4.9</Text>
      </View>
      <View style={[styles.dateIconCarousel, styles.iconPosition]}>
        <View style={[styles.dateIconCarouselChild, styles.childPosition]} />
        <Text style={[styles.armanRokni, styles.armanRokniClr]}>
          <Text style={styles.armanRokniTxtContainer}>
            <Text style={styles.text1}>{`8
`}</Text>
            <Text style={styles.mar}>Mar</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.minParent}>
        <Text style={[styles.min, styles.minFlexBox]}>
          Central Market, Kuala Lumpur
        </Text>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-61.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Image
          style={[styles.groupIcon, styles.groupPosition]}
          contentFit="cover"
          source={productDimensionsText}
        />
        <Text style={[styles.kLiked, styles.kTypo]}>+2k Liked</Text>
        <Text style={[styles.k, styles.kTypo]}>+10k</Text>
      </View>
      <Image
        style={[styles.component1Icon, styles.groupParentLayout]}
        contentFit="cover"
        source={require("../assets/component-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventCardShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childPosition: {
    backgroundColor: Color.colorWhite,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  iconPosition: {
    top: "5.63%",
    position: "absolute",
  },
  nameStarFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  minFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  armanRokniClr: {
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  groupPosition: {
    height: "100%",
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupParentLayout: {
    height: "6.46%",
    position: "absolute",
  },
  kTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 10,
    fontSize: FontSize.size_6xs_2,
    textAlign: "left",
    position: "absolute",
  },
  maskGroupIcon: {
    height: "78.28%",
    bottom: "21.72%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  eventCardChild: {
    height: "27.86%",
    top: "72.14%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    bottom: "0%",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "8.59%",
    width: "10.98%",
    right: "6.45%",
    bottom: "85.78%",
    left: "82.57%",
    borderRadius: 51,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  nameStar: {
    height: "5.63%",
    width: "79.77%",
    right: "10.31%",
    bottom: "19.06%",
    left: "9.91%",
    top: "75.31%",
    alignItems: "center",
  },
  pestaWownita: {
    width: "39.72%",
    fontSize: FontSize.size_5xs_2,
    lineHeight: 11,
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    textAlign: "left",
    left: "6.52%",
    top: "75.31%",
  },
  antDesignstarFilledIcon: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  text: {
    lineHeight: 9,
    marginLeft: 4.12,
    fontSize: FontSize.size_6xs_2,
    textAlign: "left",
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
  },
  antDesignstarFilledParent: {
    height: "5.36%",
    width: "16.77%",
    top: "75.62%",
    right: "6.85%",
    bottom: "19.01%",
    flexDirection: "row",
    justifyContent: "flex-end",
    left: "76.38%",
  },
  dateIconCarouselChild: {
    height: "96.67%",
    bottom: "3.33%",
    borderRadius: 5,
    top: "0%",
  },
  text1: {
    fontSize: FontSize.size_3xs_3,
    lineHeight: 3,
  },
  mar: {
    fontSize: FontSize.size_7xs_1,
    lineHeight: 7,
  },
  armanRokniTxtContainer: {
    width: "100%",
  },
  armanRokni: {
    height: "93.75%",
    width: "73.28%",
    top: "6.25%",
    left: "13.36%",
    textTransform: "uppercase",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    display: "flex",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  dateIconCarousel: {
    height: "12.5%",
    width: "15.44%",
    right: "78.04%",
    bottom: "81.87%",
    shadowRadius: 2.06,
    elevation: 2.06,
    left: "6.52%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  min: {
    left: "10.93%",
    fontSize: FontSize.size_6xs_7,
    fontFamily: FontFamily.figtreeRegular,
    color: Color.colorGray_300,
    top: "0%",
  },
  groupChild: {
    width: "8.3%",
    right: "91.7%",
  },
  minParent: {
    height: "4.27%",
    width: "65.74%",
    top: "81.25%",
    right: "27.74%",
    bottom: "14.48%",
    opacity: 0.5,
    left: "6.52%",
    position: "absolute",
  },
  groupIcon: {
    width: "21.83%",
    right: "78.17%",
  },
  kLiked: {
    top: "12.1%",
    left: "25.78%",
    color: Color.universe,
  },
  k: {
    top: "16.94%",
    left: "89.39%",
    color: Color.primary,
  },
  groupParent: {
    width: "87.76%",
    top: "87.92%",
    right: "5.72%",
    bottom: "5.62%",
    left: "6.52%",
  },
  component1Icon: {
    width: "8.25%",
    top: "88.49%",
    right: "15.37%",
    bottom: "5.05%",
    left: "76.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  eventCard: {
    top: 580,
    left: 29,
    shadowRadius: 4,
    elevation: 4,
    width: 150,
    height: 192,
    position: "absolute",
  },
});

export default EventContainer2;
