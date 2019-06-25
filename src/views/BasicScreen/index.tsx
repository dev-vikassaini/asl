import { createStackNavigator } from "react-navigation";
import BasicScreen from "./BasicScreen";
import ViewBasic from "./ViewBasic";

const BasicDrawNav = createStackNavigator(
    {
        Basic: { screen: BasicScreen },
        ViewBasic: { screen: ViewBasic }
    },
    {
        initialRouteName: "Basic"
    }
);
export default BasicDrawNav