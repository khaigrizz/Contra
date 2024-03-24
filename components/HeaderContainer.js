import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import GenderFemaleShapeCircleN from "./GenderFemaleShapeCircleN";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HeaderContainer = () => {
  return (
    <View style={styles.header}>
      <GenderFemaleShapeCircleN
        genderFemaleShapeCircleNG={require("../assets/memoji.png")}
        genderFemaleShapeCircleNPosition="absolute"
        genderFemaleShapeCircleNBorderRadius={607}
        genderFemaleShapeCircleNWidth={126}
        genderFemaleShapeCircleNHeight={126}
        genderFemaleShapeCircleNTop={30}
        genderFemaleShapeCircleNLeft={103}
      />
      <Text style={[styles.freelancerArtist, styles.helloWelcomeToTypo]}>
        Freelancer, Artist
      </Text>
      <Text style={[styles.deanTajuddin, styles.deanTajuddinFlexBox]}>
        Dean Tajuddin
      </Text>
      <Image
        style={[styles.mapPinIcon, styles.mapPinIconPosition]}
        contentFit="cover"
        source={require("../assets/mappin6.png")}
      />
      <Text style={[styles.bangiSelangor, styles.deanTajuddinFlexBox]}>
        Bangi, Selangor
      </Text>
      <Image
        style={[styles.userInterfaceShare, styles.mapPinIconPosition]}
        contentFit="cover"
        source={require("../assets/user-interface--share.png")}
      />
      <Text style={[styles.helloWelcomeTo, styles.helloWelcomeToTypo]}>
        Hello, welcome to my card!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  helloWelcomeToTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  deanTajuddinFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  mapPinIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  freelancerArtist: {
    top: "70.04%",
    left: "34.38%",
    fontSize: FontSize.bodySmallBold_size,
  },
  deanTajuddin: {
    top: 156,
    left: 100,
    fontSize: FontSize.size_mid,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  mapPinIcon: {
    height: "4.71%",
    width: "3.65%",
    top: "78.6%",
    right: "61.37%",
    bottom: "16.69%",
    left: "34.98%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  bangiSelangor: {
    top: 202,
    left: 131,
    fontFamily: FontFamily.figtreeRegular,
    fontSize: FontSize.bodySmallBold_size,
  },
  userInterfaceShare: {
    top: 46,
    left: 286,
    width: 24,
    height: 24,
  },
  helloWelcomeTo: {
    top: -11,
    left: 73,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
  },
  header: {
    top: 0,
    left: 0,
    width: 332,
    height: 257,
    position: "absolute",
  },
});

export default HeaderContainer;
