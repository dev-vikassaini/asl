import React from "react";
import { createDrawerNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "../ProfileScreen/index";
import SideBar from '../../components/SideBar/SideBar'
import BasicScreen from '../BasicScreen/index';
import IntermediateScreen from '../IntermediateScreen/index';
import AdvancedScreen from '../AdvancedScreen/index';
import PracticeScreenNavigator from '../PracticeScreen'
import AuthLoadingScreen from '../AuthLoadingScreen/AuthLoadingScreen';
import { AuthStackNavigator } from '../Registration/index';
import NotificationScreen from '../NotificationScreen/NotificationScreen'

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Basic: { screen: BasicScreen },
    Intermediate: { screen: IntermediateScreen },
    Advance: { screen: AdvancedScreen },
    Practice: { screen: PracticeScreenNavigator },
    ProfileScreen: { screen: ProfileScreen },
    Notification: { screen: NotificationScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: HomeScreenRouter,
    Auth: AuthStackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
