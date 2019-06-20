import React, { Component } from "react";
import {
    Button, Text, Container, Body, Content, Header, Title, Left, Icon, Right
} from "native-base";

export default class AdvancedScreen extends Component<any, any> {
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
                        <Title>Advanced Screen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Text>Advanced Screen</Text>
                </Content>

            </Container>
        );
    }
}