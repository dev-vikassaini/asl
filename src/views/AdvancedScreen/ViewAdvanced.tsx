import React, { Component } from "react";
import {
    Button, Text, Container, Body, Content, Header, Title, Left, Icon, Right
} from "native-base";

export default class ViewAdvanced extends Component<any, any> {
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
                        <Title>View Advance Screen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Text>View Advance Screen</Text>
                </Content>

            </Container>
        );
    }
}