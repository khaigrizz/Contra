import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import ContraLogo from "../screens/ContraLogo";
import ContraComb from "../screens/ContraComb";
import ContraDesc1 from "../screens/ContraDesc1";
import ContraDesc from "../screens/ContraDesc";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <ContraLogo />
      <View style={[styles.contralogo3, styles.contralogoLayout]}>
        <Text style={[styles.contra, styles.contraFlexBox]}>Contra</Text>
      </View>
      <View style={[styles.contralogo2, styles.contralogoLayout]}>
        <Text style={[styles.contra1, styles.contraFlexBox]}>Contra</Text>
      </View>
      <ContraComb />
      <View style={styles.contracomb2}>
        <Text style={[styles.ct, styles.contraFlexBox]}>Ct</Text>
      </View>
      <ContraDesc1 />
      <ContraDesc connectAndThrive="Connect and thrive" />
    </View>
  );
};

const styles = StyleSheet.create({
  contralogoLayout: {
    height: 100,
    width: 250,
    borderStyle: "solid",
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_31xl,
    left: 178,
    position: "absolute",
    borderWidth: 1,
  },
  contraFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montaguSlab144ptRegular,
    lineHeight: 16,
    position: "absolute",
  },
  contra: {
    color: Color.galaxy,
    fontSize: FontSize.size_31xl,
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montaguSlab144ptRegular,
    lineHeight: 16,
  },
  contralogo3: {
    top: 1056,
    borderColor: Color.galaxy,
  },
  contra1: {
    color: Color.meteor,
    fontSize: FontSize.size_31xl,
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montaguSlab144ptRegular,
    lineHeight: 16,
  },
  contralogo2: {
    top: 899,
    borderColor: Color.meteor,
  },
  ct: {
    height: "111.85%",
    width: "20%",
    top: "-5.69%",
    left: "40%",
    fontSize: FontSize.size_81xl,
    color: Color.colorWhite,
  },
  contracomb2: {
    top: 240,
    left: 33,
    width: 525,
    height: 211,
    position: "absolute",
  },
  logo: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    width: 607,
    height: 1196,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Logo;
