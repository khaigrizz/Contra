import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const SplashScreenImage = () => {
  return (
    <Image
      style={styles.splashScreenIcon}
      contentFit="cover"
      source={require("../assets/splash-screen.png")}
    />
  );
};

const styles = StyleSheet.create({
  splashScreenIcon: {
    width: 375,
    height: 812,
    overflow: "hidden",
  },
});

export default SplashScreenImage;
