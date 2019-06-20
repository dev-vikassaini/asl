import React from "react";
import LucyChat from "./LucyChat";
import JadeChat from "./JadeChat";
import NineChat from "./NineChat";
import { createBottomTabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Footer,
  FooterTab
} from "native-base";

const MainScreenNavigator = createBottomTabNavigator(
  {
    LucyChat: { screen: (props: any) => <LucyChat {...props} /> },
    JadeChat: { screen: (props: any) => <JadeChat {...props} /> },
    NineChat: { screen: (props: any) => <NineChat {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}
            >
              <Icon name="bowtie" />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}
            >
              <Icon name="briefcase" />
              <Text>Nine</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}
            >
              <Icon name="headset" />
              <Text>Jade</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);
export default MainScreenNavigator;