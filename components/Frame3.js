import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame3 = ({ onClose }) => {
  return (
    <View style={styles.accountCardLinkCopiedToClParent}>
      <Text style={styles.accountCardLink}>
        Account card link copied to clipboard
      </Text>
      <Image
        style={styles.fileAndFolderClipboard}
        contentFit="cover"
        source={require("../assets/file-and-folder--clipboard.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accountCardLink: {
    fontSize: FontSize.size_mini_1,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  fileAndFolderClipboard: {
    width: 24,
    height: 24,
    overflow: "hidden",
    opacity: 0.8,
    marginLeft: 11.58,
  },
  accountCardLinkCopiedToClParent: {
    borderRadius: 35,
    backgroundColor: Color.colorGray_1300,
    width: 347,
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame3;
