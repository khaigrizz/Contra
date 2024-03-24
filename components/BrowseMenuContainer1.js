import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../screens/Property1Home";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const BrowseMenuContainer1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.menu}
      onPress={() => navigation.navigate("Frame2")}
    >
      <Pressable
        style={[styles.menuItems, styles.menuSpaceBlock]}
        onPress={() => navigation.navigate("Homepage1")}
      >
        <Property1Home
          group1={require("../assets/group-116.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
      </Pressable>
      <Pressable
        style={[styles.menuItems1, styles.menuSpaceBlock]}
        onPress={() => navigation.navigate("SearchPage1")}
      >
        <Property1Home
          group1={require("../assets/group-129.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
        <Text style={styles.browse}>Browse</Text>
      </Pressable>
      <Pressable
        style={[styles.menuItems2, styles.menuSpaceBlock]}
        onPress={() => navigation.navigate("NotificationPageInbox")}
      >
        <Property1Home
          group1={require("../assets/group-130.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
      </Pressable>
      <View style={[styles.menuItems3, styles.menuSpaceBlock]}>
        <Property1Home
          group1={require("../assets/group-123.png")}
          property1HomePosition="unset"
          property1HomePadding={18}
          property1HomeOverflow="hidden"
        />
      </View>
    </Pressable>
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
  browse: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_1600,
    textAlign: "left",
    marginLeft: 8,
  },
  menuItems1: {
    borderStyle: "solid",
    borderColor: Color.colorGray_1600,
    borderBottomWidth: 2,
    backgroundColor: Color.colorWhite,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    borderRadius: Border.br_13xl,
  },
  menuItems2: {
    backgroundColor: Color.colorBlueviolet_300,
  },
  menuItems3: {
    backgroundColor: Color.colorBlue_100,
  },
  menu: {
    position: "absolute",
    top: 734,
    left: 9,
    borderRadius: Border.br_11xl,
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
    backgroundColor: Color.colorWhite,
  },
});

export default BrowseMenuContainer1;
