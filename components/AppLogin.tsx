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



export default function AppGoogleLogin() {

    const [emailAddress, setemailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [SignUpErrors, setSignUpErrors] = useState({});
    //const { signIn, signUp } = useContext(AuthContext);

    const handleSignIn = () => {
        /*// https://indicative.adonisjs.com
        const rules = {
            email: 'required|email',
            password: 'required|string|min:6|max:40'
        };

        const data = {
            email: emailAddress,
            password: password
        };

        const messages = {
            required: field => `${field} is required`,
            'username.alpha': 'Username contains unallowed characters',
            'email.email': 'Please enter a valid email address',
            'password.min': 'Wrong Password?'
        };

        validateAll(data, rules, messages)
            .then(() => {
                console.log('success sign in');
                signIn({ emailAddress, password });
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
        <View>
            <Card>
                <Input
                    label={'Email'}
                    placeholder="Email"
                    value={emailAddress}
                    onChangeText={setemailAddress}
                    errorStyle={{ color: 'red' }}
                    
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    errorStyle={{ color: 'red' }}

                />
                <Button
                    buttonStyle={{ margin: 10, marginTop: 50 }}
                    title="Sign in"
                    onPress={() => handleSignIn()}
                />
                <Text style={{ marginLeft: 100 }} >
                    No Acount? Sign Up
                </Text>
            </Card>
        </View>
    )
}
/*

errorMessage={SignUpErrors ? SignUpErrors.email : null}

errorMessage={SignUpErrors ? SignUpErrors.password : null}


*/