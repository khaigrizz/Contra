import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SearchTags = () => {
  return (
    <View style={styles.searchTags}>
      <View style={[styles.property1default, styles.artisansWrapperFlexBox]}>
        <View style={styles.artisansWrapperFlexBox}>
          <Text style={styles.artisans}>Artisans</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artisansWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  artisans: {
    fontSize: FontSize.size_smi_1,
    letterSpacing: 0,
    fontFamily: FontFamily.jostRegular,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
  },
  property1default: {
    position: "absolute",
    top: 20,
    left: 20,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_900,
    width: 69,
    padding: Padding.p_3xs,
  },
  searchTags: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 103,
    height: 70,
    overflow: "hidden",
  },
});

export default SearchTags;
