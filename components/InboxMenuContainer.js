import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Property1Home from "../screens/Property1Home";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const InboxMenuContainer = ({
  onMenuItemsPress,
  onMenuItemsPress1,
  onMenuItemsPress2,
  onMenuItemsPress3,
}) => {
  return (
    <View style={styles.menu}>
      <Pressable
        style={[styles.menuItems, styles.menuSpaceBlock]}
        onPress={onMenuItemsPress}
      >
        <Property1Home
          group1={require("../assets/group-120.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
      </Pressable>
      <Pressable
        style={[styles.menuItems1, styles.menuSpaceBlock]}
        onPress={onMenuItemsPress1}
      >
        <Property1Home
          group1={require("../assets/group-121.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
      </Pressable>
      <Pressable
        style={[styles.menuItems2, styles.menuSpaceBlock]}
        onPress={onMenuItemsPress2}
      >
        <Property1Home
          group1={require("../assets/group-122.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
        <Text style={styles.inbox}>Inbox</Text>
      </Pressable>
      <Pressable
        style={[styles.menuItems3, styles.menuSpaceBlock]}
        onPress={onMenuItemsPress3}
      >
        <Property1Home
          group1={require("../assets/group-132.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="unset"
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
    backgroundColor: Color.colorBlueviolet_200,
  },
  inbox: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_1600,
    textAlign: "left",
    marginLeft: 8,
  },
  menuItems2: {
    borderStyle: "solid",
    borderColor: Color.colorGray_1600,
    borderBottomWidth: 2,
    backgroundColor: Color.colorWhite,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    borderRadius: Border.br_13xl,
  },
  menuItems3: {
    backgroundColor: Color.colorBlue_100,
  },
  menu: {
    position: "absolute",
    top: 728,
    left: 8,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    overflow: "hidden",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
});

export default InboxMenuContainer;
