import { createStackNavigator } from "react-navigation";
import IntermediateScreen from "./IntermediateScreen";
import ViewIntermediate from "./ViewIntermediate";

const IntermediateDrawNav = createStackNavigator(
    {
        Intermediate: { screen: IntermediateScreen },
        ViewIntermediate: { screen: ViewIntermediate }
    },
    {
        initialRouteName: "Intermediate"
    }
);
export default IntermediateDrawNav