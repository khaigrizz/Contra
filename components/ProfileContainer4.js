import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import UserListContainer from "./UserListContainer";
import { Border, Color } from "../GlobalStyles";

const ProfileContainer4 = () => {
  return (
    <View style={styles.rectangleParent}>
      <LinearGradient
        style={[styles.frameChild, styles.frameShadowBox]}
        locations={[0, 1]}
        colors={["#386969", "#171766"]}
      />
      <UserListContainer
        userTypeDimensions={require("../assets/mappin11.png")}
        userSubscriptionType="Premium User"
        propTop={-27}
        propLeft={139}
      />
      <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout1]}
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
            style={[styles.groupIcon3, styles.groupIconLayout1]}
            contentFit="cover"
            source={require("../assets/group76.png")}
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
    top: 0,
  },
  frameItemLayout: {
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
  frameChild: {
    left: 9,
    borderRadius: Border.br_11xl,
    shadowRadius: 4,
    elevation: 4,
    width: 319,
    height: 240,
    backgroundColor: "transparent",
    position: "absolute",
  },
  frameItem: {
    left: 0,
    borderRadius: 26,
    backgroundColor: Color.colorDarkslategray_100,
    shadowRadius: 3.42,
    elevation: 3.42,
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

export default ProfileContainer4;
