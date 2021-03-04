import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList,
  TouchableNativeFeedbackBase
} from 'react-native';

import {
    Input,
    Card,
    Button
} from 'react-native-elements'

export default function AppGoogleLogin(params: Array<Array<any>>) {

    const [emailAddress, setemailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [SignUpErrors, setSignUpErrors] = useState({});

    //const { signUp, signIn } = useContext(AuthContext); // should be signUp


    const handleSignUp = () => {
        // https://indicative.adonisjs.com
        const rules = {
            email: 'required|email',
            password: 'required|string|min:6|max:40|confirmed'
        };

        const data = {
            email: emailAddress,
            password: password,
            password_confirmation: passwordConfirm
        };



        /*validateAll(data, rules, messages)
            .then(() => {
                console.log('success sign in');
                signUp({ emailAddress, password });
            })
            .catch(err => {
                const formatError = {};
                err.forEach(err => {
                    formatError[err.field] = err.message;
                });
                setSignUpErrors(formatError);
            });*/
    };


    return(
        <View style={{ paddingVertical: 20 }}>
            <Card>
                <Input
                    label={'Email'}
                    placeholder="Email address..."
                    value={emailAddress}
                    onChangeText={setemailAddress}
                    errorStyle={{ color: 'red' }}
                />
                <Input
                    label={'Password'}
                    placeholder="Password.."
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Input
                    label={'Password Confirm'}
                    placeholder="Enter password again"
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    secureTextEntry
                />
                

                <Button
                    buttonStyle={{ margin: 10, marginTop: 35 }}
                    title="SIGN UP"
                    onPress={() => handleSignUp()}
                />
            </Card>
        </View>
    )
}
/*

errorMessage={SignUpErrors ? SignUpErrors.email : null}

errorMessage={SignUpErrors ? SignUpErrors.password : null}

backgroundColor="#03A9F4"

<Text style={{ color: 'red', marginLeft: 10, fontSize: 10 }}>
                    {SignUpErrors ? SignUpErrors.password : null}
                </Text>

const messages = {
    required: field => `${field} is required`,
    'username.alpha': 'Username contains unallowed characters',
    'email.email': 'Please enter a valid email address',
    'password.min':
        'Password is too short. Must be greater than 6 characters',
    'password.confirmed': 'Passwords do not match'
};
*/