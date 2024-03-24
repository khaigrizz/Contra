import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EventContainer3 = ({ propTop }) => {
  const happeningLikeStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.happeningLike, happeningLikeStyle]}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon24.png")}
      />
      <View style={[styles.armanRokniWrapper, styles.armanFlexBox]}>
        <Text style={[styles.armanRokni, styles.armanFlexBox]}>
          Happening now
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  armanFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "14.04%",
    width: "10.85%",
    top: "85.96%",
    right: "0%",
    bottom: "0%",
    left: "89.15%",
    borderRadius: Border.br_81xl,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  armanRokni: {
    fontSize: FontSize.size_3xs,
    lineHeight: 9,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMidnightblue_100,
    textAlign: "center",
    display: "flex",
    width: 98,
  },
  armanRokniWrapper: {
    top: 0,
    left: 0,
    borderRadius: 9,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3.4285717010498047,
    },
    shadowRadius: 3.43,
    elevation: 3.43,
    shadowOpacity: 1,
    width: 105,
    height: 30,
    flexDirection: "row",
    padding: 9,
    position: "absolute",
  },
  happeningLike: {
    top: 93,
    left: 37,
    width: 295,
    height: 228,
    position: "absolute",
  },
});

export default EventContainer3;
