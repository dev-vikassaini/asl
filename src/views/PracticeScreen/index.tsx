import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { StyleSheet } from 'react-native';

import TensPracticeExerises from './TensPracticeExerises';
import VocabularyExerises from './VocabularyExerises';
import DailyUseExerises from './DailyUseExerises';
import TranslationStoriesExerises from './TranslationStoriesExerises';

const PracticeScreenNavigator = createBottomTabNavigator(
    {
        Practice: { screen: (props: any) => <TensPracticeExerises {...props} /> },
        Vocabulary: { screen: (props: any) => <VocabularyExerises {...props} /> },
        DailyUse: { screen: (props: any) => <DailyUseExerises {...props} /> },
        Stories: { screen: (props: any) => <TranslationStoriesExerises {...props} /> }
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
                            onPress={() => props.navigation.navigate("Practice")}>
                            <Icon name="md-paper" />
                            <Text style={styles.tabFontSize}>Tense</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 1}
                            onPress={() => props.navigation.navigate("Vocabulary")}>
                            <Icon name="md-help-circle" />
                            <Text style={styles.tabFontSize}>Vocabulary</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 2}
                            onPress={() => props.navigation.navigate("DailyUse")}>
                            <Icon name="md-time" />
                            <Text style={styles.tabFontSize}>Daily Use</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 3}
                            onPress={() => props.navigation.navigate("Stories")}>
                            <Icon name="md-trending-up" />
                            <Text style={styles.tabFontSize}>Stories</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
);
export default PracticeScreenNavigator;

const styles = StyleSheet.create({
    tabFontSize: {
        fontSize: 10
    }
  });