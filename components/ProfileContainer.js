import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ProfileContainer1 from "./ProfileContainer1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ProfileContainer = () => {
  return (
    <View style={styles.profilePageFreeUser}>
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
          source={require("../assets/wifi8.png")}
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
      <Text style={styles.myProfile}>My Profile</Text>
      <Text style={styles.myCard}>My Card</Text>
      <ProfileContainer1 />
      <View style={styles.tagsProfile}>
        <View style={styles.shoppingTagParent}>
          <Image
            style={styles.shoppingTag}
            contentFit="cover"
            source={require("../assets/shopping--tag1.png")}
          />
          <Text style={[styles.eventPlanner, styles.eventTypo]}>
            Batik Artist
          </Text>
        </View>
        <View style={[styles.shoppingTagGroup, styles.shoppingFlexBox]}>
          <Image
            style={styles.shoppingTag}
            contentFit="cover"
            source={require("../assets/shopping--tag18.png")}
          />
          <Text style={[styles.eventPlanner1, styles.eventTypo]}>
            Illustrator
          </Text>
        </View>
        <View style={[styles.shoppingTagContainer, styles.shoppingFlexBox]}>
          <Image
            style={styles.shoppingTag}
            contentFit="cover"
            source={require("../assets/shopping--tag18.png")}
          />
          <Text style={[styles.eventPlanner1, styles.eventTypo]}>
            Textile Artist
          </Text>
        </View>
      </View>
      <Image
        style={[styles.userInterfacePen, styles.userLayout]}
        contentFit="cover"
        source={require("../assets/user-interface--pen1.png")}
      />
      <Image
        style={[styles.userInterfacePen1, styles.userLayout]}
        contentFit="cover"
        source={require("../assets/user-interface--pen1.png")}
      />
      <Image
        style={[styles.userInterfacePen2, styles.userLayout]}
        contentFit="cover"
        source={require("../assets/user-interface--pen1.png")}
      />
      <Text style={styles.bio}>Bio</Text>
      <View style={styles.bioDescriptionWrapper}>
        <Text style={[styles.bioDescription, styles.bioDescriptionTypo]}>
          I'm a passionate event organizer with a knack for transforming ideas
          into unforgettable experiences. From intimate gatherings to
          large-scale conferences, I thrive on the challenge of exceeding
          expectations and creating moments that leave a lasting impact.
        </Text>
      </View>
      <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
      <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
      <Text style={[styles.collections, styles.reviewTypo]}>Collections</Text>
      <View style={[styles.profilePageFreeUserChild, styles.profilePosition]} />
      <View style={[styles.profilePageFreeUserItem, styles.profilePosition]} />
      <View style={styles.createNewProjectParent}>
        <Text style={[styles.createNewProject, styles.bioDescriptionTypo]}>
          Create new Project
        </Text>
        <Image
          style={styles.userInterfacePlus}
          contentFit="cover"
          source={require("../assets/user-interface--plus.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventTypo: {
    marginLeft: 7.4,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  shoppingFlexBox: {
    backgroundColor: Color.colorPowderblue,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xl_2,
    top: 0,
    position: "absolute",
  },
  userLayout: {
    opacity: 0.2,
    maxHeight: "100%",
    maxWidth: "100%",
    left: "88.53%",
    right: "6.13%",
    width: "5.33%",
    height: "2.47%",
    overflow: "hidden",
    position: "absolute",
  },
  bioDescriptionTypo: {
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
  },
  reviewTypo: {
    top: "61.28%",
    fontFamily: FontFamily.figtreeSemiBold,
    fontSize: FontSize.size_sm_5,
    textAlign: "left",
    color: Color.titelTextColor,
    fontWeight: "600",
    position: "absolute",
  },
  profilePosition: {
    top: "63.58%",
    borderStyle: "solid",
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderColor: Color.titelTextColor,
    borderStyle: "solid",
    height: 11,
    top: 0,
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
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.titelTextColor,
    fontWeight: "600",
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "5.43%",
    top: "0.12%",
    right: "-0.53%",
    bottom: "94.45%",
    left: "0.53%",
    width: "100%",
    position: "absolute",
  },
  myProfile: {
    top: "7.03%",
    left: "6.13%",
    fontSize: FontSize.size_xl_6,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    position: "absolute",
  },
  myCard: {
    top: "11.59%",
    left: "8.27%",
    fontSize: FontSize.bodySmallBold_size,
    display: "none",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.titelTextColor,
    position: "absolute",
  },
  shoppingTag: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  eventPlanner: {
    color: Color.colorWhite,
  },
  shoppingTagParent: {
    left: 2,
    backgroundColor: Color.colorTeal,
    padding: 7,
    borderRadius: Border.br_3xl_2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  eventPlanner1: {
    color: Color.colorTeal,
  },
  shoppingTagGroup: {
    left: 95,
  },
  shoppingTagContainer: {
    left: 180,
  },
  tagsProfile: {
    height: "4.32%",
    width: "73.33%",
    top: "44.14%",
    right: "13.33%",
    bottom: "51.54%",
    left: "13.33%",
    position: "absolute",
  },
  userInterfacePen: {
    top: "44.51%",
    bottom: "53.02%",
  },
  userInterfacePen1: {
    top: "49.57%",
    bottom: "47.97%",
  },
  userInterfacePen2: {
    top: "61.04%",
    bottom: "36.5%",
  },
  bio: {
    top: "50.06%",
    left: "6.93%",
    fontFamily: FontFamily.figtreeSemiBold,
    fontSize: FontSize.size_sm_5,
    textAlign: "left",
    color: Color.titelTextColor,
    fontWeight: "600",
    position: "absolute",
  },
  bioDescription: {
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_2xs_7,
    color: Color.colorGray_300,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.figtreeRegular,
    width: "100%",
    position: "absolute",
  },
  bioDescriptionWrapper: {
    height: "8.26%",
    width: "84.27%",
    top: "51.66%",
    right: "6.67%",
    bottom: "40.07%",
    left: "9.07%",
    opacity: 0.5,
    position: "absolute",
  },
  aboutMe: {
    left: "7.49%",
  },
  review: {
    left: "27.23%",
  },
  collections: {
    left: "41.68%",
  },
  profilePageFreeUserChild: {
    height: "0.11%",
    width: "18.91%",
    right: "39.6%",
    bottom: "36.31%",
    left: "41.49%",
    borderTopWidth: 0.9,
    borderColor: Color.titelTextColor,
  },
  profilePageFreeUserItem: {
    height: "0.09%",
    width: "55.39%",
    right: "37.79%",
    bottom: "36.34%",
    left: "6.83%",
    borderColor: Color.colorGray_1600,
    borderTopWidth: 0.7,
  },
  createNewProject: {
    fontSize: FontSize.size_3xs_1,
    color: Color.colorWhite,
  },
  userInterfacePlus: {
    height: 15,
    marginLeft: 10,
    width: 15,
    overflow: "hidden",
  },
  createNewProjectParent: {
    top: 529,
    left: 28,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.primary,
    width: 121,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  profilePageFreeUser: {
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 811,
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default ProfileContainer;
