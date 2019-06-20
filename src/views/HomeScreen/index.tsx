import React from "react";

import HomeScreen from "./HomeScreen";
import MainScreenNavigator from "../ChatScreen/index";
import ProfileScreen from "../ProfileScreen/index";
import SideBar from '../../components/SideBar/SideBar'

import { createDrawerNavigator, createAppContainer } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export const AppContainer = createAppContainer(HomeScreenRouter);

