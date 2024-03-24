import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ContainerPasarCorakHatiRaya = () => {
  return (
    <View style={styles.eventCardParent}>
      <View style={[styles.eventCard, styles.eventCardShadowBox]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <View style={[styles.eventCardChild, styles.childPosition]} />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon13.png")}
        />
        <View style={[styles.nameStar, styles.nameStarFlexBox]} />
        <Text style={[styles.pestaWownita, styles.minFlexBox]}>
          Pesta WoWnita
        </Text>
        <View style={[styles.antDesignstarFilledParent, styles.antFlexBox]}>
          <Image
            style={styles.antDesignstarFilledIcon}
            contentFit="cover"
            source={require("../assets/antdesignstarfilled14.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>4.9</Text>
        </View>
        <View style={styles.dateIconShadowBox}>
          <View style={[styles.dateIconCarouselChild, styles.childPosition]} />
          <Text style={[styles.armanRokni, styles.armanRokniClr]}>
            <Text style={styles.armanRokniTxtContainer}>
              <Text style={styles.text1}>{`8
`}</Text>
              <Text style={styles.mar}>Mar</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.minParent}>
          <Text style={[styles.min, styles.minFlexBox]}>
            Central Market, Kuala Lumpur
          </Text>
          <Image
            style={[styles.groupChild, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group-61.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group48.png")}
          />
          <Text style={[styles.kLiked, styles.likedTypo]}>+2k Liked</Text>
          <Text style={[styles.k, styles.kTypo]}>+10k</Text>
        </View>
        <Image
          style={[styles.component1Icon, styles.component1IconLayout]}
          contentFit="cover"
          source={require("../assets/component-12.png")}
        />
      </View>
      <View style={[styles.eventCard1, styles.eventCardShadowBox]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
        <View style={[styles.eventCardChild, styles.childPosition]} />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon14.png")}
        />
        <View style={[styles.antDesignstarFilledGroup, styles.antFlexBox]}>
          <Image
            style={styles.antDesignstarFilledIcon}
            contentFit="cover"
            source={require("../assets/antdesignstarfilled16.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>4.8</Text>
        </View>
        <View style={styles.dateIconShadowBox}>
          <View style={[styles.dateIconCarouselChild, styles.childPosition]} />
          <Text style={[styles.armanRokni, styles.armanRokniClr]}>
            <Text style={styles.armanRokniTxtContainer}>
              <Text style={styles.text1}>{`22
`}</Text>
              <Text style={styles.mar}>mar</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.minParent}>
          <Text style={[styles.min, styles.minFlexBox]}>
            Central Market, Kuala Lumpur
          </Text>
          <Image
            style={[styles.groupChild, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group-61.png")}
          />
        </View>
        <View style={[styles.groupGroup, styles.groupPosition]}>
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group48.png")}
          />
          <Text style={[styles.kLiked1, styles.likedTypo]}>+1k Liked</Text>
        </View>
        <Text style={[styles.pasarCorakHati, styles.minFlexBox]}>
          Pasar Corak Hati Raya
        </Text>
        <Text style={[styles.k1, styles.kTypo]}>+12k</Text>
        <Image
          style={[styles.component1Icon1, styles.component1IconLayout]}
          contentFit="cover"
          source={require("../assets/component-16.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCardShadowBox: {
    height: 192,
    width: 150,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorWhite,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  nameStarFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  minFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  antFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    bottom: "19.01%",
    top: "75.62%",
    width: "16.77%",
    height: "5.36%",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    marginLeft: 4.12,
    lineHeight: 9,
    fontSize: FontSize.size_6xs_2,
    textAlign: "left",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  armanRokniClr: {
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  groupIconPosition: {
    height: "100%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  groupPosition: {
    bottom: "5.62%",
    top: "87.92%",
    height: "6.46%",
    left: "6.52%",
    position: "absolute",
  },
  likedTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 10,
    top: "12.1%",
    fontSize: FontSize.size_6xs_2,
    textAlign: "left",
    position: "absolute",
  },
  kTypo: {
    color: Color.primary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 10,
    fontSize: FontSize.size_6xs_2,
    textAlign: "left",
    position: "absolute",
  },
  component1IconLayout: {
    right: "15.37%",
    width: "8.25%",
    height: "6.46%",
    left: "76.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  maskGroupIcon: {
    height: "78.28%",
    bottom: "21.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  eventCardChild: {
    height: "27.86%",
    top: "72.14%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    bottom: "0%",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "8.59%",
    width: "10.98%",
    right: "6.45%",
    bottom: "85.78%",
    left: "82.57%",
    borderRadius: 51,
    top: "5.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  nameStar: {
    height: "5.63%",
    width: "79.77%",
    right: "10.31%",
    bottom: "19.06%",
    left: "9.91%",
    top: "75.31%",
    alignItems: "center",
  },
  pestaWownita: {
    width: "39.72%",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    lineHeight: 11,
    fontSize: FontSize.size_5xs_2,
    textAlign: "left",
    left: "6.52%",
    top: "75.31%",
  },
  antDesignstarFilledIcon: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.bodyMediumBold,
  },
  antDesignstarFilledParent: {
    right: "6.85%",
    left: "76.38%",
    flexDirection: "row",
    bottom: "19.01%",
    top: "75.62%",
    width: "16.77%",
    height: "5.36%",
  },
  dateIconCarouselChild: {
    height: "96.67%",
    bottom: "3.33%",
    borderRadius: 5,
    top: "0%",
  },
  text1: {
    fontSize: FontSize.size_3xs_3,
    lineHeight: 3,
  },
  mar: {
    fontSize: FontSize.size_7xs_1,
    lineHeight: 7,
  },
  armanRokniTxtContainer: {
    width: "100%",
  },
  armanRokni: {
    height: "93.75%",
    width: "73.28%",
    top: "6.25%",
    left: "13.36%",
    textTransform: "uppercase",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  dateIconShadowBox: {
    elevation: 2.06,
    shadowRadius: 2.06,
    bottom: "81.87%",
    right: "78.04%",
    width: "15.44%",
    height: "12.5%",
    left: "6.52%",
    top: "5.63%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  min: {
    left: "10.93%",
    fontSize: FontSize.size_6xs_7,
    fontFamily: FontFamily.figtreeRegular,
    color: Color.colorGray_300,
    top: "0%",
  },
  groupChild: {
    width: "8.3%",
    right: "91.7%",
  },
  minParent: {
    height: "4.27%",
    width: "65.74%",
    top: "81.25%",
    right: "27.74%",
    bottom: "14.48%",
    opacity: 0.5,
    left: "6.52%",
    position: "absolute",
  },
  groupIcon: {
    width: "21.83%",
    right: "78.17%",
  },
  kLiked: {
    left: "25.78%",
    color: Color.universe,
  },
  k: {
    top: "16.94%",
    left: "89.39%",
  },
  groupParent: {
    width: "87.76%",
    right: "5.72%",
  },
  component1Icon: {
    top: "88.49%",
    bottom: "5.05%",
  },
  eventCard: {
    left: 0,
  },
  text2: {
    fontFamily: FontFamily.figtreeBold,
  },
  antDesignstarFilledGroup: {
    right: "6.52%",
    left: "76.71%",
    flexDirection: "row",
    bottom: "19.01%",
    top: "75.62%",
    width: "16.77%",
    height: "5.36%",
  },
  groupIcon1: {
    width: "45.71%",
    right: "54.29%",
  },
  kLiked1: {
    left: "53.97%",
    color: Color.colorDarkslateblue_100,
  },
  groupGroup: {
    width: "41.92%",
    right: "51.56%",
  },
  pasarCorakHati: {
    width: "54.82%",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    lineHeight: 11,
    fontSize: FontSize.size_5xs_2,
    textAlign: "left",
    left: "6.52%",
    top: "75.31%",
  },
  k1: {
    top: "89.79%",
    left: "84.96%",
  },
  component1Icon1: {
    top: "89.27%",
    bottom: "4.27%",
  },
  eventCard1: {
    left: 168,
  },
  eventCardParent: {
    top: 579,
    left: 29,
    width: 318,
    height: 288,
    overflow: "hidden",
    position: "absolute",
  },
});

export default ContainerPasarCorakHatiRaya;
