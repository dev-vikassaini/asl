import React, { Component } from "react";
import {
  Button, Text, Container, Body, Content, Header, Title, Left, Icon, Right
} from "native-base";

export default class AboutScreen extends Component<any, any> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>About Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Hello Vikas What about you?</Text>
        </Content>

      </Container>
    );
  }
}