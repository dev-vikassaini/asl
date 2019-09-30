import React from "react";
import { Image, StyleSheet, PixelRatio, FlatList } from 'react-native';
import { Text, Container, ListItem, Content, Icon, Left, Body, Right } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';
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

  logoutRequest = async () => {
    try {
      await AsyncStorage.clear();
      this.props.navigation.navigate("AuthLoading");
    } catch (e) {

    }
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
          <FlatList
            data={configConstants.routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderItem={({ item }) => {
              let iconName = '';
              switch (item.Key) {
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
                case "Facebook":
                  socialIcon = 'logo-facebook';
                  break;
                case "Google":
                  socialIcon = 'logo-googleplus';
                  break;
                case "Twitter":
                  socialIcon = 'logo-twitter';
                default:
                  iconName = 'md-person'
              }
              return (
                <ListItem icon button onPress={() => this.props.navigation.navigate(item.Key)} key={item.Key}>
                  <Left>
                    <Icon name={`${iconName}`}></Icon>
                  </Left>
                  <Body>
                    <Text>{item.Key}</Text>
                  </Body>
                  <Right>
                    <Icon name='md-arrow-forward'></Icon>
                  </Right>
                </ListItem>
              );
            }}
          />

          <FlatList style={styles.FollowUs}
            data={configConstants.menuDivider}
            contentContainerStyle={{ marginTop: 0 }}
            renderItem={({ item }) => {
              return (
                <ListItem key={item.Key}>
                  <Left>
                    <Text>{item.Key}</Text>
                  </Left>
                </ListItem>
              );
            }}
          />

          <FlatList
            data={configConstants.socialRoutes}
            contentContainerStyle={{ marginTop: 0 }}
            renderItem={({ item }) => {
              let socialIcon = '';
              switch (item.Key) {
                case "Facebook":
                  socialIcon = 'logo-facebook';
                  break;
                case "Google":
                  socialIcon = 'logo-googleplus';
                  break;
                default:
                  socialIcon = 'logo-twitter';
              }
              return (
                <ListItem icon button onPress={() => this.props.navigation.navigate(item.Key)} key={item.Key}>
                  <Left>
                    <Icon name={`${socialIcon}`}></Icon>
                  </Left>
                  <Body>
                    <Text>{item.Key}</Text>
                  </Body>
                  <Right>
                    <Icon name='md-arrow-forward'></Icon>
                  </Right>
                </ListItem>
              );
            }}
          />

        </Content>

        {/* <Footer style={styles.container}>
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
            <Button active onPress={this.logoutRequest}>
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer> */}
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
  startFollow: {
    borderBottomColor: '#d4d2d6',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  FollowUs: {
    backgroundColor: "#f7f7f7"
  }
});