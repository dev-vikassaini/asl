import React from "react";
import { Alert } from "react-native";

import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from "native-base";
import CommonHeader from '../../components/SideBar/CommonHeader';

export default class Profile extends React.Component {

  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  
  render() {
    return (
      <Container>
        <CommonHeader {...this.props} />
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Goto EditScreen One</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

Profile.navigationOptions = ({ navigation }) => {
  return {
    header: null    
  };
};
