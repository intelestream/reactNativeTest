import * as React from 'react'
import { View } from 'react-native'
import { Helpers } from 'src/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from "react-redux";

import UserActions from 'src/stores/user/Actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Styles from './stylesheet'
import Credentials from '../../components/credentials';

const RegisterScreen = () => {
    const dispatch = useDispatch();

    const submit = (login) => {
        console.log("register submit");
        dispatch(UserActions.USER_REGISTER(login));
    }

    return (
        <SafeAreaView
            edges={['bottom']}
            style={[Helpers.fill, {backgroundColor:'white'}]}
        >
            <KeyboardAwareScrollView 
                style={[Styles.scrollViewStyle]}
                contentContainerStyle={[Styles.scrollViewContentContainerStyle]}
            >
                <View 
                    style={[Helpers.padding24]}
                >
                    <Credentials
                        submitLabel="Register"
                        onSubmit={(login) => {
                            submit(login);
                        }} 
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}


export default RegisterScreen
