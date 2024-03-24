import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import HeaderContainer from "./HeaderContainer";
import { Border, Color } from "../GlobalStyles";

const ProfileCardContainerFreemium = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.profileCardFreemium}
      onPress={() => navigation.navigate("ProfilePageFreeUserCli11")}
    >
      <View style={[styles.profileCardFreemiumChild, styles.childShadowBox]} />
      <HeaderContainer />
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout1]}
            contentFit="cover"
            source={require("../assets/group51.png")}
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
            style={[styles.groupIcon3, styles.groupIconLayout1]}
            contentFit="cover"
            source={require("../assets/group29.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameChildLayout: {
    height: 41,
    width: 183,
    position: "absolute",
  },
  groupIconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIconLayout: {
    bottom: "0.91%",
    top: "0.45%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "20.19%",
    height: "98.64%",
    position: "absolute",
  },
  profileCardFreemiumChild: {
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
  frameChild: {
    top: 0,
    left: 0,
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
  rectangleParent: {
    top: 231,
    left: 77,
  },
  profileCardFreemium: {
    height: "33.53%",
    width: "88.53%",
    top: "27.49%",
    right: "5.87%",
    bottom: "38.98%",
    left: "5.6%",
    position: "absolute",
  },
});

export default ProfileCardContainerFreemium;
