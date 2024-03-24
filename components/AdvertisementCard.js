import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const AdvertisementCard = () => {
  return (
    <View style={styles.advertisementCard}>
      <Image
        style={[
          styles.property1happeningNow,
          styles.property1happeningNowLayout,
        ]}
        contentFit="cover"
        source={require("../assets/property-1happening-now.png")}
      />
      <Image
        style={[
          styles.property1variant2Icon,
          styles.property1happeningNowLayout,
        ]}
        contentFit="cover"
        source={require("../assets/property-1variant2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1happeningNowLayout: {
    height: 263,
    width: 528,
    left: 20,
    position: "absolute",
  },
  property1happeningNow: {
    top: 20,
  },
  property1variant2Icon: {
    top: 302,
  },
  advertisementCard: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 568,
    height: 867,
    overflow: "hidden",
  },
});

export default AdvertisementCard;
