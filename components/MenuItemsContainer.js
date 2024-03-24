import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import Property1Home from "../screens/Property1Home";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const MenuItemsContainer = ({ dimensionsCode, iconLabel }) => {
  return (
    showMenuItems && (
      <View style={styles.menuItems}>
        <Property1Home
          group1={require("../assets/group-124.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
        <Text style={styles.home}>{iconLabel}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  home: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_1600,
    textAlign: "left",
    marginLeft: 8,
  },
  menuItems: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGray_1600,
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_4xs,
  },
});

export default MenuItemsContainer;
