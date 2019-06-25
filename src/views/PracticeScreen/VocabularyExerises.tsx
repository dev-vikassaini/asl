import React from "react";
import { Button, Text, Container, Body, Content, Header, Left, Right, Icon, Title } from "native-base";

export default class VocabularyExerises extends React.Component<any, any> {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Vocabulary Exerises</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Text>Vocabulary Exerises</Text>
                </Content>
            </Container>
        );
    }
}
