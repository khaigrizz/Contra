import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ArtisanCard = () => {
  return (
    <View style={[styles.artisanCard, styles.artisanCardShadowBox]}>
      <View style={styles.artisanCardChild} />
      <Image
        style={styles.artisanCardItem}
        contentFit="cover"
        source={require("../assets/ellipse-292.png")}
      />
      <Image
        style={styles.memojiBoys315}
        contentFit="cover"
        source={require("../assets/memoji-boys-3152.png")}
      />
      <View style={[styles.artisanCardInner, styles.artisanCardInnerBg]} />
      <Text style={styles.raghuSimon}>Raghu Simon</Text>
      <View style={styles.parent}>
        <Text style={styles.text}>200</Text>
        <Image
          style={[styles.component1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/component-14.png")}
        />
        <Image
          style={[styles.component3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/component-3.png")}
        />
        <Image
          style={[styles.component4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/component-4.png")}
        />
        <Image
          style={[styles.component5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/component-14.png")}
        />
        <Image
          style={[styles.component1Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/component-15.png")}
        />
      </View>
      <Text style={[styles.photographerPartTime, styles.clientsTypo]}>
        Photographer, Part-time
      </Text>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group25.png")}
        />
        <Text style={[styles.clients, styles.clientsTypo]}>+240 Clients</Text>
      </View>
      <View style={[styles.armanRokniWrapper, styles.armanFlexBox]}>
        <Text style={[styles.armanRokni, styles.armanFlexBox]}>VOlunteer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artisanCardShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  artisanCardInnerBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  clientsTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_6xs_3,
    textAlign: "left",
    position: "absolute",
  },
  armanFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  artisanCardChild: {
    height: "61.93%",
    width: "108.08%",
    right: "-3.45%",
    bottom: "38.07%",
    left: "-4.63%",
    backgroundColor: Color.primary,
    top: "0%",
    position: "absolute",
  },
  artisanCardItem: {
    top: 7,
    left: 14,
    width: 109,
    height: 109,
    position: "absolute",
  },
  memojiBoys315: {
    top: 9,
    left: 22,
    width: 92,
    height: 111,
    position: "absolute",
  },
  artisanCardInner: {
    height: "47.33%",
    width: "131.13%",
    top: "61.02%",
    right: "-15.35%",
    bottom: "-8.35%",
    left: "-15.79%",
  },
  raghuSimon: {
    top: "66.36%",
    fontSize: 9,
    lineHeight: 11,
    color: Color.titelTextColor,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: "6.9%",
    position: "absolute",
  },
  text: {
    left: "60.72%",
    lineHeight: 8,
    fontFamily: FontFamily.montserratRegular,
    color: Color.liteBlackGrey,
    alignItems: "center",
    height: "100%",
    display: "flex",
    fontSize: FontSize.size_7xs_2,
    width: "39.28%",
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  component1Icon: {
    right: "88.58%",
    left: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    width: "11.42%",
  },
  component3Icon: {
    right: "77.15%",
    left: "11.42%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    width: "11.42%",
  },
  component4Icon: {
    right: "65.57%",
    left: "23%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    width: "11.42%",
  },
  component5Icon: {
    right: "54.15%",
    left: "34.43%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    width: "11.42%",
  },
  component1Icon1: {
    right: "42.72%",
    left: "45.85%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    width: "11.42%",
  },
  parent: {
    height: "4.15%",
    width: "46.92%",
    top: "68.47%",
    right: "-6.17%",
    bottom: "27.39%",
    left: "59.25%",
    position: "absolute",
  },
  photographerPartTime: {
    top: "74.72%",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.primary,
    left: "6.9%",
  },
  groupIcon: {
    right: "60.72%",
    left: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    width: "39.28%",
  },
  clients: {
    top: "12.7%",
    left: "46.38%",
    lineHeight: 10,
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorMidnightblue_100,
  },
  groupParent: {
    height: "7.16%",
    width: "54.77%",
    top: "85.74%",
    right: "38.33%",
    bottom: "7.1%",
    left: "6.9%",
    position: "absolute",
  },
  armanRokni: {
    lineHeight: 4,
    textTransform: "uppercase",
    textAlign: "center",
    width: 50,
    color: Color.colorMidnightblue_100,
    display: "flex",
    fontSize: FontSize.size_7xs_2,
    justifyContent: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  armanRokniWrapper: {
    top: 89,
    left: 86,
    borderRadius: 4,
    shadowRadius: 1.74,
    elevation: 1.74,
    width: 46,
    height: 15,
    flexDirection: "row",
    padding: 4,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  artisanCard: {
    shadowRadius: 4,
    elevation: 4,
    width: 136,
    height: 176,
  },
});

export default ArtisanCard;
