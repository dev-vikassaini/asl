import React from "react";
import { Image, StyleSheet } from 'react-native'
import { Button, Text, Container, List, ListItem, Content, Icon, Footer, FooterTab } from "native-base";

const routes = ["Home", "Chat", "Profile"];
const profilePhoto = require('../../../assets/profile/BeautyPlusMe_20180929200412_fast.jpg')

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Vikas',
      photoUrl: ''
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
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
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              let iconName = '';
              if (data === 'Home') {
                iconName = 'md-home';
              } else if (data === "Chat") {
                iconName = 'md-list-box'
              } else if (data === "Profile") {
                iconName = 'md-person'
              } else {
                iconName = 'md-notifications'
              }
              return (
                <ListItem button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text><Icon name={`${iconName}`}></Icon> {data}</Text>
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
                source={profilePhoto}
              />
            </Button>
            <Button style={styles.profileDetails}>
              <Text>{this.state.name}</Text>
            </Button>
            <Button>
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
  profileDetails: {
    textAlign: 'left',
    flexDirection: "row",
    justifyContent: "left"
  }
});