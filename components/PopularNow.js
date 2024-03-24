import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PopularNow = () => {
  return (
    <View style={styles.popularNow}>
      <Image
        style={styles.arrowsGrowth}
        contentFit="cover"
        source={require("../assets/arrows--growth.png")}
      />
      <Text style={styles.foodFestival}>Food Festival</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowsGrowth: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  foodFestival: {
    fontSize: FontSize.size_xs_9,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.jostMedium,
    color: Color.colorDarkorange_100,
    textAlign: "left",
    marginLeft: 5,
  },
  popularNow: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGoldenrod_200,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
});

export default PopularNow;
