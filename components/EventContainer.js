import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EventContainer = ({ dimensionsText, onEventCardPress }) => {
  return (
    <Pressable
      style={[styles.eventCard, styles.eventCardShadowBox]}
      onPress={onEventCardPress}
    >
      <Image
        style={[styles.maskGroupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mask-group12.png")}
      />
      <View style={[styles.eventCardChild, styles.childPosition]} />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon15.png")}
      />
      <View style={[styles.nameStar, styles.nameStarPosition]} />
      <Text style={[styles.pestaWownita, styles.minFlexBox]}>
        Pesta WoWnita
      </Text>
      <View style={[styles.antDesignstarFilledParent, styles.nameStarPosition]}>
        <Image
          style={styles.antDesignstarFilledIcon}
          contentFit="cover"
          source={require("../assets/antdesignstarfilled17.png")}
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
          source={require("../assets/group-610.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Image
          style={[styles.groupIcon, styles.groupPosition]}
          contentFit="cover"
          source={dimensionsText}
        />
        <Text style={[styles.kLiked, styles.kTypo]}>+2k Liked</Text>
        <Text style={[styles.k, styles.kTypo]}>+10k</Text>
      </View>
      <Image
        style={[styles.component1Icon, styles.groupParentLayout]}
        contentFit="cover"
        source={require("../assets/component-118.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  eventCardShadowBox: {
    shadowOpacity: 1,
    elevation: 2.43,
    shadowRadius: 2.43,
    shadowOffset: {
      width: 0,
      height: 2.425222635269165,
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
    top: "5.61%",
    position: "absolute",
  },
  nameStarPosition: {
    alignItems: "center",
    bottom: "19.05%",
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
    height: "6.45%",
    position: "absolute",
  },
  kTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 12,
    fontSize: FontSize.size_5xs_3,
    textAlign: "left",
    position: "absolute",
  },
  maskGroupIcon: {
    height: "78.25%",
    bottom: "21.75%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  eventCardChild: {
    height: "27.9%",
    top: "72.1%",
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    bottom: "0%",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "8.58%",
    width: "10.96%",
    right: "6.5%",
    bottom: "85.81%",
    left: "82.54%",
    borderRadius: 61,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  nameStar: {
    height: "5.61%",
    width: "79.83%",
    right: "10.23%",
    left: "9.94%",
    top: "75.33%",
    alignItems: "center",
    bottom: "19.05%",
  },
  pestaWownita: {
    width: "39.72%",
    fontSize: FontSize.size_4xs_5,
    lineHeight: 12,
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    textAlign: "left",
    left: "6.5%",
    top: "75.33%",
  },
  antDesignstarFilledIcon: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  text: {
    lineHeight: 11,
    marginLeft: 4.85,
    fontSize: FontSize.size_5xs_3,
    textAlign: "left",
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.bodyMediumBold,
    fontWeight: "700",
  },
  antDesignstarFilledParent: {
    height: "5.35%",
    width: "16.78%",
    top: "75.6%",
    right: "6.84%",
    flexDirection: "row",
    justifyContent: "flex-end",
    left: "76.38%",
  },
  dateIconCarouselChild: {
    height: "96.47%",
    bottom: "3.53%",
    borderRadius: 6,
    top: "0%",
  },
  text1: {
    fontSize: FontSize.size_2xs_9,
    lineHeight: 3,
  },
  mar: {
    fontSize: FontSize.size_6xs_1,
    lineHeight: 8,
  },
  armanRokniTxtContainer: {
    width: "100%",
  },
  armanRokni: {
    height: "93.64%",
    width: "73.26%",
    top: "6.36%",
    left: "13.19%",
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
    height: "12.51%",
    width: "15.42%",
    right: "78.08%",
    bottom: "81.87%",
    left: "6.5%",
    shadowOpacity: 1,
    elevation: 2.43,
    shadowRadius: 2.43,
    shadowOffset: {
      width: 0,
      height: 2.425222635269165,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  min: {
    left: "10.88%",
    fontSize: FontSize.size_5xs_9,
    fontFamily: FontFamily.figtreeRegular,
    color: Color.colorGray_300,
    top: "0%",
  },
  groupChild: {
    width: "8.31%",
    right: "91.69%",
  },
  minParent: {
    height: "4.29%",
    width: "65.93%",
    top: "81.21%",
    right: "27.57%",
    bottom: "14.5%",
    opacity: 0.5,
    left: "6.5%",
    position: "absolute",
  },
  groupIcon: {
    width: "21.82%",
    right: "78.18%",
  },
  kLiked: {
    top: "12.33%",
    left: "25.67%",
    color: Color.universe,
  },
  k: {
    top: "16.44%",
    left: "89.09%",
    color: Color.primary,
  },
  groupParent: {
    width: "88.02%",
    top: "87.93%",
    right: "5.48%",
    bottom: "5.61%",
    left: "6.5%",
  },
  component1Icon: {
    width: "8.25%",
    top: "88.46%",
    right: "15.37%",
    bottom: "5.08%",
    left: "76.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  eventCard: {
    width: 177,
    height: 226,
  },
});

export default EventContainer;
