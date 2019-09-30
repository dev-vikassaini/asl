import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Content, Item, Input, Icon, View, Text, Button } from 'native-base';

import { scaleVertical } from "../../utilities/scale";
import { configConstants } from '../../constants/config.constant';
import styleVersion from '../../styles/styles.version';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'asl@gmail.com',
            password: 'admin'
        };
    }

    loginRequest = async () => {
        const { email, password } = this.state;
        if (email === 'asl@gmail.com' && password === 'admin') {
            const user = {
                Email: email,
                FirstName: "Vikas Saini",
                Phone: "9650715288"
            }
            await AsyncStorage.setItem('userDetails', JSON.stringify(user));
            this.props.navigation.navigate('App');
        } else {
            Alert.alert('This user does not exist.');
        }
    }

    render() {
        const renderIcon = () => (
            <Image
                style={styles.image}
                source={configConstants.aslLogo}
            />
        );

        return (
            <Container>
                <Content padder>
                    <View style={styles.header}>{renderIcon()}</View>
                    <View style={styles.all}>
                        <Item regular>
                            <Icon name='md-mail' />
                            <Input placeholder='Email'
                                keyboardType="email-address"
                                value={this.state.email}
                                autoCorrect={false}
                                onChangeText={(text) => this.setState({ email: text })} />
                        </Item>
                        <Item regular style={styles.inputItem}>
                            <Icon name='md-unlock' />
                            <Input placeholder='Password' secureTextEntry={true}
                                value={this.state.password}
                                autoCorrect={false}
                                onChangeText={(text) => this.setState({ password: text })} />
                        </Item>

                        <Button full iconRight style={styles.inputItem} onPress={this.loginRequest}>
                            <Text>LOGIN</Text>
                        </Button>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.textRow}>
                            <Text style={styles.textStyle}>
                                Forgot your password? <Text style={styles.textLink} onPress={() => this.props.navigation.navigate("ForgotPassword")}>Reset Password</Text> </Text>
                        </View>
                        <View style={styles.textRow}>
                            <Text style={styles.textStyle}>
                                Don&rsquo;t have an account? <Text style={styles.textLink} onPress={() => this.props.navigation.navigate("Registration")}>Sign up now</Text></Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Login;

Login.navigationOptions = ({ navigation }) => {
    return {
        header: null
    };
};


const styles = StyleSheet.create({
    header: {
        marginTop: styleVersion.m20,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: scaleVertical(100),
        resizeMode: "contain"
    },
    all: {
        marginTop: scaleVertical(24),
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: styleVersion.m8,
        paddingVertical: scaleVertical(12)
    },
    inputItem: {
        marginTop: styleVersion.m10
    },
    footer: {
        justifyContent: "space-between",
        marginTop: scaleVertical(28),
        paddingHorizontal: styleVersion.m8,
        paddingVertical: scaleVertical(12)
    },
    textRow: {
        flexDirection: "row",
        justifyContent: "center"
    },
    textStyle: {
        color: "#484848",
        fontSize: 18,
        marginTop: styleVersion.m8
    },
    textLink: {
        color: "#305edb",
        fontSize: 18,
        marginTop: styleVersion.m8
    }
});
