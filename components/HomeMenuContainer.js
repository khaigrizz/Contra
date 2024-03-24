import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import Property1Home from "../screens/Property1Home";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeMenuContainer = ({
  dimensionsCode,
  dimensionsCodeText,
  propTop,
  propRight,
}) => {
  const menuStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("right", propRight),
    };
  }, [propTop, propRight]);

  return (
    <View style={[styles.menu, menuStyle]}>
      {showMenuItems && (
        <View style={[styles.menuItems, styles.menuSpaceBlock]}>
          <Property1Home
            group1={require("../assets/group-124.png")}
            property1HomePosition="unset"
            property1HomePadding={18}
            property1HomeOverflow="hidden"
          />
          <Text style={styles.home}>Home</Text>
        </View>
      )}
      {menuItemsVisible && (
        <View style={[styles.menuItems1, styles.menuSpaceBlock]}>
          <Property1Home
            group1={require("../assets/group-125.png")}
            property1HomePosition="unset"
            property1HomePadding={18}
            property1HomeOverflow="hidden"
          />
        </View>
      )}
      {menuItemsVisible1 && (
        <View style={[styles.menuItems2, styles.menuSpaceBlock]}>
          <Property1Home
            group1={require("../assets/group-126.png")}
            property1HomePosition="unset"
            property1HomePadding={18}
            property1HomeOverflow="hidden"
          />
        </View>
      )}
      {menuItemsVisible2 && (
        <View style={[styles.menuItems3, styles.menuSpaceBlock]}>
          <Property1Home
            group1={require("../assets/group-127.png")}
            property1HomePosition="unset"
            property1HomePadding={18}
            property1HomeOverflow="hidden"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuSpaceBlock: {
    display: "none",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    borderRadius: Border.br_13xl,
    flexDirection: "row",
  },
  home: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_1600,
    textAlign: "left",
    marginLeft: 8,
  },
  menuItems: {
    borderStyle: "solid",
    borderColor: Color.colorGray_1600,
    borderBottomWidth: 2,
    backgroundColor: Color.colorWhite,
    display: "none",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    borderRadius: Border.br_13xl,
  },
  menuItems1: {
    backgroundColor: Color.colorPlum,
  },
  menuItems2: {
    backgroundColor: Color.colorBlueviolet_300,
  },
  menuItems3: {
    backgroundColor: Color.colorBlue_100,
  },
  menu: {
    position: "absolute",
    top: 988,
    right: 0,
    borderRadius: Border.br_11xl,
    width: 360,
    height: 68,
    overflow: "hidden",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeMenuContainer;
