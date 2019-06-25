import React from "react";
import { Image, StyleSheet } from 'react-native';
import { Button, Text, Container, List, ListItem, Switch, Content, Icon, Title, Footer, FooterTab, Left, Body, Right } from "native-base";

import { configConstants } from '../../constants/config.constant';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'V K',
      phone: '9650715288',
      photoUrl: ''
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={configConstants.sideBarDrawer}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={configConstants.aslLogo}
          />
          <List
            dataArray={configConstants.routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              let iconName = '';
              switch (data) {
                case "Home":
                  iconName = 'md-home';
                  break;
                case "Basic":
                  iconName = 'star-outline';
                  break;
                case 'Intermediate':
                  iconName = 'star-half';
                  break;
                case "Advance":
                  iconName = 'star';
                  break;
                case 'Practice':
                  iconName = 'md-paper';
                  break;
                default:
                  iconName = 'md-person'
              }
              return (
                <ListItem icon button onPress={() => this.props.navigation.navigate(data)}>
                  <Left>
                    <Icon name={`${iconName}`}></Icon>
                  </Left>
                  <Body>
                    <Text>{data}</Text>
                  </Body>
                  <Right>
                    <Icon name='md-arrow-forward'></Icon>
                  </Right>
                </ListItem>
              );
            }}
          />
          <List
            dataArray={configConstants.socialRoutes}
            contentContainerStyle={{ marginTop: 20 }}
            renderRow={data => {
              let iconName = '';
              switch (data) {
                case "Facebook":
                  iconName = 'facebook-with-circle';
                  break;
                case "Google":
                  iconName = 'google--with-circle';
                  break;
                case 'Twitter':
                  iconName = 'twitter-with-circle';
                  break;                
                default:
                  iconName = 'instagram'
              }
              return (
                <ListItem icon button onPress={() => this.props.navigation.navigate(data)}>
                  <Left>
                    <Icon name={`${iconName}`}></Icon>
                  </Left>
                  <Body>
                    <Text>{data}</Text>
                  </Body>
                  <Right>
                    <Icon name='md-arrow-forward'></Icon>
                  </Right>
                </ListItem>
              );
            }}
          />
        </Content>
        <Footer style={styles.container}>
          <FooterTab>
            <Button>
              <Image
                round
                style={styles.CircleShapeView}
                source={configConstants.profilePhoto}
              />
            </Button>
            <Button>
              <Text>{this.state.name}</Text>
            </Button>
            <Button active>
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#4286f4'
  },

  CircleShapeView: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});