import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Container, Header, Content, Item, Input, Icon, View, Card, CardItem, Right, Text, Button } from 'native-base';

import { scale, scaleVertical } from "../../utilities/scale";
import { configConstants } from '../../constants/config.constant';
import  styleVersion  from '../../styles/styles.version';

class ForgotPassword extends Component {

  render() {
    const renderIcon = () => (
      <Image
        style={styles.image}
        source={configConstants.aslLogo}
      />
    );
    return (
      <Container>
        <Content padder>
          <View style={styles.header}>{renderIcon()}</View>
          <View style={styles.all}>
            <Item regular>
              <Icon name='md-mail' />
              <Input placeholder='Email' />
            </Item>
            <Button full iconRight style={styles.inputItem}>
              <Text>Submit</Text>
            </Button>
          </View>

          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text style={styles.textStyle}>
                Already have an account? <Text style={styles.textLink} onPress={() => this.props.navigation.navigate("Login")}>Sign in now.</Text></Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ForgotPassword;

ForgotPassword.navigationOptions = ({ navigation }) => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  header: {
    marginTop: styleVersion.m20,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: scaleVertical(100),
    resizeMode: "contain"
  },
  all: {
    marginTop: scaleVertical(24),
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: styleVersion.m8,
    paddingVertical: scaleVertical(12)
  },
  inputItem: {
    marginTop:  styleVersion.m10
  },
  footer: {
    justifyContent: "space-between",
    marginTop: scaleVertical(28),
    paddingHorizontal: styleVersion.m8,
    paddingVertical: scaleVertical(12)
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center"
  },
  textStyle: {
    color: "#484848",
    fontSize: 18,
    marginTop: styleVersion.m8
  },
  textLink: {
    color: "#305edb",
    fontSize: 18,
    marginTop: styleVersion.m8
  }
});