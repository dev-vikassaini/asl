import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import { View } from "react-native";

import styles from "./styles";

const CustomHeader = ({ navigation }) => (
  <View style={[styles.container]}>
    <Icon
      name="md-menu"
      size={32}
      color="black"
      onPress={() => navigation.toggleDrawer()}
    />
  </View>
);

export default CustomHeader;