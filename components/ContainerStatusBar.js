import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ContainerStatusBar = () => {
  return (
    <View style={styles.barsStatusBarIphoneL}>
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={styles.timeStyle}>
        <Text style={styles.time}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.titelTextColor,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.titelTextColor,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.titelTextColor,
    textAlign: "center",
    width: 54,
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    alignItems: "center",
    justifyContent: "flex-end",
    width: 54,
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "5.42%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
    position: "absolute",
  },
});

export default ContainerStatusBar;
