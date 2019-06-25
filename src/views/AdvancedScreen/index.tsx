import { createStackNavigator } from "react-navigation";
import AdvancedScreen from "./AdvancedScreen";
import ViewAdvanced from "./ViewAdvanced";

const AdvanceDrawNav = createStackNavigator(
    {
        Advanced: { screen: AdvancedScreen },
        ViewAdvanced: { screen: ViewAdvanced }
    },
    {
        initialRouteName: "Advanced"
    }
);
export default AdvanceDrawNav