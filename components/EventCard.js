import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const EventCard = () => {
  return (
    <View style={styles.eventCard}>
      <View style={[styles.carddefault, styles.carddefaultLayout]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <View style={[styles.carddefaultChild, styles.childPosition]} />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <View style={[styles.nameStar, styles.nameStarFlexBox]} />
        <Text style={[styles.pestaWownita, styles.minFlexBox]}>
          Pesta WoWnita
        </Text>
        <View style={[styles.antDesignstarFilledParent, styles.antFlexBox]}>
          <Image
            style={styles.antDesignstarFilledIcon}
            contentFit="cover"
            source={require("../assets/antdesignstarfilled.png")}
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
            source={require("../assets/group-6.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Text style={[styles.kLiked, styles.likedTypo]}>+2k Liked</Text>
          <Text style={[styles.k, styles.kTypo]}>+10k</Text>
        </View>
        <Image
          style={[styles.component1Icon, styles.component1IconLayout]}
          contentFit="cover"
          source={require("../assets/component-1.png")}
        />
      </View>
      <View style={[styles.cardvariant2, styles.carddefaultLayout]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <View style={[styles.carddefaultChild, styles.childPosition]} />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
        <View style={[styles.antDesignstarFilledGroup, styles.antFlexBox]}>
          <Image
            style={styles.antDesignstarFilledIcon}
            contentFit="cover"
            source={require("../assets/antdesignstarfilled.png")}
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
            source={require("../assets/group-6.png")}
          />
        </View>
        <View style={[styles.groupGroup, styles.groupPosition]}>
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group.png")}
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
          source={require("../assets/component-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carddefaultLayout: {
    height: 373,
    width: 292,
    left: 20,
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
    top: "75.6%",
    width: "16.78%",
    height: "5.36%",
    alignItems: "center",
    bottom: "19.03%",
    position: "absolute",
  },
  textTypo: {
    marginLeft: 8,
    lineHeight: 18,
    fontSize: FontSize.bodySmallBold_size,
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
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "5.63%",
    top: "87.94%",
    height: "6.43%",
    left: "6.51%",
    position: "absolute",
  },
  likedTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 19,
    top: "12.5%",
    fontSize: FontSize.bodySmallBold_size,
    textAlign: "left",
    position: "absolute",
  },
  kTypo: {
    color: Color.primary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 19,
    fontSize: FontSize.bodySmallBold_size,
    textAlign: "left",
    position: "absolute",
  },
  component1IconLayout: {
    right: "15.41%",
    width: "8.22%",
    height: "6.43%",
    left: "76.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
    overflow: "hidden",
  },
  carddefaultChild: {
    height: "27.88%",
    top: "72.12%",
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    bottom: "0%",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "8.58%",
    width: "10.96%",
    bottom: "85.79%",
    left: "82.53%",
    borderRadius: Border.br_81xl,
    right: "6.51%",
    top: "5.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameStar: {
    height: "5.63%",
    width: "79.79%",
    right: "10.27%",
    left: "9.93%",
    bottom: "19.03%",
    top: "75.34%",
    alignItems: "center",
  },
  pestaWownita: {
    width: "39.73%",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
    textAlign: "left",
    left: "6.51%",
    top: "75.34%",
  },
  antDesignstarFilledIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.bodyMediumBold,
  },
  antDesignstarFilledParent: {
    right: "6.85%",
    left: "76.37%",
    flexDirection: "row",
    top: "75.6%",
    width: "16.78%",
    height: "5.36%",
  },
  dateIconCarouselChild: {
    height: "96.36%",
    bottom: "3.64%",
    borderRadius: Border.br_3xs,
    top: "0%",
  },
  text1: {
    fontSize: FontSize.size_lg,
    lineHeight: 6,
  },
  mar: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
  },
  armanRokniTxtContainer: {
    width: "100%",
  },
  armanRokni: {
    height: "93.58%",
    width: "73.33%",
    top: "6.42%",
    left: "13.33%",
    textTransform: "uppercase",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  dateIconShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "81.85%",
    right: "78.08%",
    width: "15.41%",
    height: "12.52%",
    left: "6.51%",
    top: "5.63%",
    position: "absolute",
  },
  min: {
    left: "10.94%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.figtreeRegular,
    color: Color.colorGray_300,
    top: "0%",
  },
  groupChild: {
    width: "8.33%",
    right: "91.67%",
  },
  minParent: {
    height: "4.29%",
    width: "65.75%",
    top: "81.23%",
    right: "27.74%",
    bottom: "14.48%",
    opacity: 0.5,
    left: "6.51%",
    position: "absolute",
  },
  groupIcon: {
    width: "21.79%",
    right: "78.21%",
  },
  kLiked: {
    left: "25.68%",
    color: Color.universe,
  },
  k: {
    top: "16.67%",
    left: "89.11%",
  },
  groupParent: {
    width: "88.01%",
    right: "5.48%",
  },
  component1Icon: {
    top: "88.47%",
    bottom: "5.09%",
  },
  carddefault: {
    top: 20,
  },
  text2: {
    fontFamily: FontFamily.figtreeBold,
  },
  antDesignstarFilledGroup: {
    left: "76.71%",
    flexDirection: "row",
    top: "75.6%",
    width: "16.78%",
    height: "5.36%",
    right: "6.51%",
  },
  groupIcon1: {
    width: "45.53%",
    right: "54.47%",
  },
  kLiked1: {
    left: "53.66%",
    color: Color.colorDarkslateblue_100,
  },
  groupGroup: {
    width: "42.12%",
    right: "51.37%",
  },
  pasarCorakHati: {
    width: "54.79%",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    fontFamily: FontFamily.bodyMediumBold,
    lineHeight: 21,
    fontSize: FontSize.bodyMediumBold_size,
    textAlign: "left",
    left: "6.51%",
    top: "75.34%",
  },
  k1: {
    top: "89.81%",
    left: "84.93%",
  },
  component1Icon1: {
    top: "89.28%",
    bottom: "4.29%",
  },
  cardvariant2: {
    top: 413,
    opacity: 0.7,
  },
  eventCard: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 332,
    height: 806,
    overflow: "hidden",
  },
});

export default EventCard;
