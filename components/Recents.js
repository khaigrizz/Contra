import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Recents = () => {
  return (
    <View style={styles.recents}>
      <Image
        style={styles.timeClock}
        contentFit="cover"
        source={require("../assets/time--clock.png")}
      />
      <Text style={styles.centralMarket}>{`Central Market `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeClock: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  centralMarket: {
    fontSize: FontSize.size_xs_9,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.jostMedium,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    marginLeft: 5,
  },
  recents: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_900,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
});

export default Recents;
