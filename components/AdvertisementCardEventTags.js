import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AdvertisementCardEventTags = () => {
  return (
    <View style={styles.advertisementCardeventTags}>
      <Image
        style={styles.businessPuzzle}
        contentFit="cover"
        source={require("../assets/business--puzzle.png")}
      />
      <Text style={styles.foodFestival}>Vendors</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  businessPuzzle: {
    width: 11,
    height: 11,
    overflow: "hidden",
  },
  foodFestival: {
    fontSize: FontSize.size_4xs,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.jostMedium,
    color: Color.primary,
    textAlign: "left",
    marginLeft: 3.77,
  },
  advertisementCardeventTags: {
    borderRadius: 23,
    backgroundColor: "rgba(51, 78, 172, 0.2)",
    height: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});

export default AdvertisementCardEventTags;
