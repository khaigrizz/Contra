import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Property1Default from "../screens/Property1Default";
import Property1Variant from "../screens/Property1Variant";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Property1Default
        group1={require("../assets/group-1.png")}
        group11={require("../assets/group-11.png")}
        group12={require("../assets/group-12.png")}
        group13={require("../assets/group-13.png")}
        showMenuItems
        menuItemsVisible
        menuItemsVisible1
        menuItemsVisible2
      />
      <View
        style={[styles.property1variant2, styles.property1variantSpaceBlock]}
      >
        <View style={[styles.menuItems, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-18.png")}
            />
          </View>
        </View>
        <View style={[styles.menuItems1, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-110.png")}
            />
          </View>
          <Text style={[styles.browse, styles.homeSpaceBlock]}>Browse</Text>
        </View>
        <View style={[styles.menuItems2, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-12.png")}
            />
          </View>
        </View>
        <View style={[styles.menuItems3, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-13.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[styles.property1variant4, styles.property1variantSpaceBlock]}
      >
        <View style={[styles.menuItems, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-18.png")}
            />
          </View>
        </View>
        <View style={[styles.menuItems5, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-11.png")}
            />
          </View>
        </View>
        <View style={[styles.menuItems2, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-12.png")}
            />
          </View>
        </View>
        <View style={[styles.menuItems1, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-111.png")}
            />
          </View>
          <Text style={[styles.browse, styles.homeSpaceBlock]}>Profile</Text>
        </View>
      </View>
      <View
        style={[styles.property1variant5, styles.property1variantSpaceBlock]}
      >
        <View style={[styles.menuItems8, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-112.png")}
            />
          </View>
          <Text style={[styles.home, styles.homeSpaceBlock]}>Home</Text>
        </View>
        <View style={[styles.menuItems9, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-113.png")}
            />
          </View>
          <Text style={[styles.home, styles.homeSpaceBlock]}>Browse</Text>
        </View>
        <View style={[styles.menuItems10, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-114.png")}
            />
          </View>
          <Text style={[styles.home, styles.homeSpaceBlock]}>Messages</Text>
        </View>
        <View style={[styles.menuItems11, styles.menuSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.iconsChild}
              contentFit="cover"
              source={require("../assets/group-115.png")}
            />
          </View>
          <Text style={[styles.home, styles.homeSpaceBlock]}>Profile</Text>
        </View>
      </View>
      <Property1Variant
        group1={require("../assets/group-18.png")}
        group11={require("../assets/group-11.png")}
        group12={require("../assets/group-19.png")}
        group13={require("../assets/group-13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1variantSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_7xs,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    left: 20,
    position: "absolute",
  },
  menuSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_13xl,
    alignItems: "center",
    flexDirection: "row",
  },
  homeSpaceBlock: {
    marginLeft: 8,
    textAlign: "left",
  },
  iconsChild: {
    width: 34,
    height: 34,
  },
  icons: {
    width: 42,
    height: 41,
    justifyContent: "center",
    padding: Padding.p_lg,
    alignItems: "center",
    overflow: "hidden",
  },
  menuItems: {
    backgroundColor: Color.colorDarkviolet_100,
  },
  browse: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_1600,
  },
  menuItems1: {
    borderStyle: "solid",
    borderColor: Color.colorGray_1600,
    borderBottomWidth: 2,
    backgroundColor: Color.colorWhite,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_13xl,
  },
  menuItems2: {
    backgroundColor: Color.colorBlueviolet_300,
  },
  menuItems3: {
    backgroundColor: Color.colorBlue_100,
  },
  property1variant2: {
    top: 97,
    width: 360,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_7xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    left: 20,
    position: "absolute",
  },
  menuItems5: {
    backgroundColor: Color.colorBlueviolet_200,
  },
  property1variant4: {
    top: 251,
    width: 360,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_7xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    left: 20,
    position: "absolute",
  },
  home: {
    fontSize: FontSize.bodySmallBold_size,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.titelTextColor,
  },
  menuItems8: {
    backgroundColor: "#cf2ee5",
  },
  menuItems9: {
    backgroundColor: "#9921ed",
  },
  menuItems10: {
    backgroundColor: "#5c1ad7",
  },
  menuItems11: {
    backgroundColor: "#2309ed",
  },
  property1variant5: {
    top: 328,
    backgroundColor: Color.titelTextColor,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_7xs,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    left: 20,
    position: "absolute",
  },
  menu: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 501,
    height: 405,
    overflow: "hidden",
  },
});

export default Menu;
