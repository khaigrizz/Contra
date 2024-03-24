import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordForm = ({ passwordFields, propTop }) => {
  const passwordStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.password, styles.passwordLayout, passwordStyle]}>
      <View style={[styles.passwordChild, styles.passwordLayout]} />
      <Image
        style={[styles.passwordItem, styles.eyeIconPosition]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={styles.confirmpassword}>{passwordFields}</Text>
      <Image
        style={[styles.eyeIcon, styles.eyeIconPosition]}
        contentFit="cover"
        source={require("../assets/eye.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordLayout: {
    height: 55,
    width: 317,
    position: "absolute",
  },
  eyeIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  passwordChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    borderRadius: Border.br_11xl,
  },
  passwordItem: {
    height: "36.36%",
    width: "5.05%",
    top: "30.91%",
    right: "90.22%",
    bottom: "32.73%",
    left: "4.73%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  confirmpassword: {
    top: 21,
    left: 42,
    fontSize: FontSize.bodySmallBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorDimgray_100,
    textAlign: "center",
    position: "absolute",
  },
  eyeIcon: {
    top: 18,
    left: 281,
    width: 20,
    height: 20,
    borderRadius: Border.br_11xl,
  },
  password: {
    top: 354,
    left: 29,
  },
});

export default PasswordForm;
