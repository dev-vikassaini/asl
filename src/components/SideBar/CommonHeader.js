import React from "react";
import {
    Button, Body, Title, Header, Left, Icon, Right
} from "native-base";
import { ImageBackground } from 'react-native';
import { configConstants } from '../../constants/config.constant';


class CommonHeader extends React.Component {
    render() {
        return (
            <ImageBackground source={configConstants.headerBg} style={{ width: "100%" }}>
                <Header style={{
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                    marginTop: 0
                }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.navigation.state.routeName || ''}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="heart" />
                        </Button>
                        <Button transparent onPress={() => this.props.navigation.navigate("Notification")}>
                            <Icon name="md-notifications" />
                        </Button>
                        <Button transparent>
                            <Icon name="md-notifications" />
                        </Button>
                    </Right>
                </Header>
            </ImageBackground>
        );
    }
}
export default CommonHeader;