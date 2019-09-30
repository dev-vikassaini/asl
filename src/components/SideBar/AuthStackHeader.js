import React from "react";
import {
    Button, Text, Container, Card, CardItem, Body, Content, Title, Header, Badge, Left, Icon, Right
} from "native-base";
import { Image, ImageBackground } from 'react-native';
import { configConstants } from '../../constants/config.constant';

class AuthStackHeader extends React.Component {
    
    render() {
        const isLogin = this.props.navigation.state.routeName == "Login" ? false : true;

        return (
            <ImageBackground source={configConstants.headerBg} style={{ width: "100%" }}>
                <Header style={{
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                    marginTop: 0
                }}>
                    {isLogin && <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="md-arrow-back" />
                        </Button>
                    </Left>
                    }
                    <Body>
                        <Title>{this.props.navigation.state.routeName || ''}</Title>
                    </Body>
                </Header>
            </ImageBackground>
        );
    }
}

export default AuthStackHeader;