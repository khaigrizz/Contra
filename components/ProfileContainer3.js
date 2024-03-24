import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import GenderFemaleShapeCircleN from "./GenderFemaleShapeCircleN";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProfileContainer3 = () => {
  return (
    <View style={[styles.rectangleParent, styles.headerLayout]}>
      <LinearGradient
        style={[styles.frameChild, styles.frameShadowBox]}
        locations={[0, 1]}
        colors={["#386969", "#171766"]}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <GenderFemaleShapeCircleN
          genderFemaleShapeCircleNG={require("../assets/memoji.png")}
          genderFemaleShapeCircleNPosition="absolute"
          genderFemaleShapeCircleNBorderRadius={607}
          genderFemaleShapeCircleNWidth={126}
          genderFemaleShapeCircleNHeight={126}
          genderFemaleShapeCircleNTop={30}
          genderFemaleShapeCircleNLeft={103}
        />
        <Text style={styles.freelancerArtist}>Freelancer, Artist</Text>
        <Text style={[styles.deanTajuddin, styles.deanTajuddinFlexBox]}>
          Dean Tajuddin
        </Text>
        <Image
          style={[styles.mapPinIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mappin11.png")}
        />
        <Text style={[styles.bangiSelangor, styles.deanTajuddinFlexBox]}>
          Bangi, Selangor
        </Text>
        <Image
          style={styles.userInterfaceShare}
          contentFit="cover"
          source={require("../assets/user-interface--share1.png")}
        />
        <Image
          style={[styles.userInterfaceThunder, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user-interface--thunder1.png")}
        />
        <Text
          style={[styles.helloWelcomeTo, styles.helloWelcomeToFlexBox]}
        >{`Enjoy unlimited customisation with 
Conta Premium `}</Text>
        <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
          <View style={[styles.frameItem, styles.frameItemLayout]} />
          <View style={styles.groupParent}>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group73.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group74.png")}
            />
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group78.png")}
            />
            <Image
              style={[styles.groupIcon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/group76.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.withContraPremium, styles.helloWelcomeToFlexBox]}>
        With Contra Premium, you can embed links to your portfolio and other
        socials!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    width: 332,
    position: "absolute",
  },
  frameShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  headerPosition: {
    left: 0,
    top: 0,
  },
  deanTajuddinFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  helloWelcomeToFlexBox: {
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  frameItemLayout: {
    height: 41,
    width: 183,
    position: "absolute",
  },
  groupIconLayout: {
    bottom: "0.91%",
    top: "0.45%",
    width: "20.19%",
    height: "98.64%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameChild: {
    top: 27,
    left: 9,
    borderRadius: Border.br_11xl,
    shadowRadius: 4,
    elevation: 4,
    width: 319,
    height: 240,
    backgroundColor: "transparent",
    position: "absolute",
  },
  freelancerArtist: {
    top: "70.04%",
    left: "34.38%",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.bodySmallBold_size,
    position: "absolute",
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
    overflow: "hidden",
    position: "absolute",
  },
  userInterfaceThunder: {
    height: "9.34%",
    width: "7.24%",
    top: "60.7%",
    right: "23.4%",
    bottom: "29.96%",
    left: "69.36%",
  },
  helloWelcomeTo: {
    top: -23,
    left: 35,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  frameItem: {
    borderRadius: 26,
    backgroundColor: Color.colorDarkslategray_100,
    shadowRadius: 3.42,
    elevation: 3.42,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupIcon: {
    right: "0%",
    bottom: "1.36%",
    left: "79.81%",
    width: "20.19%",
    height: "98.64%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  groupIcon1: {
    right: "52.47%",
    left: "27.35%",
  },
  groupIcon2: {
    right: "26.23%",
    left: "53.58%",
  },
  groupIcon3: {
    height: "96.82%",
    width: "19.81%",
    top: "4.55%",
    right: "78.33%",
    bottom: "-1.36%",
    left: "1.86%",
  },
  groupParent: {
    top: 10,
    left: 37,
    width: 107,
    height: 22,
    position: "absolute",
  },
  rectangleGroup: {
    top: 231,
    left: 77,
  },
  header: {
    height: 257,
    width: 332,
    position: "absolute",
  },
  withContraPremium: {
    top: 294,
    left: 6,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorTeal,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    fontSize: FontSize.bodySmallBold_size,
  },
  rectangleParent: {
    height: "54.18%",
    marginLeft: -166,
    bottom: "45.82%",
    left: "50%",
    top: "0%",
    width: 332,
  },
});

export default ProfileContainer3;
