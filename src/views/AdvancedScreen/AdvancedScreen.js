import React, { Component } from "react";
import {
    Button, Text, Container, Body, Content, Header, Title, Left, Icon, Right
} from "native-base";
import CommonHeader from '../../components/SideBar/CommonHeader';

export default class AdvancedScreen extends Component {

    render() {
        return (
            <Container>
                <CommonHeader {...this.props} />
                <Content padder>
                    <Text>Advanced Screen</Text>
                </Content>

            </Container>
        );
    }
}


AdvancedScreen.navigationOptions = ({ navigation }) => {
    return {
        header: null
    };
};
