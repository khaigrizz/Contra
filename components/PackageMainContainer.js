import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PackageMainContainer = ({ dimensionsCode }) => {
  return (
    <View style={[styles.levelComment, styles.repllyFlexBox]}>
      <View style={styles.indicator} />
      <View style={styles.content}>
        <View style={styles.head}>
          <Image
            style={[styles.avaIcon, styles.iconPosition]}
            contentFit="cover"
            source={dimensionsCode}
          />
          <View style={[styles.nameTime, styles.iconPosition]}>
            <Text style={[styles.nikcname, styles.nikcnameClr]}>@kizaru</Text>
            <Text style={styles.time}>12 November 2020 19:35</Text>
          </View>
          <Image
            style={[
              styles.feathermoreVerticalIcon,
              styles.levelCommentPosition,
            ]}
            contentFit="cover"
            source={require("../assets/feathermorevertical.png")}
          />
        </View>
        <Text style={[styles.text, styles.textSpaceBlock]}>
          Mi ac id faucibus laoreet. Nulla quis in interdum imperdiet. Lacus
          mollis massa netus.
        </Text>
        <View style={[styles.code, styles.codeSpaceBlock]}>
          <View style={styles.parent}>
            <Text style={[styles.text1, styles.text1Typo]}>1</Text>
            <Text style={[styles.packageMain, styles.text1Typo]}>
              package main
            </Text>
          </View>
        </View>
        <Text
          style={[styles.text2, styles.textSpaceBlock]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</Text>
        <View style={styles.textSpaceBlock}>
          <View style={styles.bottomChild} />
          <View style={styles.dlr}>
            <View style={[styles.likesDislikes, styles.codeSpaceBlock]}>
              <View style={styles.likesLayout}>
                <Image
                  style={[styles.thumbsUpIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/thumbsup1.png")}
                />
                <Text style={[styles.text3, styles.text3Typo]}>1</Text>
              </View>
              <View style={[styles.likes, styles.likesLayout]}>
                <Image
                  style={[styles.thumbsUpIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/thumbsdown1.png")}
                />
                <Text style={[styles.text3, styles.text3Typo]}>0</Text>
              </View>
            </View>
            <View style={[styles.seeRepliesParent, styles.iconPosition]}>
              <View style={[styles.seeReplies, styles.codeSpaceBlock]}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/chevronsdown.png")}
                />
                <Text style={[styles.showAllReplies, styles.text3Typo]}>
                  Show All Replies (19)
                </Text>
              </View>
              <View style={[styles.replly, styles.codeSpaceBlock]}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/cornerdownright.png")}
                />
                <Text style={[styles.showAllReplies, styles.text3Typo]}>
                  Reply
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  repllyFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  nikcnameClr: {
    color: Color.titelTextColor,
    textAlign: "left",
  },
  levelCommentPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  textSpaceBlock: {
    marginTop: 4.41,
    alignSelf: "stretch",
  },
  codeSpaceBlock: {
    paddingVertical: 4,
    paddingHorizontal: 0,
  },
  text1Typo: {
    fontFamily: FontFamily.droidSans,
    lineHeight: 8,
    letterSpacing: 0.1,
    fontSize: FontSize.size_6xs_2,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 6,
    height: 6,
    overflow: "hidden",
  },
  text3Typo: {
    fontSize: FontSize.size_7xs_3,
    letterSpacing: 0.1,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "left",
  },
  likesLayout: {
    height: 6,
    width: 11,
  },
  indicator: {
    backgroundColor: Color.primary2,
    width: 2,
    opacity: 0.5,
    alignSelf: "stretch",
  },
  avaIcon: {
    width: 13,
    height: 13,
    left: 0,
  },
  nikcname: {
    fontSize: FontSize.size_7xs_7,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0.3,
    color: Color.titelTextColor,
  },
  time: {
    fontSize: FontSize.size_8xs_4,
    letterSpacing: 0.2,
    marginTop: 2.2,
    color: Color.subtitleTextColor,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  nameTime: {
    left: 18,
    overflow: "hidden",
  },
  feathermoreVerticalIcon: {
    top: 3,
    left: 274,
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  head: {
    height: 14,
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 11,
    fontSize: FontSize.size_6xs_2,
    marginTop: 4.41,
    textAlign: "left",
    color: Color.titelTextColor,
    letterSpacing: 0.3,
  },
  text1: {
    color: Color.colorGray_200,
    textAlign: "center",
    width: 18,
    left: 0,
  },
  packageMain: {
    width: 265,
    textAlign: "left",
    color: Color.titelTextColor,
    left: 18,
  },
  parent: {
    height: 8,
    alignSelf: "stretch",
  },
  code: {
    backgroundColor: Color.border,
    display: "none",
    marginTop: 4.41,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text2: {
    display: "none",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 11,
    fontSize: FontSize.size_6xs_2,
    marginTop: 4.41,
    textAlign: "left",
    color: Color.titelTextColor,
    letterSpacing: 0.3,
  },
  bottomChild: {
    borderStyle: "solid",
    borderColor: Color.border,
    borderTopWidth: 0.4,
    height: 0,
    alignSelf: "stretch",
  },
  thumbsUpIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text3: {
    left: 8,
    color: Color.subtitleTextColor,
    top: 0,
    position: "absolute",
  },
  likes: {
    marginLeft: 8.82,
  },
  likesDislikes: {
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  showAllReplies: {
    color: Color.primary1,
    marginLeft: 2.2,
  },
  seeReplies: {
    display: "none",
    flexDirection: "row",
    paddingHorizontal: 0,
    overflow: "hidden",
  },
  replly: {
    marginLeft: 8.82,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  seeRepliesParent: {
    right: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  dlr: {
    height: 10,
    alignSelf: "stretch",
  },
  content: {
    width: 317,
    paddingHorizontal: 18,
    paddingVertical: 9,
  },
  levelComment: {
    top: 899,
    left: 27,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0.8816145658493042,
      height: 0.4408072829246521,
    },
    shadowRadius: 2.2,
    elevation: 2.2,
    shadowOpacity: 1,
    overflow: "hidden",
    position: "absolute",
  },
});

export default PackageMainContainer;
