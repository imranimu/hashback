//import libraries
import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";

// create a component
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      apiurl: "",
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={{ color: "#000" }}>Login Screen | Hash Ads</Text>

        <Link to={{ screen: "Signup" }}>Go To Sign Up</Link>

        <Link to={{ screen: "Dashboard" }}>Go To Dashboard</Link>

        <TouchableOpacity onPress={() => navigate("Signup")}>
          <Text>Touch Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the LoginScreen
export default LoginScreen;
