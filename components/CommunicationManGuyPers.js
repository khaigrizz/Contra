import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const CommunicationManGuyPers = () => {
  return (
    <ImageBackground
      style={styles.communicationManGuyPers}
      resizeMode="cover"
      source={require("../assets/communicationmanguypersontablestoolchairlaptopcomputerconversationchat1.png")}
    />
  );
};

const styles = StyleSheet.create({
  communicationManGuyPers: {
    width: 167,
    height: 167,
    transform: [
      {
        rotate: "-30deg",
      },
    ],
  },
});

export default CommunicationManGuyPers;
