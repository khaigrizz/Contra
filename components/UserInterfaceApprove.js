import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UserInterfaceApprove = ({
  userInterfaceApproveUserI,
  userInterfaceApprovePosition,
  userInterfaceApproveWidth,
  userInterfaceApproveHeight,
  userInterfaceApproveTop,
  userInterfaceApproveLeft,
}) => {
  const userInterfaceApproveStyle = useMemo(() => {
    return {
      ...getStyleValue("position", userInterfaceApprovePosition),
      ...getStyleValue("width", userInterfaceApproveWidth),
      ...getStyleValue("height", userInterfaceApproveHeight),
      ...getStyleValue("top", userInterfaceApproveTop),
      ...getStyleValue("left", userInterfaceApproveLeft),
    };
  }, [
    userInterfaceApprovePosition,
    userInterfaceApproveWidth,
    userInterfaceApproveHeight,
    userInterfaceApproveTop,
    userInterfaceApproveLeft,
  ]);

  return (
    <Image
      style={[styles.userInterfaceApprove, userInterfaceApproveStyle]}
      contentFit="cover"
      source={userInterfaceApproveUserI}
    />
  );
};

const styles = StyleSheet.create({
  userInterfaceApprove: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default UserInterfaceApprove;
