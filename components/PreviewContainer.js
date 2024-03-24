import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GenderFemaleShapeCircleN from "./GenderFemaleShapeCircleN";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const PreviewContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["#386969", "#171766"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableShadowBox]}
          onPress={() => navigation.navigate("ProfilePagePremiumUserC")}
        />
      </LinearGradient>
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
        <Text style={[styles.freelancerArtist, styles.bangiSelangorTypo]}>
          Freelancer, Artist
        </Text>
        <Text style={[styles.deanTajuddin, styles.premiumUserFlexBox]}>
          Dean Tajuddin
        </Text>
        <Image
          style={[styles.mapPinIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mappin11.png")}
        />
        <Text style={[styles.bangiSelangor, styles.premiumUserFlexBox]}>
          Bangi, Selangor
        </Text>
        <Image
          style={styles.userInterfaceShare}
          contentFit="cover"
          source={require("../assets/user-interface--share1.png")}
        />
        <Image
          style={[styles.userInterfaceMenu, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user-interface--menu.png")}
        />
        <Text style={[styles.premiumUser, styles.premiumUserFlexBox]}>
          Premium User
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
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
            source={require("../assets/group75.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group76.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  bangiSelangorTypo: {
    fontSize: FontSize.bodySmallBold_size,
    color: Color.colorWhite,
  },
  premiumUserFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  frameChildLayout: {
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
  pressable: {
    borderRadius: Border.br_11xl,
    shadowRadius: 4,
    elevation: 4,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  wrapper: {
    left: 9,
    width: 319,
    height: 240,
    top: 0,
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
  userInterfaceMenu: {
    height: "9.34%",
    width: "7.24%",
    top: "-4.67%",
    right: "-0.12%",
    bottom: "95.33%",
    left: "92.88%",
  },
  premiumUser: {
    top: 12,
    left: 139,
    fontSize: FontSize.size_4xs,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.titelTextColor,
  },
  header: {
    top: -27,
    width: 332,
    height: 257,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: 26,
    backgroundColor: Color.colorDarkslategray_100,
    shadowRadius: 3.42,
    elevation: 3.42,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
  },
  groupIcon: {
    top: "0%",
    right: "0%",
    bottom: "1.36%",
    left: "79.81%",
    width: "20.19%",
    height: "98.64%",
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
    top: 204,
    left: 77,
  },
  rectangleParent: {
    height: "30.2%",
    width: "88.53%",
    top: "11.96%",
    right: "5.6%",
    bottom: "57.84%",
    left: "5.87%",
    position: "absolute",
  },
});

export default PreviewContainer;
