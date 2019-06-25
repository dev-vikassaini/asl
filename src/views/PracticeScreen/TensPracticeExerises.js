import React from "react";
import { Button, Text, Container, Body, Content, Header, Left, Right, Icon, Title } from "native-base";
import CommonHeader from '../../components/SideBar/CommonHeader';

export default class TensPracticeExerises extends React.Component {

    render() {
        return (
            <Container>
                <CommonHeader {...this.props} />

                <Content padder>
                    <Text>Tens Practice Exercises</Text>
                </Content>
            </Container>
        );
    }
}

TensPracticeExerises.navigationOptions = ({ navigation }) => {
    return {
        header: null
    };
};
