import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Property1Home from "../screens/Property1Home";
import Property1Browse from "../screens/Property1Browse";
import Property1Messages from "../screens/Property1Messages";
import Property1Profile from "../screens/Property1Profile";
import { Border } from "../GlobalStyles";

const Icons = () => {
  return (
    <View style={styles.icons}>
      <Property1Home group1={require("../assets/group-14.png")} />
      <Property1Browse />
      <Property1Messages />
      <Property1Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    borderRadius: Border.br_8xs,
    width: 72,
    height: 240,
    overflow: "hidden",
  },
});

export default Icons;
