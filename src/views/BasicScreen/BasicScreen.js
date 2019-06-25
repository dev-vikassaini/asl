import React, { Component } from "react";
import {
    Button, Text, Container, Body, Content, Card, CardItem, Header, Title, Left, Icon, Right
} from "native-base";

import CommonHeader from '../../components/SideBar/CommonHeader';

export default class BasicScreen extends Component {

    render() {
        return (
            <Container>
                <CommonHeader {...this.props} />
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Basic screen some awesome people!</Text>
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
                        <Text>Basic screen With People</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}

BasicScreen.navigationOptions = ({ navigation }) => {
    return {
        header: null
    };
};