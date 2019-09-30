import React, { Component } from "react";
import { Accordion, Container, Content} from "native-base";
import { StyleSheet, Text } from 'react-native';

import CommonHeader from '../../components/SideBar/CommonHeader';

class BasicScreen extends Component {

    basicEnglish() {
        const dataArray = [
            { title: "BASIC ENGLISH", content: <Text style={styles.justifyContent}>Let’s study Basic English, why should we know or learn Basic English? 
                It’s a big question. The simple answer to this question is that we learn English from the grassroots by studying basic grammar. 
                {"\n"}{"\n"} A.K. Tyagi
                {"\n"}{"\n"} Q.- Why have you gotten admission at ASL? आपने ASL म, admission -य/ 0लया ?
                {"\n"}Ans.- We’ve come here to improve our communication skills.</Text>
                
                },
            { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
            { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
        ];
        return dataArray;
    }

    render() {

        return (
            <Container>
                <CommonHeader {...this.props} />
                <Content padder>
                    <Accordion
                        dataArray={this.basicEnglish()}
                        icon="add"
                        expandedIcon="remove"
                        iconStyle={styles.iconStyle}
                        expandedIconStyle={styles.expandedIconStyle}
                        contentStyle={styles.contentStyle}
                    />
                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    contentStyle: {
        backgroundColor: '#fff'
    },
    expandedIconStyle: {
        color: "red"
    },
    iconStyle: {
        color: "green"
    },
    justifyContent: {
        flex: 1, 
        flexWrap: 'wrap'
    }
  });
  
export default BasicScreen;

BasicScreen.navigationOptions = ({ navigation }) => {
    return {
        header: null
    };
};