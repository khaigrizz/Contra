import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WelcomeContainer = ({ propLeft, propTop, propLeft1 }) => {
  const usernameOrEmailStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const usernameOrEmail1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft1),
    };
  }, [propTop, propLeft1]);

  return (
    <View
      style={[
        styles.usernameOrEmail,
        styles.usernameLayout,
        usernameOrEmailStyle,
      ]}
    >
      <View style={[styles.usernameOrEmailChild, styles.userIconLayout]} />
      <Text style={[styles.usernameOrEmail1, usernameOrEmail1Style]}>
        Username or Email
      </Text>
      <Image
        style={[styles.userIcon, styles.userIconLayout]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  usernameLayout: {
    height: 55,
    width: 317,
  },
  userIconLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  usernameOrEmailChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    height: 55,
    width: 317,
  },
  usernameOrEmail1: {
    top: 20,
    left: 39,
    fontSize: FontSize.bodySmallBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDimgray_100,
    textAlign: "center",
    position: "absolute",
  },
  userIcon: {
    top: 16,
    left: 11,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  usernameOrEmail: {
    top: 182,
    left: 32,
    position: "absolute",
  },
});

export default WelcomeContainer;
