import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ProgressBar1 from "../screens/ProgressBar1";
import ProgressBar2 from "../screens/ProgressBar2";
import { Border, Color } from "../GlobalStyles";

const ProgressBar2 = () => {
  return (
    <View style={styles.progressBar}>
      <ProgressBar1
        ellipse77={require("../assets/ellipse-78.png")}
        ellipse78={require("../assets/ellipse-77.png")}
        ellipse79={require("../assets/ellipse-77.png")}
        ellipse80={require("../assets/ellipse-77.png")}
      />
      <ProgressBar2 />
      <ProgressBar2 />
      <ProgressBar2 />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 241,
    height: 220,
    overflow: "hidden",
  },
});

export default ProgressBar2;
