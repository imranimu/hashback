//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Header = (props) => {
  return (
    <View style={styles.headerwrap}>
      <Text style={styles.nametitle}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerwrap: {
    marginLeft: 15,
  },
  nametitle: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    width: 220,
    lineHeight: 28,
  },
});

//make this component available to the app
export default Header;
