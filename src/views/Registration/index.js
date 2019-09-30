import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";

export const AuthStackNavigator = createStackNavigator(
    {
        Login: { screen: Login },
        Registration: { screen: Registration },
        ForgotPassword: { screen: ForgotPassword }
    },
    {
        initialRouteName: "Login"
    }
);
