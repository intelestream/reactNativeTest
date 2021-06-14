import * as React from 'react'
import { View } from 'react-native'
import { Helpers } from 'src/theme'
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from "react-redux";

import * as RootNavigation from 'src/services/NavigationService'
import UserActions from 'src/stores/user/Actions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Styles from './stylesheet'
import Credentials from '../../components/credentials';

const LoginScreen = () => {
    const dispatch = useDispatch();

    const submit = (login) => {
        dispatch(UserActions.USER_LOGIN(login));
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
                        submitLabel="Login"
                        onSubmit={(login) => {
                            submit(login);
                        }} 
                    />

                    <View style={{height:16}}/>

                    <Button
                        title='Register'
                        raised={true}
                        buttonStyle={[Styles.registerButtonStyle]}
                        onPress={() => {
                            RootNavigation.navigate('RegisterScreen')
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}


export default LoginScreen
