import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../common/Header";
import Footer from "../common/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class About extends React.Component {
  pageTitle = "About Page";
  componentDidMount() {
    AsyncStorage.setItem("visited", true);
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 35 }}>
        <Header pageTitle={this.pageTitle} navigation={this.props.navigation} />

        <View style={{ flex: 1, paddingLeft: 10, marginBottom: 57 }}>
          <Text style={{ fontWeight: "bold", fontSize: 30, marginBottom: 25 }}>
            About Us:
          </Text>

          <View
            style={{
              flex: 4,
              flexDirection: "row",
              backgroundColor: "#eee",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <View style={{ flex: 2 }}>
              <Image
                source={require("../imgs/elon.jpg")}
                style={{ width: 170, height: 170, borderRadius: 170 }}
              />
            </View>

            <View style={{ flex: 2, justifyContent: "center" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 24, marginBottom: 20 }}
              >
                Elon Musk :-
              </Text>
              <Text style={{ fontSize: 13, padding: 3 }}>
                It is important to view knowledge as sort of a semantic tree --
                make sure you understand the fundamental principles, ie the
                trunk and big branches, before you get into the leaves/details
                or there is nothing for them to hang on to.
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 4,
              flexDirection: "row",
              backgroundColor: "#eee",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <View style={{ flex: 2 }}>
              <Image
                source={require("../imgs/elon.jpg")}
                style={{ width: 170, height: 170, borderRadius: 170 }}
              />
            </View>

            <View style={{ flex: 2, justifyContent: "center" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 24, marginBottom: 20 }}
              >
                Elon Musk :-
              </Text>
              <Text style={{ fontSize: 13, padding: 3 }}>
                “My proceeds from the PayPal acquisition were $180 million. I
                put $100 million in SpaceX, $70m in Tesla, and $10m in Solar
                City. I had to borrow money for rent.”
              </Text>
            </View>
          </View>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
