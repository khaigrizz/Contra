import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Frame1 = () => {
  return (
    <View style={styles.homepageParent}>
      <Image
        style={[styles.homepageIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/1--homepage.png")}
      />
      <Image
        style={[styles.searchPageIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/2--search-page.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 265,
    width: 459,
    borderRadius: 25,
    position: "absolute",
  },
  homepageIcon: {
    top: 132,
    left: 0,
  },
  searchPageIcon: {
    top: 0,
    left: 115,
  },
  homepageParent: {
    width: 574,
    height: 397,
  },
});

export default Frame1;
