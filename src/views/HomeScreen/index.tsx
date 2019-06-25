import React from "react";

// import MainScreenNavigator from "../ChatScreen/index";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "../ProfileScreen/index";
import SideBar from '../../components/SideBar/SideBar'
import BasicScreen from '../BasicScreen/index';
import IntermediateScreen from '../IntermediateScreen/index';
import AdvancedScreen from '../AdvancedScreen/index';
import PracticeScreenNavigator from '../PracticeScreen'

import { createDrawerNavigator, createAppContainer } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Basic: { screen: BasicScreen },
    Intermediate: { screen: IntermediateScreen },
    Advance: { screen: AdvancedScreen },
    Practice: { screen: PracticeScreenNavigator },
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export const AppContainer = createAppContainer(HomeScreenRouter);

