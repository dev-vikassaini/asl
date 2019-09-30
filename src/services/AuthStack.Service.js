import AsyncStorage from '@react-native-community/async-storage';

export const USER_KEY = "user-details";

export const onSignIn = (user) => AsyncStorage.setItem(USER_KEY, user);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};
