import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EventCardContainer = ({
  dimensionsText,
  specificDimensionsText,
  productDimensionsText,
  propTop,
}) => {
  const eventCardStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.eventCard, styles.eventCardShadowBox, eventCardStyle]}>
      <Image
        style={[styles.maskGroupIcon, styles.iconLayout]}
        contentFit="cover"
        source={dimensionsText}
      />
      <View style={[styles.eventCardChild, styles.childPosition]} />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={specificDimensionsText}
      />
      <View
        style={[styles.antDesignstarFilledParent, styles.armanRokniFlexBox]}
      >
        <Image
          style={styles.antDesignstarFilledIcon}
          contentFit="cover"
          source={require("../assets/antdesignstarfilled2.png")}
        />
        <Text style={[styles.text, styles.textClr]}>4.8</Text>
      </View>
      <View style={[styles.dateIconCarousel, styles.iconPosition]}>
        <View style={[styles.dateIconCarouselChild, styles.childPosition]} />
        <Text style={[styles.armanRokni, styles.textClr]}>
          <Text style={styles.armanRokniTxtContainer}>
            <Text style={styles.text1}>{`22
`}</Text>
            <Text style={styles.mar}>mar</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.minParent}>
        <Text style={styles.min}>Central Market, Kuala Lumpur</Text>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-61.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Image
          style={[styles.groupIcon, styles.groupPosition]}
          contentFit="cover"
          source={productDimensionsText}
        />
        <Text style={[styles.kLiked, styles.kTypo]}>+1k Liked</Text>
      </View>
      <Text style={[styles.pasarCorakHati, styles.textClr]}>
        Pasar Corak Hati Raya
      </Text>
      <Text style={[styles.k, styles.kTypo]}>+12k</Text>
      <Image
        style={[styles.component1Icon, styles.groupParentLayout]}
        contentFit="cover"
        source={require("../assets/component-16.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventCardShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childPosition: {
    backgroundColor: Color.colorWhite,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  iconPosition: {
    top: "5.63%",
    position: "absolute",
  },
  armanRokniFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textClr: {
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  groupPosition: {
    height: "100%",
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupParentLayout: {
    height: "6.46%",
    position: "absolute",
  },
  kTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 10,
    textAlign: "left",
    fontSize: FontSize.size_6xs_2,
    position: "absolute",
  },
  maskGroupIcon: {
    height: "78.28%",
    bottom: "21.72%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  antDesignstarFilledIcon: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  text: {
    lineHeight: 9,
    fontFamily: FontFamily.figtreeBold,
    marginLeft: 4.12,
    textAlign: "left",
    fontSize: FontSize.size_6xs_2,
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  antDesignstarFilledParent: {
    height: "5.36%",
    width: "16.77%",
    top: "75.62%",
    right: "6.52%",
    bottom: "19.01%",
    left: "76.71%",
    flexDirection: "row",
    justifyContent: "flex-end",
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
  dateIconCarousel: {
    height: "12.5%",
    width: "15.44%",
    right: "78.04%",
    bottom: "81.87%",
    shadowRadius: 2.06,
    elevation: 2.06,
    left: "6.52%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  min: {
    left: "10.93%",
    fontSize: FontSize.size_6xs_7,
    fontFamily: FontFamily.figtreeRegular,
    color: Color.colorGray_300,
    textAlign: "left",
    top: "0%",
    position: "absolute",
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
    width: "45.71%",
    right: "54.29%",
  },
  kLiked: {
    top: "12.1%",
    left: "53.97%",
    color: Color.colorDarkslateblue_100,
  },
  groupParent: {
    width: "41.92%",
    top: "87.92%",
    right: "51.56%",
    bottom: "5.62%",
    left: "6.52%",
  },
  pasarCorakHati: {
    width: "54.82%",
    top: "75.31%",
    fontSize: FontSize.size_5xs_2,
    lineHeight: 11,
    fontFamily: FontFamily.bodyMediumBold,
    left: "6.52%",
    textAlign: "left",
    position: "absolute",
  },
  k: {
    top: "89.79%",
    left: "84.96%",
    color: Color.primary,
  },
  component1Icon: {
    width: "8.25%",
    top: "89.27%",
    right: "15.37%",
    bottom: "4.27%",
    left: "76.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  eventCard: {
    top: 546,
    left: 197,
    shadowRadius: 4,
    elevation: 4,
    width: 150,
    height: 192,
    position: "absolute",
  },
});

export default EventCardContainer;
