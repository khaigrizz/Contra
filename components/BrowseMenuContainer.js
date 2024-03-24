import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../screens/Property1Home";
import MenuItemsContainer from "./MenuItemsContainer";
import { Padding, Border, Color } from "../GlobalStyles";

const BrowseMenuContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <Pressable
        style={[styles.menuItems, styles.menuSpaceBlock]}
        onPress={() => navigation.navigate("Homepage1")}
      >
        <Property1Home
          group1={require("../assets/group-120.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
      </Pressable>
      <MenuItemsContainer
        dimensionsCode={require("../assets/group-129.png")}
        iconLabel="Browse"
      />
      <Pressable
        style={[styles.menuItems1, styles.menuSpaceBlock]}
        onPress={() => navigation.navigate("NotificationPageInbox")}
      >
        <Property1Home
          group1={require("../assets/group-130.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
      </Pressable>
      <Pressable
        style={[styles.menuItems2, styles.menuSpaceBlock]}
        onPress={() => navigation.navigate("Frame2")}
      >
        <Property1Home
          group1={require("../assets/group-123.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
      </Pressable>
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
    backgroundColor: Color.colorDarkviolet_100,
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
    left: 6,
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
    overflow: "hidden",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
  },
});

export default BrowseMenuContainer;
