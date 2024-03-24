import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import GenderFemaleShapeCircleN from "./GenderFemaleShapeCircleN";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const ProfileContainer2 = ({ uniqueId, dimensionsCode }) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.frameShadowBox]} />
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
        <Text style={[styles.freelancerArtist, styles.bangiSelangorTypo]}>
          Freelancer, Artist
        </Text>
        <Text style={[styles.deanTajuddin, styles.deanTajuddinFlexBox]}>
          Dean Tajuddin
        </Text>
        <Image
          style={[styles.mapPinIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mappin6.png")}
        />
        <Text style={[styles.bangiSelangor, styles.deanTajuddinFlexBox]}>
          Bangi, Selangor
        </Text>
        <Image
          style={styles.userInterfaceShare}
          contentFit="cover"
          source={uniqueId}
        />
        <Image
          style={[styles.userInterfacePen, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user-interface--pen.png")}
        />
        <Text style={[styles.freemiumUser, styles.deanTajuddinFlexBox]}>
          Freemium User
        </Text>
      </View>
      <Image
        style={styles.userInterfaceMenu}
        contentFit="cover"
        source={require("../assets/user-interface--menu.png")}
      />
      <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <View style={styles.groupParent}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={dimensionsCode}
          />
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group46.png")}
          />
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group63.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group29.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  bangiSelangorTypo: {
    fontSize: FontSize.bodySmallBold_size,
    color: Color.colorWhite,
  },
  deanTajuddinFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    backgroundColor: Color.colorTeal,
    shadowRadius: 4,
    elevation: 4,
    width: 319,
    height: 240,
    position: "absolute",
  },
  freelancerArtist: {
    top: "70.04%",
    left: "34.38%",
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  deanTajuddin: {
    top: 156,
    left: 100,
    fontSize: FontSize.size_mid,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorWhite,
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
    color: Color.colorWhite,
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
  userInterfacePen: {
    height: "9.34%",
    width: "7.24%",
    top: "17.12%",
    right: "84.02%",
    bottom: "73.54%",
    left: "8.75%",
  },
  freemiumUser: {
    top: 12,
    left: 137,
    fontSize: FontSize.size_4xs,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.titelTextColor,
  },
  header: {
    width: 332,
    height: 257,
    position: "absolute",
  },
  userInterfaceMenu: {
    height: "8.82%",
    width: "7.23%",
    top: "-4.41%",
    bottom: "95.59%",
    left: "92.77%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  frameItem: {
    borderRadius: 26,
    backgroundColor: Color.colorWhite,
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
    top: "0%",
    bottom: "1.36%",
    left: "79.81%",
    width: "20.19%",
    height: "98.64%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
  rectangleParent: {
    height: "33.53%",
    width: "88.53%",
    top: "8.63%",
    right: "5.6%",
    bottom: "57.84%",
    left: "5.87%",
    position: "absolute",
  },
});

export default ProfileContainer2;
