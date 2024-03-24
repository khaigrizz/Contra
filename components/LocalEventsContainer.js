import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EventContainer from "./EventContainer";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LocalEventsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.eventCardParent}>
      <EventContainer
        dimensionsText={require("../assets/group55.png")}
        onEventCardPress={() => navigation.navigate("DetailsEventAboutDone")}
      />
      <View style={[styles.eventCard, styles.eventCardLayout]}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group13.png")}
        />
        <View style={[styles.eventCardChild, styles.eventCardPosition]} />
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon16.png")}
        />
        <View style={[styles.antDesignstarFilledParent, styles.antFlexBox]}>
          <Image
            style={styles.antDesignstarFilledIcon}
            contentFit="cover"
            source={require("../assets/antdesignstarfilled18.png")}
          />
          <Text style={[styles.text, styles.textClr]}>4.8</Text>
        </View>
        <View style={[styles.dateIconCarousel, styles.iconPosition1]}>
          <View
            style={[styles.dateIconCarouselChild, styles.eventCardPosition]}
          />
          <Text style={[styles.armanRokni, styles.textClr]}>
            <Text style={styles.armanRokniTxtContainer}>
              <Text style={styles.text1}>{`22
`}</Text>
              <Text style={styles.mar}>mar</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.minParent, styles.minPosition]}>
          <Text style={styles.min}>Central Market, Kuala Lumpur</Text>
          <Image
            style={[styles.groupChild, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group-611.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group56.png")}
          />
          <Text style={[styles.kLiked, styles.likedTypo]}>+1k Liked</Text>
        </View>
        <Text style={[styles.pasarCorakHati, styles.pasarTypo]}>
          Pasar Corak Hati Raya
        </Text>
        <Text style={[styles.k, styles.kTypo]}>+12k</Text>
        <Image
          style={[styles.component1Icon, styles.component1IconLayout]}
          contentFit="cover"
          source={require("../assets/component-119.png")}
        />
      </View>
      <View style={[styles.eventCard1, styles.eventCard1ShadowBox]}>
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group14.png")}
        />
        <View style={[styles.eventCardItem, styles.eventCardPosition]} />
        <Image
          style={[styles.icon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon17.png")}
        />
        <View style={[styles.antDesignstarFilledGroup, styles.antFlexBox]}>
          <Image
            style={styles.antDesignstarFilledIcon}
            contentFit="cover"
            source={require("../assets/antdesignstarfilled19.png")}
          />
          <Text style={[styles.text, styles.textClr]}>4.8</Text>
        </View>
        <View style={[styles.dateIconCarousel1, styles.iconPosition]}>
          <View
            style={[styles.dateIconCarouselChild, styles.eventCardPosition]}
          />
          <Text style={[styles.armanRokni, styles.textClr]}>
            <Text style={styles.armanRokniTxtContainer}>
              <Text style={styles.text1}>{`22
`}</Text>
              <Text style={styles.mar}>mar</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.minGroup, styles.minPosition]}>
          <Text style={styles.min}>Central Market, Kuala Lumpur</Text>
          <Image
            style={[styles.groupChild, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group-612.png")}
          />
        </View>
        <View style={[styles.groupGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group57.png")}
          />
          <Text style={[styles.kLiked1, styles.likedTypo]}>+1k Liked</Text>
        </View>
        <Text style={[styles.pasarCorakHati1, styles.pasarTypo]}>
          Warna Warni Ramadhan
        </Text>
        <Text style={[styles.k1, styles.kTypo]}>+12k</Text>
        <Image
          style={[styles.component1Icon1, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/component-120.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCardLayout: {
    marginLeft: 13,
    height: 226,
    width: 177,
  },
  maskGroupPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    overflow: "hidden",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  eventCardPosition: {
    backgroundColor: Color.colorWhite,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  iconLayout: {
    borderRadius: 61,
    right: "6.5%",
    height: "8.58%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  antFlexBox: {
    justifyContent: "flex-end",
    height: "5.35%",
    alignItems: "center",
    right: "6.5%",
    flexDirection: "row",
    position: "absolute",
  },
  textClr: {
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  iconPosition1: {
    top: "5.62%",
    position: "absolute",
  },
  minPosition: {
    opacity: 0.5,
    height: "4.29%",
    left: "6.5%",
    position: "absolute",
  },
  groupIconPosition: {
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
    height: "6.42%",
    position: "absolute",
  },
  likedTypo: {
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 12,
    textAlign: "left",
    fontSize: FontSize.size_5xs_3,
    position: "absolute",
  },
  pasarTypo: {
    fontFamily: FontFamily.bodyMediumBold,
    lineHeight: 12,
    fontSize: FontSize.size_4xs_5,
    left: "6.5%",
    textAlign: "left",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    position: "absolute",
  },
  kTypo: {
    color: Color.primary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 12,
    textAlign: "left",
    fontSize: FontSize.size_5xs_3,
    position: "absolute",
  },
  component1IconLayout: {
    bottom: "4.29%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  eventCard1ShadowBox: {
    elevation: 2.43,
    shadowRadius: 2.43,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconPosition: {
    top: "5.61%",
    position: "absolute",
  },
  groupLayout: {
    height: "6.45%",
    position: "absolute",
  },
  maskGroupIcon: {
    height: "78.27%",
    bottom: "21.73%",
  },
  eventCardChild: {
    height: "27.88%",
    top: "72.12%",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    bottom: "0%",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    width: "10.97%",
    bottom: "85.8%",
    left: "82.53%",
    top: "5.62%",
    position: "absolute",
  },
  antDesignstarFilledIcon: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  text: {
    lineHeight: 11,
    fontFamily: FontFamily.figtreeBold,
    marginLeft: 4.85,
    textAlign: "left",
    fontSize: FontSize.size_5xs_3,
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  antDesignstarFilledParent: {
    width: "16.79%",
    top: "75.62%",
    bottom: "19.03%",
    left: "76.71%",
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
    height: "12.52%",
    width: "15.43%",
    right: "78.07%",
    bottom: "81.86%",
    shadowRadius: 2.42,
    elevation: 2.42,
    left: "6.5%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  min: {
    left: "10.88%",
    fontSize: FontSize.size_5xs_9,
    fontFamily: FontFamily.figtreeRegular,
    color: Color.colorGray_300,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    width: "8.31%",
    right: "91.69%",
  },
  minParent: {
    width: "65.97%",
    top: "81.24%",
    right: "27.53%",
    bottom: "14.47%",
  },
  groupIcon: {
    width: "45.81%",
    right: "54.19%",
  },
  kLiked: {
    top: "12.41%",
    left: "54.05%",
  },
  groupParent: {
    width: "41.83%",
    top: "87.92%",
    right: "51.67%",
    bottom: "5.66%",
    left: "6.5%",
  },
  pasarCorakHati: {
    width: "54.78%",
    top: "75.35%",
  },
  k: {
    top: "89.82%",
    left: "84.96%",
  },
  component1Icon: {
    width: "8.2%",
    top: "89.29%",
    right: "15.43%",
    left: "76.37%",
    height: "6.42%",
    position: "absolute",
  },
  eventCard: {
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  maskGroupIcon1: {
    height: "78.25%",
    bottom: "21.75%",
  },
  eventCardItem: {
    height: "27.9%",
    top: "72.1%",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    bottom: "0%",
    backgroundColor: Color.colorWhite,
  },
  icon1: {
    width: "10.96%",
    bottom: "85.81%",
    left: "82.54%",
    borderRadius: 61,
    right: "6.5%",
    height: "8.58%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  antDesignstarFilledGroup: {
    width: "16.78%",
    top: "75.6%",
    bottom: "19.05%",
    left: "76.72%",
  },
  dateIconCarousel1: {
    height: "12.51%",
    width: "15.42%",
    right: "78.08%",
    bottom: "81.87%",
    elevation: 2.43,
    shadowRadius: 2.43,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "6.5%",
  },
  minGroup: {
    width: "65.93%",
    top: "81.21%",
    right: "27.57%",
    bottom: "14.5%",
  },
  groupIcon1: {
    width: "45.33%",
    right: "54.67%",
  },
  kLiked1: {
    top: "12.33%",
    left: "53.33%",
  },
  groupGroup: {
    width: "42.37%",
    top: "87.93%",
    right: "51.13%",
    bottom: "5.61%",
    left: "6.5%",
  },
  pasarCorakHati1: {
    width: "54.8%",
    top: "75.33%",
  },
  k1: {
    top: "89.79%",
    left: "84.97%",
  },
  component1Icon1: {
    width: "8.25%",
    top: "89.26%",
    right: "15.37%",
    left: "76.38%",
    bottom: "4.29%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  eventCard1: {
    marginLeft: 13,
    height: 226,
    width: 177,
  },
  eventCardParent: {
    top: 290,
    left: 21,
    width: 334,
    height: 235,
    flexDirection: "row",
    position: "absolute",
  },
});

export default LocalEventsContainer;
