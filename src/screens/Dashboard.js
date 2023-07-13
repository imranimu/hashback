import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import UserIcon from "../assests/005.png";
import JobIcon from "../assests/006.png";
import ServiceIcon from "../assests/007.png";
import WalletIcon from "../assests/008.png";
import PeopleIcon from "../assests/009.png";
import ProIcon from "../assests/010.png";
import DaysIcon from "../assests/011.png";
import ListIcon from "../assests/012.png";
import RightArrowIcon from "../assests/016.png";
import SupportIcon from "../assests/013.png";

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Top Section Container */}

        <View
          style={{
            backgroundColor: "#ECEFF4",
            flexDirection: "row",
            paddingLeft: 30,
            maxWidth: "100%",
            paddingTop: 10,
            borderRadius: 20,
            position: "relative",
            zIndex: 9999999999,
          }}
        >
          <View style={{ minWidth: "70%", paddingTop: 40 }}>
            {/* First clickable section */}

            <View
              style={{
                marginBottom: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  console.log("get job button clicked");
                }}
              >
                <View
                  style={{
                    backgroundColor: "#EE5679",
                    flexDirection: "row",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Image
                    source={JobIcon}
                    style={{
                      width: 30,
                      height: 30,
                      maxWidth: 140,
                      maxHeight: 140,
                      marginRight: 10,
                    }}
                  />
                  <View style={{ justifyContent: "center" }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#fff",
                      }}
                    >
                      Get Job
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* Second clickable section */}

            <View>
              <View
                style={{
                  marginBottom: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    console.log("get service button clicked");
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#154479",
                      flexDirection: "row",
                      borderRadius: 5,
                      padding: 10,
                    }}
                  >
                    <Image
                      source={ServiceIcon}
                      style={{
                        width: 30,
                        height: 30,
                        maxWidth: 140,
                        maxHeight: 140,
                        marginRight: 10,
                      }}
                    />
                    <View style={{ justifyContent: "center" }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "#fff",
                        }}
                      >
                        Get Service
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Big Image */}

          <Image
            source={UserIcon}
            style={{
              width: 150,
              height: 170,
              maxWidth: 200,
              maxHeight: 230,
              right: 100,
            }}
          />
        </View>

        {/* Second section container */}

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ECEFF4",
            top: -18,
            position: "relative",
            zIndex: 999999999,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          {/* Second section Left Item */}

          <View
            style={{
              flexDirection: "row",
              width: "49%",
              backgroundColor: "#FF9D00",
              borderBottomLeftRadius: 10,
              padding: 20,
              paddingTop: 40,
              marginRight: 10,
            }}
          >
            <Image
              source={WalletIcon}
              style={{
                width: 30,
                height: 20,
                maxWidth: 140,
                maxHeight: 140,
                marginRight: 10,
                marginLeft: 12,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              $ 25748.91
            </Text>
          </View>

          {/* Second section Right Item */}

          <View
            style={{
              flexDirection: "row",
              width: "49%",
              backgroundColor: "#FF9D00",
              borderBottomRightRadius: 10,
              padding: 20,
              paddingTop: 40,
            }}
          >
            <Image
              source={PeopleIcon}
              style={{
                width: 30,
                height: 20,
                maxWidth: 140,
                maxHeight: 140,
                marginRight: 10,
                marginLeft: 12,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              1571
            </Text>
          </View>
        </View>

        {/* Third section container */}

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ECEFF4",
            top: -30,
            position: "relative",
            zIndex: 999999,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          {/* Third section Left Item */}

          <View
            style={{
              flexDirection: "row",
              width: "49%",
              backgroundColor: "#FF413D",
              borderBottomLeftRadius: 10,
              padding: 20,
              paddingTop: 25,
              marginRight: 10,
            }}
          >
            <Image
              source={ProIcon}
              style={{
                width: 28,
                height: 35,
                maxWidth: 140,
                maxHeight: 140,
                marginRight: 14,
                marginLeft: 12,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                textAlignVertical: "center",
                color: "#ECEAEF",
              }}
            >
              PRO
            </Text>
          </View>

          {/* Third section Right Item */}

          <View
            style={{
              flexDirection: "row",
              width: "49%",
              backgroundColor: "#FF413D",
              borderBottomRightRadius: 10,
              padding: 20,
              paddingTop: 25,
            }}
          >
            <Image
              source={DaysIcon}
              style={{
                width: 24,
                height: 34,
                maxWidth: 140,
                maxHeight: 140,
                marginRight: 15,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                textAlignVertical: "center",
                color: "#ECEAEF",
              }}
            >
              1571 Days
            </Text>
          </View>
        </View>

        {/* Fourth section container */}

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#55208A",
            top: -40,
            zIndex: 9999,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 20,
            paddingTop: 25,
          }}
        >
          <Image
            source={ListIcon}
            style={{
              width: 30,
              height: 34,
              maxWidth: 140,
              maxHeight: 140,
              marginRight: 15,
              marginLeft: 12,
            }}
          />

          <Text
            style={{
              fontWeight: "bold",
              textAlignVertical: "center",
              fontSize: 18,
              color: "#ECEAEF",
            }}
          >
            Let's do the daily job
          </Text>

          <Image
            source={RightArrowIcon}
            style={{
              width: 22,
              height: 40,
              maxWidth: 140,
              maxHeight: 140,
              marginRight: 10,
              marginLeft: 12,
            }}
          />
        </View>

        {/* Last section container */}

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#ECEFF4",
            zIndex: 9999,
            padding: 20,
            zIndex: 99,
            marginTop: -50,
          }}
        >
          <Image
            source={SupportIcon}
            style={{
              width: 50,
              height: 60,
              maxWidth: 140,
              maxHeight: 140,
              marginRight: 10,
              marginLeft: 12,
              alignSelf: "center",
            }}
          />

          <Text
            style={{
              fontWeight: "bold",
              textAlignVertical: "center",
              fontSize: 20,
              color: "#2971C3",
            }}
          >
            Support SMEs & Nonprofits
          </Text>
        </View>
      </View>
    );
  }
}

// Styles for this component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#754ea0",
  },
});

export default DashboardScreen;
