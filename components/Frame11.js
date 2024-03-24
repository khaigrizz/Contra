import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Frame3 from "./Frame3";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame1 = ({ onClose }) => {
  const [frameContainer4Visible, setFrameContainer4Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer4 = useCallback(() => {
    setFrameContainer4Visible(true);
  }, []);

  const closeFrameContainer4 = useCallback(() => {
    setFrameContainer4Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.blurrFrameParent, styles.iconLayout]}>
        <View style={styles.blurrFrame} />
        <View style={[styles.frameParent, styles.parentLayout]}>
          <View
            style={[styles.helloWelcomeToMyCardParent, styles.parentLayout]}
          >
            <Text style={[styles.helloWelcomeTo, styles.helloWelcomeToTypo]}>
              Hello, welcome to my card!
            </Text>
            <Text style={[styles.iEnjoyMaking, styles.emailMeTypo]}>
              I enjoy making traditional art! Let’s connect with my socials
            </Text>
            <Pressable
              style={[styles.rectangleParent, styles.parentLayout]}
              onPress={openFrameContainer4}
            >
              <View style={[styles.frameChild, styles.frameShadowBox]} />
              <View style={[styles.header, styles.parentLayout]}>
                <View style={styles.ellipseParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemPosition]}
                    contentFit="cover"
                    source={require("../assets/ellipse-29.png")}
                  />
                  <Image
                    style={[styles.memojiBoys315, styles.frameItemPosition]}
                    contentFit="cover"
                    source={require("../assets/memoji-boys-315.png")}
                  />
                </View>
                <Text
                  style={[styles.fullTimeFreelancer, styles.helloWelcomeToTypo]}
                >
                  Full-Time Freelancer
                </Text>
                <Text style={[styles.lucyTanner, styles.lucyTannerFlexBox]}>
                  Lucy Tanner
                </Text>
                <Image
                  style={[styles.mapPinIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mappin1.png")}
                />
                <Text
                  style={[styles.subangJayaSelangor, styles.lucyTannerFlexBox]}
                >
                  Subang Jaya, Selangor
                </Text>
                <Image
                  style={[styles.userInterfaceShare, styles.userLayout]}
                  contentFit="cover"
                  source={require("../assets/user-interface--share.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.frameInnerLayout]}>
                <View style={[styles.frameInner, styles.frameInnerLayout]} />
                <Image
                  style={[styles.groupIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
              <View style={styles.groupParent}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group71.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group72.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group68.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group5.png")}
                />
              </View>
            </Pressable>
          </View>
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.frameChild1ShadowBox,
            ]}
            locations={[0, 1]}
            colors={["#ae397f", "#ffc3ea"]}
          />
          <LinearGradient
            style={[styles.frameChild1, styles.frameChild1ShadowBox]}
            locations={[0, 1]}
            colors={["#ae397f", "#ffc3ea"]}
          />
          <Text style={[styles.emailMe, styles.emailMeTypo]}>Email me</Text>
          <Text style={[styles.whatsappMeFor, styles.emailMeTypo]}>
            Whatsapp me for enquiries
          </Text>
          <Image
            style={[styles.rectangleIcon, styles.frameChild2Layout]}
            contentFit="cover"
            source={require("../assets/rectangle-5493.png")}
          />
          <Image
            style={[styles.frameChild2, styles.frameChild2Layout]}
            contentFit="cover"
            source={require("../assets/rectangle-5494.png")}
          />
        </View>
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-5495.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-5496.png")}
        />
        <Pressable
          style={[styles.userInterfaceClose, styles.userLayout]}
          onPress={() => navigation.navigate("ProfileDetailsCollections")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/user-interface--close.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer4Visible}>
        <View style={styles.frameContainer4Overlay}>
          <Pressable
            style={styles.frameContainer4Bg}
            onPress={closeFrameContainer4}
          />
          <Frame3 onClose={closeFrameContainer4} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  parentLayout: {
    width: 332,
    position: "absolute",
  },
  helloWelcomeToTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  emailMeTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodySmallBold_size,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
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
  frameItemPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  lucyTannerFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  userLayout: {
    height: 24,
    width: 24,
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
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupIconLayout: {
    bottom: "0.91%",
    top: "0.45%",
    width: "20.19%",
    height: "98.64%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  frameChild1ShadowBox: {
    backgroundColor: "transparent",
    height: 38,
    width: 276,
    left: 27,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  frameChild2Layout: {
    height: 132,
    width: 132,
    borderRadius: 35,
    top: 371,
    position: "absolute",
  },
  frameChildLayout: {
    top: 662,
    height: 132,
    width: 132,
    borderRadius: 35,
    position: "absolute",
  },
  blurrFrame: {
    top: 3,
    backgroundColor: "rgba(217, 217, 217, 0.2)",
    height: 811,
    left: 0,
    position: "absolute",
    width: 375,
  },
  helloWelcomeTo: {
    top: -90,
    left: 64,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iEnjoyMaking: {
    top: 215,
    left: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
  },
  frameContainer4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameChild: {
    top: 8,
    left: 9,
    backgroundColor: Color.colorMediumvioletred,
    width: 319,
    height: 240,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
  fullTimeFreelancer: {
    top: "70.04%",
    left: "31.06%",
    fontSize: FontSize.bodySmallBold_size,
  },
  lucyTanner: {
    top: 156,
    left: 112,
    fontSize: FontSize.size_mid,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  mapPinIcon: {
    height: "4.71%",
    width: "3.65%",
    top: "78.6%",
    right: "66.8%",
    bottom: "16.69%",
    left: "29.55%",
    overflow: "hidden",
    position: "absolute",
  },
  subangJayaSelangor: {
    top: 202,
    left: 113,
    fontFamily: FontFamily.figtreeRegular,
    fontSize: FontSize.bodySmallBold_size,
  },
  userInterfaceShare: {
    top: 46,
    left: 286,
    overflow: "hidden",
  },
  header: {
    top: -19,
    height: 257,
    left: 0,
  },
  frameInner: {
    top: 0,
    borderRadius: 26,
    backgroundColor: Color.colorWhite,
    shadowRadius: 3.42,
    elevation: 3.42,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 183,
    left: 0,
  },
  groupIcon: {
    height: "49.51%",
    width: "5.85%",
    top: "31.22%",
    right: "76.37%",
    bottom: "19.27%",
    left: "17.78%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleGroup: {
    top: 212,
    left: 77,
  },
  groupIcon1: {
    right: "0%",
    bottom: "1.36%",
    left: "79.81%",
    top: "0%",
  },
  groupIcon2: {
    right: "52.47%",
    left: "27.35%",
  },
  groupIcon3: {
    right: "26.23%",
    left: "53.58%",
  },
  groupIcon4: {
    top: "1.36%",
    right: "79.81%",
    bottom: "0%",
    left: "0%",
  },
  groupParent: {
    top: 222,
    left: 114,
    width: 107,
    height: 22,
    position: "absolute",
  },
  rectangleParent: {
    top: -50,
    left: -1,
    height: 248,
  },
  helloWelcomeToMyCardParent: {
    height: "54.18%",
    marginLeft: -166,
    bottom: "45.82%",
    top: "0%",
    left: "50%",
    width: 332,
  },
  rectangleLineargradient: {
    top: 262,
  },
  frameChild1: {
    top: 317,
  },
  emailMe: {
    top: 327,
    left: 138,
  },
  whatsappMeFor: {
    top: 272,
    left: 87,
  },
  rectangleIcon: {
    left: 27,
    width: 132,
    borderRadius: 35,
    top: 371,
  },
  frameChild2: {
    left: 169,
  },
  frameParent: {
    marginLeft: -164.5,
    top: 148,
    height: 502,
    left: "50%",
    width: 332,
  },
  frameChild3: {
    left: 50,
  },
  frameChild4: {
    left: 192,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  userInterfaceClose: {
    left: 326,
    top: 58,
  },
  blurrFrameParent: {
    height: 846,
    width: 375,
  },
});

export default Frame1;
