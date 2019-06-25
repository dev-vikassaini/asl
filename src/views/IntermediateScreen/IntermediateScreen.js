import React, { Component } from "react";
import {
    Button, Text, Container, Body, Content, Header, Title, Left, Icon, Right
} from "native-base";
import CommonHeader from '../../components/SideBar/CommonHeader';

export default class IntermediateScreen extends Component {

    render() {
        return (
            <Container>
                <CommonHeader {...this.props} />
                <Content padder>
                    <Text>Intermediate Screen</Text>
                </Content>

            </Container>
        );
    }
}


IntermediateScreen.navigationOptions = ({ navigation }) => {
    return {
        header: null
    };
};
