import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LucyTannerContainer = ({ onFramePressablePress, onVectorPress }) => {
  return (
    <Pressable
      style={[styles.rectangleParent, styles.frameChildLayout]}
      onPress={onFramePressablePress}
    >
      <View style={[styles.frameChild, styles.frameShadowBox]} />
      <View style={styles.header}>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.frameItem, styles.frameItemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-29.png")}
          />
          <Image
            style={[styles.memojiBoys315, styles.frameItemPosition]}
            contentFit="cover"
            source={require("../assets/memoji-boys-3153.png")}
          />
        </View>
        <Text style={styles.profileDetail}>Profile Detail</Text>
        <Pressable
          style={[styles.vector, styles.vectorPosition]}
          onPress={onVectorPress}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Text style={styles.fullTimeFreelancer}>Full-Time Freelancer</Text>
        <Text style={[styles.lucyTanner, styles.lucyTannerFlexBox]}>
          Lucy Tanner
        </Text>
        <Image
          style={[styles.mapPinIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mappin1.png")}
        />
        <Text style={[styles.subangJayaSelangor, styles.lucyTannerFlexBox]}>
          Subang Jaya, Selangor
        </Text>
        <Image
          style={styles.userInterfaceShare}
          contentFit="cover"
          source={require("../assets/user-interface--share.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.frameInnerLayout]}>
        <View style={[styles.frameInner, styles.frameInnerLayout]} />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout1]}
            contentFit="cover"
            source={require("../assets/group66.png")}
          />
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group67.png")}
          />
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group68.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.groupIconLayout1]}
            contentFit="cover"
            source={require("../assets/group5.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 240,
    position: "absolute",
  },
  frameShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
  },
  frameItemPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorPosition: {
    top: "1.36%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lucyTannerFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameInnerLayout: {
    height: 41,
    width: 183,
    position: "absolute",
  },
  groupIconLayout1: {
    width: "20.19%",
    height: "98.64%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
    left: 9,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorMediumvioletred,
    shadowRadius: 4,
    elevation: 4,
    width: 319,
    height: 240,
    position: "absolute",
  },
  frameItem: {
    marginTop: -57.25,
    marginLeft: -63,
    height: 126,
    width: 126,
  },
  memojiBoys315: {
    marginTop: -68.75,
    marginLeft: -53.4,
    width: 105,
    height: 128,
  },
  ellipseParent: {
    top: 19,
    left: 104,
    height: 137,
    width: 126,
    position: "absolute",
  },
  profileDetail: {
    marginTop: -128.5,
    width: "30.76%",
    left: "38.3%",
    color: Color.colorMidnightblue_100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.bodySmallBold_size,
    top: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    right: "98.22%",
    bottom: "94.9%",
    width: "1.78%",
    height: "3.74%",
    position: "absolute",
  },
  fullTimeFreelancer: {
    top: "70.04%",
    left: "31.06%",
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.bodySmallBold_size,
    position: "absolute",
  },
  lucyTanner: {
    top: 156,
    left: 112,
    fontSize: FontSize.size_mid,
    lineHeight: 24,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
  },
  mapPinIcon: {
    height: "4.71%",
    width: "3.65%",
    top: "78.6%",
    right: "66.8%",
    bottom: "16.69%",
    left: "29.55%",
    position: "absolute",
  },
  subangJayaSelangor: {
    top: 202,
    left: 113,
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
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
  header: {
    top: -27,
    height: 257,
    left: 0,
    width: 332,
    position: "absolute",
  },
  frameInner: {
    borderRadius: 26,
    backgroundColor: Color.colorWhite,
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
    right: "79.81%",
    bottom: "0%",
    top: "1.36%",
    left: "0%",
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
    top: 73,
    left: 21,
    width: 332,
  },
});

export default LucyTannerContainer;
