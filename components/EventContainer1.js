import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EventContainer from "./EventContainer";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EventContainer1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.eventCardParent}>
      <EventContainer
        dimensionsText={require("../assets/group58.png")}
        onEventCardPress={() => navigation.navigate("DetailsEventAboutDone")}
      />
      <View style={[styles.comingSoonCard2, styles.comingSoonCard2ShadowBox]}>
        <Image
          style={[styles.maskGroupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mask-group15.png")}
        />
        <View style={[styles.comingSoonCard2Child, styles.childPosition]} />
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon20.png")}
        />
        <View
          style={[styles.antDesignstarFilledParent, styles.armanRokniFlexBox]}
        >
          <Image
            style={styles.antDesignstarFilledIcon}
            contentFit="cover"
            source={require("../assets/antdesignstarfilled20.png")}
          />
          <Text style={[styles.text, styles.textClr]}>4.8</Text>
        </View>
        <View style={[styles.dateIconCarousel, styles.iconPosition]}>
          <View style={[styles.dateIconCarouselChild, styles.childPosition]} />
          <Text style={[styles.armanRokni, styles.textClr]}>
            <Text style={styles.armanRokniTxtContainer}>
              <Text style={styles.text1}>{`22
`}</Text>
              <Text style={styles.mar}>mar</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.minParent}>
          <Text style={styles.min}>Central Market, Kuala Lumpur</Text>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-613.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group59.png")}
          />
          <Text style={[styles.kLiked, styles.kTypo]}>+1k Liked</Text>
        </View>
        <Text style={[styles.pasarCorakHati, styles.textClr]}>
          Pasar Corak Hati Raya
        </Text>
        <Text style={[styles.k, styles.kTypo]}>+12k</Text>
        <Image
          style={[styles.component1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/component-121.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comingSoonCard2ShadowBox: {
    shadowOpacity: 1,
    elevation: 2.43,
    shadowRadius: 2.43,
    shadowOffset: {
      width: 0,
      height: 2.427503824234009,
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
  armanRokniFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textClr: {
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  groupPosition: {
    bottom: "0%",
    height: "100%",
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
    textAlign: "left",
    fontSize: FontSize.size_5xs_3,
    position: "absolute",
  },
  maskGroupIcon: {
    height: "78.27%",
    bottom: "21.73%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  comingSoonCard2Child: {
    height: "27.87%",
    top: "72.08%",
    bottom: "0.04%",
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  icon: {
    height: "8.57%",
    width: "10.95%",
    right: "6.49%",
    bottom: "85.82%",
    left: "82.56%",
    borderRadius: 61,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  antDesignstarFilledIcon: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  text: {
    lineHeight: 11,
    fontFamily: FontFamily.figtreeBold,
    marginLeft: 4.86,
    textAlign: "left",
    fontSize: FontSize.size_5xs_3,
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  antDesignstarFilledParent: {
    height: "5.34%",
    width: "16.76%",
    top: "75.57%",
    right: "6.55%",
    bottom: "19.08%",
    left: "76.69%",
    justifyContent: "flex-end",
    flexDirection: "row",
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
    alignItems: "center",
    position: "absolute",
  },
  dateIconCarousel: {
    height: "12.5%",
    width: "15.41%",
    right: "78.1%",
    bottom: "81.89%",
    left: "6.49%",
    shadowOpacity: 1,
    elevation: 2.43,
    shadowRadius: 2.43,
    shadowOffset: {
      width: 0,
      height: 2.427503824234009,
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
    height: "4.28%",
    width: "65.86%",
    top: "81.23%",
    right: "27.65%",
    bottom: "14.49%",
    opacity: 0.5,
    left: "6.49%",
    position: "absolute",
  },
  groupIcon: {
    width: "45.27%",
    right: "54.73%",
  },
  kLiked: {
    top: "12.33%",
    left: "53.4%",
    color: Color.colorDarkslateblue_100,
  },
  groupParent: {
    width: "42.38%",
    top: "87.94%",
    right: "51.13%",
    bottom: "5.61%",
    left: "6.49%",
  },
  pasarCorakHati: {
    width: "54.8%",
    top: "75.31%",
    fontSize: FontSize.size_4xs_5,
    lineHeight: 12,
    fontFamily: FontFamily.bodyMediumBold,
    left: "6.49%",
    textAlign: "left",
    position: "absolute",
  },
  k: {
    top: "89.8%",
    left: "84.93%",
    color: Color.primary,
  },
  component1Icon: {
    width: "8.24%",
    top: "89.27%",
    right: "15.41%",
    bottom: "4.28%",
    left: "76.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  comingSoonCard2: {
    width: 177,
    height: 226,
    marginLeft: 15,
  },
  eventCardParent: {
    top: 249,
    left: 27,
    width: 322,
    height: 235,
    flexDirection: "row",
    position: "absolute",
  },
});

export default EventContainer1;
