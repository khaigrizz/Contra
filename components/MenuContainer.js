import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import MenuItemsContainer from "./MenuItemsContainer";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../screens/Property1Home";
import { Padding, Border, Color } from "../GlobalStyles";

const MenuContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <MenuItemsContainer
        dimensionsCode={require("../assets/group-124.png")}
        iconLabel="Home"
      />
      {menuItemsVisible && (
        <Pressable
          style={[styles.menuItems, styles.menuSpaceBlock]}
          onPress={() => navigation.navigate("SearchPage1")}
        >
          <Property1Home
            group1={require("../assets/group-121.png")}
            property1HomePosition="unset"
            property1HomePadding={18}
            property1HomeOverflow="hidden"
          />
        </Pressable>
      )}
      {menuItemsVisible1 && (
        <Pressable
          style={[styles.menuItems1, styles.menuSpaceBlock]}
          onPress={() => navigation.navigate("NotificationPageInbox")}
        >
          <Property1Home
            group1={require("../assets/group-118.png")}
            property1HomePosition="unset"
            property1HomePadding={18}
            property1HomeOverflow="hidden"
          />
        </Pressable>
      )}
      {menuItemsVisible2 && (
        <Pressable
          style={[styles.menuItems2, styles.menuSpaceBlock]}
          onPress={() => navigation.navigate("Frame2")}
        >
          <Property1Home
            group1={require("../assets/group-128.png")}
            property1HomePosition="unset"
            property1HomePadding={18}
            property1HomeOverflow="hidden"
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    borderRadius: Border.br_13xl,
    flexDirection: "row",
  },
  menuItems: {
    backgroundColor: Color.colorPlum,
  },
  menuItems1: {
    backgroundColor: Color.colorBlueviolet_300,
  },
  menuItems2: {
    backgroundColor: Color.colorBlue_100,
  },
  menu: {
    position: "absolute",
    top: 734,
    left: 9,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 360,
    height: 68,
    overflow: "hidden",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
  },
});

export default MenuContainer;
