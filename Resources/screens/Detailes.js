import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default class Detailes extends React.Component {
  pageTitle = "Detailes Page";
  render() {
    return (
      <View style={{ flex: 1, marginTop: 35 }}>
        <Header pageTitle={this.pageTitle} navigation={this.props.navigation} />

        <View
          style={{
            flex: 1,
            backgroundColor: "#eee",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ marginBottom: 20 }}>
            <Image
              source={{ uri: this.props.route.params.img }}
              style={{ width: 411, height: 300 }}
            />
          </View>

          <View
            style={{
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 24, marginBottom: 20 }}
            >
              {this.props.route.params.title}
            </Text>
            <Text style={{ marginBottom: 30 }}>
              {this.props.route.params.content.substring(0, 400)}
            </Text>
          </View>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
