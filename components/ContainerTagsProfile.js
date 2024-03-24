import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ContainerTagsProfile = ({
  uniqueIdentifierText,
  uniqueIdentifierCode,
  uniqueIdentifierKey,
  uniqueIdentifierValue,
  specificIdentifierText,
  uniqueIdentifier,
}) => {
  return (
    <View style={styles.tagsProfile}>
      <View style={[styles.shoppingTagParent, styles.shoppingFlexBox]}>
        <Image
          style={styles.shoppingTag}
          contentFit="cover"
          source={uniqueIdentifierText}
        />
        <Text style={[styles.eventPlanner, styles.eventTypo]}>
          Handcraft Artisan
        </Text>
      </View>
      <View style={styles.shoppingTagGroup}>
        <Image
          style={styles.shoppingTag}
          contentFit="cover"
          source={uniqueIdentifierCode}
        />
        <Text style={[styles.eventPlanner1, styles.eventTypo]}>
          Batik Artist
        </Text>
      </View>
      <View style={[styles.shoppingTagContainer, styles.shoppingFlexBox]}>
        <Image
          style={styles.shoppingTag}
          contentFit="cover"
          source={uniqueIdentifierKey}
        />
        <Text style={[styles.eventPlanner, styles.eventTypo]}>Workshops</Text>
      </View>
      <View style={[styles.frameView, styles.shoppingParentFlexBox]}>
        <Image
          style={styles.shoppingTag}
          contentFit="cover"
          source={uniqueIdentifierValue}
        />
        <Text style={[styles.eventPlanner1, styles.eventTypo]}>
          Small Business Owner
        </Text>
      </View>
      <View style={[styles.shoppingTagParent1, styles.shoppingParentFlexBox]}>
        <Image
          style={styles.shoppingTag}
          contentFit="cover"
          source={specificIdentifierText}
        />
        <Text style={[styles.eventPlanner1, styles.eventTypo]}>
          Creative Minds
        </Text>
      </View>
      <View style={[styles.shoppingTagParent2, styles.shoppingParentFlexBox]}>
        <Image
          style={styles.shoppingTag}
          contentFit="cover"
          source={uniqueIdentifier}
        />
        <Text style={[styles.eventPlanner1, styles.eventTypo]}>
          Traditional Batik
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingFlexBox: {
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorBrown_100,
    borderRadius: Border.br_3xl_2,
    top: 0,
    position: "absolute",
  },
  eventTypo: {
    marginLeft: 7.4,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
  },
  shoppingParentFlexBox: {
    top: 33,
    backgroundColor: Color.colorPink,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xl_2,
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
  },
  eventPlanner1: {
    color: Color.colorBrown_100,
  },
  shoppingTagGroup: {
    left: 122,
    backgroundColor: Color.colorPink,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xl_2,
    top: 0,
    position: "absolute",
  },
  shoppingTagContainer: {
    left: 214,
  },
  frameView: {
    left: 2,
  },
  shoppingTagParent1: {
    left: 143,
  },
  shoppingTagParent2: {
    left: 250,
  },
  tagsProfile: {
    top: 330,
    left: 9,
    width: 351,
    height: 66,
    position: "absolute",
  },
});

export default ContainerTagsProfile;
