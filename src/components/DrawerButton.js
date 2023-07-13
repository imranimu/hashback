//import libraries
import React from "react";
import { View, Image, StyleSheet } from "react-native";

import HamburgerMenu from "../assests/014.png";

const DrawerButton = (props) => {
  return (
    <View style={{ marginLeft: 10, marginTop: 10 }}>
      <Image
        source={HamburgerMenu}
        style={{ width: 20, height: 20, maxWidth: 40, maxHeight: 60 }}
      />
    </View>
  );
};

// Styles for this component
const styles = StyleSheet.create({});

export default DrawerButton;
