import React, { Component } from "react";
import {
  Button, Text, Container, Card, CardItem, Body, Content
} from "native-base";
import { Image, ImageBackground } from 'react-native';

import CommonHeader from '../../components/SideBar/CommonHeader';
import { configConstants } from '../../constants/config.constant';

export default class NotificationScreen extends Component {
  render() {
    return (
      <Container>
        <CommonHeader {...this.props} />
        <ImageBackground source={configConstants.homePageBG} style={{ width: "100%", height: '100%' }}>
          <Content padder>
            <Card>
              <CardItem>
                <Body>
                  <Text>All Notifications</Text>
                </Body>
              </CardItem>
            </Card>
          </Content>

        </ImageBackground>
      </Container>
    );
  }
}


NotificationScreen.navigationOptions = ({ navigation }) => {
  return {
    header: null
  };
};