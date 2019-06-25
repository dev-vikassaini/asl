import React from "react";
import {
  Button, Text, Container, Card, CardItem, Body, Content
} from "native-base";
import { Image, ImageBackground } from 'react-native';

import CommonHeader from '../../components/SideBar/CommonHeader';
import { configConstants } from '../../constants/config.constant';

class HomeScreen extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <CommonHeader {...this.props} />

        <ImageBackground source={configConstants.homePageBG} style={{ width: "100%", height: '100%' }}>
          <Content padder>
            <Card>
              <CardItem>
                <Body>
                  <Text>Chat App to talk some awesome people!</Text>
                </Body>
              </CardItem>
            </Card>
            <Button
              full
              rounded
              dark
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Chat")}
            >
              <Text>Chat With People</Text>
            </Button>
            <Button
              full
              rounded
              primary
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("ProfileScreen")}
            >
              <Text>Goto Profiles</Text>
            </Button>
          </Content>

        </ImageBackground>
      </Container>
    );
  }
}

export default HomeScreen;