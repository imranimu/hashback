import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import ProfilePicture from "../assests/004.png";

const HeaderWithProfile = (props) => {
  return (
    <View style={styles.headerWrap}>
      <View style={styles.profileWrap}>
        <Text style={styles.fullNameStyle}>Abraham Lincoln</Text>
        <Text style={styles.shortNameStyle}>@Abraham</Text>
      </View>

      <Image source={ProfilePicture} style={styles.profilePictureStyle} />
    </View>
  );
};

// Styles for this component
const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: "row",
    marginLeft: 30,
    alignItems: "center",
    minWidth: 310,
  },
  profileWrap: {
    alignItems: "flex-end",
  },
  fullNameStyle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
    maxWidth: 300,
    maxHeight: 40,
  },
  shortNameStyle: { fontSize: 14, color: "#fff" },
  profilePictureStyle: {
    width: 70,
    height: 70,
    maxWidth: 140,
    maxHeight: 160,
    marginLeft: 10,
  },
});

export default HeaderWithProfile;
