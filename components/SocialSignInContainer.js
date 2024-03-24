import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SocialSignInContainer = ({
  uniqueIdentifierText,
  dimensionalIdentifierText,
  itemIdentifierText,
  facebookPosition,
  facebookMarginLeft,
  facebookTop,
  facebookLeft,
}) => {
  const goodleFbSignInStyle = useMemo(() => {
    return {
      ...getStyleValue("position", facebookPosition),
      ...getStyleValue("marginLeft", facebookMarginLeft),
      ...getStyleValue("top", facebookTop),
      ...getStyleValue("left", facebookLeft),
    };
  }, [facebookPosition, facebookMarginLeft, facebookTop, facebookLeft]);

  return (
    <View style={[styles.goodleFbSignIn, goodleFbSignInStyle]}>
      <Text style={styles.orContinueWith}>- OR Continue with -</Text>
      <View style={styles.buttons}>
        <View style={styles.googleBorder}>
          <Image
            style={styles.googleChild}
            contentFit="cover"
            source={uniqueIdentifierText}
          />
        </View>
        <View style={[styles.facebook, styles.googleBorder]}>
          <Image
            style={styles.apple1Icon}
            contentFit="cover"
            source={dimensionalIdentifierText}
          />
        </View>
        <View style={[styles.facebook, styles.googleBorder]}>
          <Image
            style={styles.facebookAppSymbol1Icon}
            contentFit="cover"
            source={itemIdentifierText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  googleBorder: {
    padding: Padding.p_mini,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.primary,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    overflow: "hidden",
    alignItems: "center",
  },
  orContinueWith: {
    fontSize: FontSize.bodySmallBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.foundationGreyGrey500,
    textAlign: "center",
  },
  googleChild: {
    width: 24,
    height: 24,
  },
  apple1Icon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  facebook: {
    backgroundColor: Color.colorWhite,
    marginLeft: 10,
  },
  facebookAppSymbol1Icon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
  },
  goodleFbSignIn: {
    alignItems: "center",
  },
});

export default SocialSignInContainer;
