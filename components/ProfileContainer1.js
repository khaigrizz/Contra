import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import UserListContainer from "./UserListContainer";
import { Border, Color } from "../GlobalStyles";

const ProfileContainer1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.rectangleParent}
      onPress={() => navigation.navigate("ProfilePageFreeUserCli1")}
    >
      <View style={[styles.frameChild, styles.frameShadowBox]} />
      <UserListContainer
        userTypeDimensions={require("../assets/mappin8.png")}
        userSubscriptionType="Freemium User"
      />
      <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
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
            source={require("../assets/group52.png")}
          />
          <Image
            style={[styles.groupIcon3, styles.groupIconLayout1]}
            contentFit="cover"
            source={require("../assets/group53.png")}
          />
        </View>
      </View>
    </Pressable>
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
  frameItem: {
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
  rectangleGroup: {
    top: 231,
    left: 77,
  },
  rectangleParent: {
    height: "33.54%",
    width: "88.53%",
    top: "8.63%",
    right: "5.6%",
    bottom: "57.83%",
    left: "5.87%",
    position: "absolute",
  },
});

export default ProfileContainer1;
