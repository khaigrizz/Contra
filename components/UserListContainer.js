import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import GenderFemaleShapeCircleN from "./GenderFemaleShapeCircleN";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UserListContainer = ({
  userTypeDimensions,
  userSubscriptionType,
  propTop,
  propLeft,
}) => {
  const headerStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const freemiumUserStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.header, headerStyle]}>
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
        style={styles.mapPinIcon}
        contentFit="cover"
        source={userTypeDimensions}
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
        style={[styles.userInterfacePen, styles.userLayout]}
        contentFit="cover"
        source={require("../assets/user-interface--pen.png")}
      />
      <Image
        style={[styles.userInterfaceMenu, styles.userLayout]}
        contentFit="cover"
        source={require("../assets/user-interface--menu.png")}
      />
      <Text
        style={[
          styles.freemiumUser,
          styles.deanTajuddinFlexBox,
          freemiumUserStyle,
        ]}
      >
        {userSubscriptionType}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bangiSelangorTypo: {
    fontSize: FontSize.bodySmallBold_size,
    color: Color.colorWhite,
  },
  deanTajuddinFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  userLayout: {
    width: "7.24%",
    height: "9.34%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
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
    top: "17.12%",
    right: "84.02%",
    bottom: "73.54%",
    left: "8.75%",
  },
  userInterfaceMenu: {
    top: "-4.67%",
    right: "-0.12%",
    bottom: "95.33%",
    left: "92.88%",
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
    top: 0,
    left: 0,
    width: 332,
    height: 257,
    position: "absolute",
  },
});

export default UserListContainer;
