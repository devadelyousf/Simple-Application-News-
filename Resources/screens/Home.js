import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default class Home extends React.Component {
  pageTitle = "Home Page";
  state = { myPosts: [], resReady: 0 };

  componentDidMount() {
    fetch("https://egyptian-antiquities.com/wp-json/wp/v2/posts?per_page=15")
      .then((r) => r.json())
      .then((res) => {
        this.setState({
          myPosts: res,
          resReady: 1,
        });
        console.log(this.state.myPosts);
      })
      .catch((error) => {
        console.error(error + "fetch error");
      });
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 35 }}>
        <Header pageTitle={this.pageTitle} navigation={this.props.navigation} />

        <ScrollView style={{ flex: 1, backgroundColor: "#eee" }}>
          {this.renderData()}
        </ScrollView>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }

  renderData() {
    console.log(this.state.myPosts);
    if (this.state.resReady === 1) {
      return this.state.myPosts.map((data) => {
        return (
          <TouchableOpacity
            key={data.id}
            onPress={() => {
              this.props.navigation.navigate("Detailes", {
                img: data.better_featured_image.source_url,
                title: data.title.rendered,
                content: data.content.rendered,
              });
            }}
            style={{
              flex: 3,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: 15,
              margin: 10,
            }}
          >
            <View style={{ flex: 1, marginRight: 30 }}>
              <Image
                source={{ uri: data.better_featured_image.source_url }}
                style={{ width: 130, height: 130, borderRadius: 5 }}
              />
            </View>

            <View style={{ flex: 2, marginLeft: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                {data.title.rendered}
              </Text>
              <Text style={{ paddingTop: 10 }}>
                {data.content.rendered.substring(0, 80)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      });
    } else {
      return <ActivityIndicator size="large" color="#09c" />;
    }
  }
}
