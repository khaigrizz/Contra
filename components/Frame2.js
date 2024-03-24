import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame2 = ({ onClose }) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <Text style={styles.reminderHasBeen}>Reminder has been set!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    top: 0,
    left: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGray_1600,
    borderWidth: 1,
    width: 373,
    height: 120,
    position: "absolute",
  },
  reminderHasBeen: {
    height: "14.88%",
    width: "47.81%",
    top: "42.31%",
    left: "25.83%",
    fontSize: FontSize.size_mini_9,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.titelTextColor,
    textAlign: "left",
    opacity: 0.7,
    position: "absolute",
  },
  rectangleParent: {
    width: 374,
    height: 121,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame2;
