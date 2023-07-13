import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, StyleSheet } from "react-native";

// import HomeScreen from './src/screens/Home';
import LoginScreen from "./src/screens/Login";
import SignupScreen from "./src/screens/Signup";
import DashboardScreen from "./src/screens/Dashboard";

import Header from "./src/components/Header";
import DrawerButton from "./src/components/DrawerButton";
import HeaderWithProfile from "./src/components/HeaderWithProfile";

import Logo from "./src/assests/logo-s.png";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      {/* Screen groups which will contain hamburger menu */}
      <Stack.Group
        screenOptions={({ navigation }) => ({
          // title: "Awesome app",
          headerLeft: () => (
            <DrawerButton
              onPress={() => console.log("hamburger menu clicked")}
            />
          ),
        })}
      >
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerTitle: () => <HeaderWithProfile />,
            // headerRight: () => (
            //   <>
            //     <View style={[styles.shadowBg, { top: -200 }]}></View>
            //     <View style={{ marginRight: 10, marginTop: -70 }}>
            //       <Image
            //         source={Logo}
            //         style={{ maxWidth: 140, maxHeight: 60 }}
            //       />
            //     </View>
            //   </>
            // ),
            headerTintColor: "#fff",
            headerStyle: {
              height: 150,
              backgroundColor: "#754ea0",
            },
            headerTitleStyle: {
              backgroundColor: "blue",
            },
          }}
        />
      </Stack.Group>

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: () => (
            <Header
              title="LOGIN"
              subtitle="Enter your login details to access your account"
            />
          ),
          headerRight: () => (
            <>
              <View style={styles.shadowBg}></View>
              <View style={{ marginRight: 10, marginTop: -70 }}>
                <Image source={Logo} style={{ maxWidth: 140, maxHeight: 60 }} />
              </View>
            </>
          ),
          headerStyle: {
            height: 230,
            backgroundColor: "#754ea0",
          },
        }}
      />

      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitle: () => (
            <Header
              title="SIGNUP"
              subtitle="Enter your personal details to create your account"
            />
          ),
          headerRight: () => (
            <>
              <View style={[styles.shadowBg, { top: -200 }]}></View>
              <View style={{ marginRight: 10, marginTop: -70 }}>
                <Image source={Logo} style={{ maxWidth: 140, maxHeight: 60 }} />
              </View>
            </>
          ),
          headerTintColor: "#fff",
          headerStyle: {
            height: 180,
            backgroundColor: "#754ea0",
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  shadowBg: {
    height: 310,
    width: 310,
    borderBottomLeftRadius: 200,
    backgroundColor: "#55208a",
    position: "absolute",
    top: -120,
    right: -120,
  },
});

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
