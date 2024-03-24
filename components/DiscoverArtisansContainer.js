import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DiscoverArtisansContainer = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.headerSearchBar}
      onPress={() => navigation.navigate("IPhone13Mini1")}
    >
      <View style={styles.search}>
        <Text style={[styles.foodEventsNear, styles.filters1FlexBox]}>
          Food events near me...
        </Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon19.png")}
        />
        <Image
          style={styles.searchChild}
          contentFit="cover"
          source={require("../assets/line-13.png")}
        />
      </View>
      <View style={[styles.filters, styles.filtersLayout]}>
        <View style={[styles.filtersChild, styles.filtersChildPosition]} />
        <View style={[styles.filterCircleParent, styles.filterLayout]}>
          <Image
            style={[styles.filterCircleIcon, styles.filterLayout]}
            contentFit="cover"
            source={require("../assets/filtercircle.png")}
          />
          <Text style={[styles.filters1, styles.filters1FlexBox]}>Filters</Text>
        </View>
      </View>
      <Text style={[styles.discoverYourLocal, styles.filters1FlexBox]}>
        Discover your local artisans !
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filters1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  filtersLayout: {
    height: 20,
    width: 46,
    position: "absolute",
  },
  filtersChildPosition: {
    left: 0,
    top: 0,
  },
  filterLayout: {
    height: 14,
    position: "absolute",
  },
  foodEventsNear: {
    top: 6,
    fontSize: FontSize.size_smi_1,
    letterSpacing: 0,
    fontFamily: FontFamily.jostRegular,
    opacity: 0.65,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    left: 6,
  },
  icon: {
    top: 9,
    left: 208,
    width: 12,
    height: 12,
    position: "absolute",
  },
  searchChild: {
    top: 23,
    width: 213,
    height: 1,
    left: 6,
    position: "absolute",
  },
  search: {
    top: 34,
    left: 24,
    borderRadius: 46,
    width: 251,
    height: 24,
    position: "absolute",
  },
  filtersChild: {
    borderRadius: 30,
    backgroundColor: Color.colorMidnightblue_100,
    height: 20,
    width: 46,
    position: "absolute",
  },
  filterCircleIcon: {
    width: 14,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  filters1: {
    left: 17,
    fontSize: FontSize.size_5xs_3,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    width: 22,
    height: 10,
    top: 3,
  },
  filterCircleParent: {
    left: 3,
    width: 38,
    top: 3,
  },
  filters: {
    top: 38,
    left: 256,
  },
  discoverYourLocal: {
    marginTop: -29.15,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: FontSize.size_xl_6,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    height: 25,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
  },
  headerSearchBar: {
    top: 101,
    left: 33,
    width: 326,
    height: 58,
    overflow: "hidden",
    position: "absolute",
  },
});

export default DiscoverArtisansContainer;
