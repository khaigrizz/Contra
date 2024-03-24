import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TopProfilesContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13Mini1Inner}>
      <View style={styles.artisanCardParent}>
        <Pressable
          style={styles.artisanCard}
          onPress={() => navigation.navigate("ProfileDetailsAbout")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/artisan-card2.png")}
          />
        </Pressable>
        <Image
          style={[styles.artisanCardIcon, styles.artisanCardLayout]}
          contentFit="cover"
          source={require("../assets/artisan-card3.png")}
        />
        <Image
          style={[styles.artisanCardIcon1, styles.artisanCardLayout]}
          contentFit="cover"
          source={require("../assets/artisan-card4.png")}
        />
        <Image
          style={[styles.artisanCardIcon2, styles.artisanCardLayout]}
          contentFit="cover"
          source={require("../assets/artisan-card5.png")}
        />
        <View style={[styles.stWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.st, styles.stTypo]}>1st</Text>
        </View>
        <View style={[styles.ndWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.nd, styles.stTypo]}>2nd</Text>
        </View>
        <View style={[styles.rdWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.rd, styles.stTypo]}>3rd</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artisanCardLayout: {
    marginLeft: 14,
    width: 105,
    overflow: "hidden",
    height: 136,
  },
  wrapperFlexBox: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    borderRadius: 14,
    top: 10,
    position: "absolute",
  },
  stTypo: {
    textAlign: "left",
    fontFamily: FontFamily.jostSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_6xs_8,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  artisanCard: {
    zIndex: 0,
    width: 105,
    height: 136,
  },
  artisanCardIcon: {
    zIndex: 1,
  },
  artisanCardIcon1: {
    zIndex: 2,
  },
  artisanCardIcon2: {
    zIndex: 3,
  },
  st: {
    color: Color.colorBrown_100,
  },
  stWrapper: {
    left: 9,
    zIndex: 4,
  },
  nd: {
    color: Color.colorGold_200,
  },
  ndWrapper: {
    left: 127,
    zIndex: 5,
  },
  rd: {
    color: Color.colorSeagreen,
  },
  rdWrapper: {
    left: 245,
    zIndex: 6,
  },
  artisanCardParent: {
    top: 0,
    left: 0,
    flexDirection: "row",
    overflow: "hidden",
    position: "absolute",
  },
  iphone13Mini1Inner: {
    top: 324,
    left: 24,
    width: 329,
    height: 136,
    position: "absolute",
  },
});

export default TopProfilesContainer;
