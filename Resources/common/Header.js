import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";

export default class Header extends React.Component {
  render() {
    let { pageTitle } = this.props;
    return (
      <View>
        <View
          style={{
            backgroundColor: "#262861",
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", padding: 10 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Ionicons name="home-sharp" size={30} color="white" />
            </TouchableOpacity>

            <Text
              style={{
                color: "white",
                fontSize: 24,
                paddingLeft: 10,
                fontWeight: "bold",
              }}
            >
              {pageTitle}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Google");
            }}
            style={{ padding: 10 }}
          >
            <Ionicons name="md-logo-google" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
