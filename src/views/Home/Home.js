import React, { Component } from "react";
import { View } from "react-native";

import CustomHeader from "../../components/Navigation/CustomHeader";

export default class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} />
      </View>
    );
  }
}