import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const PremiumPlanContainer = ({ rM20Month, onFramePressablePress }) => {
  return (
    <Pressable
      style={[styles.rectangleParent, styles.frameChildLayout1]}
      onPress={onFramePressablePress}
    >
      <View style={[styles.frameChild, styles.frameChildLayout1]} />
      <Text style={[styles.premiumPlan, styles.premiumPlanFlexBox]}>
        Premium Plan
      </Text>
      <Text style={styles.daysFreeTrial}>7-Days Free Trial experience</Text>
      <Text style={[styles.enhanceYourAccount, styles.yourTypo]}>
        Enhance your account visibility
      </Text>
      <Text style={[styles.developStrategicPartnerships, styles.yourTypo]}>
        Develop strategic partnerships.
      </Text>
      <Text
        style={[styles.showcaseYourProfessional, styles.yourTypo]}
      >{`Showcase your professional certificates and badges. `}</Text>
      <Text style={[styles.advancedPortfolioEnhancement, styles.yourTypo]}>
        Advanced portfolio enhancement and customisation
      </Text>
      <View style={styles.frameItem} />
      <Text style={[styles.rm20, styles.yourTypo]}>{rM20Month}</Text>
      <Image
        style={[styles.frameInner, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-811.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-811.png")}
      />
      <Image
        style={[styles.frameChild1, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-811.png")}
      />
      <Image
        style={[styles.frameChild2, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-811.png")}
      />
      <Image
        style={[styles.frameChild3, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-811.png")}
      />
      <Image
        style={styles.userInterfaceThunder}
        contentFit="cover"
        source={require("../assets/user-interface--thunder.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChildLayout1: {
    height: 202,
    width: 161,
    position: "absolute",
  },
  premiumPlanFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  yourTypo: {
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    lineHeight: 12,
    color: Color.colorWhite,
    position: "absolute",
  },
  frameChildLayout: {
    height: 4,
    width: 4,
    left: 7,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.primary,
  },
  premiumPlan: {
    top: 27,
    left: 16,
    fontSize: FontSize.size_base,
    lineHeight: 6,
    textAlign: "center",
    justifyContent: "center",
    width: 114,
    color: Color.colorWhite,
    fontFamily: FontFamily.figtreeBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  daysFreeTrial: {
    top: 45,
    textAlign: "left",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    left: 15,
    color: Color.colorWhite,
    fontFamily: FontFamily.figtreeBold,
    fontWeight: "700",
    position: "absolute",
  },
  enhanceYourAccount: {
    top: 60,
    fontSize: FontSize.size_5xs,
    left: 15,
    fontFamily: FontFamily.figtreeRegular,
  },
  developStrategicPartnerships: {
    top: 75,
    fontSize: FontSize.size_5xs,
    left: 15,
    fontFamily: FontFamily.figtreeRegular,
  },
  showcaseYourProfessional: {
    top: 119,
    width: 146,
    fontSize: FontSize.size_5xs,
    left: 15,
    fontFamily: FontFamily.figtreeRegular,
    alignItems: "center",
    display: "flex",
  },
  advancedPortfolioEnhancement: {
    top: 92,
    width: 139,
    fontSize: FontSize.size_5xs,
    left: 15,
    fontFamily: FontFamily.figtreeRegular,
    alignItems: "center",
    display: "flex",
  },
  frameItem: {
    top: 153,
    left: 28,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorMidnightblue_100,
    width: 106,
    height: 32,
    position: "absolute",
  },
  rm20: {
    top: 163,
    left: 51,
    fontSize: FontSize.size_3xs,
  },
  frameInner: {
    top: 49,
  },
  ellipseIcon: {
    top: 64,
  },
  frameChild1: {
    top: 79,
  },
  frameChild2: {
    top: 95,
  },
  frameChild3: {
    top: 124,
  },
  userInterfaceThunder: {
    height: "9.9%",
    width: "12.42%",
    top: "9.9%",
    right: "10.56%",
    bottom: "80.2%",
    left: "77.02%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    top: 262,
    left: 197,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
});

export default PremiumPlanContainer;
