import * as React from 'react'
import { View } from 'react-native'
import { Colors, Helpers } from 'src/theme'
import { Input, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from "react-redux";

import * as RootNavigation from 'src/services/NavigationService'
import UserActions from 'src/stores/user/Actions'
import { Validator } from 'src/utils'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Styles from './stylesheet'

const LoginScreen = () => {
    const dispatch = useDispatch();

    const [login, setLogin] = React.useState({})
    const [emailVaildationError, setEmailValidationError] = React.useState("")
    const [passwordValidationError, setPasswordValidationError] = React.useState("")
  
    const emailRef = React.createRef()
    const passwordRef = React.createRef()

    const submit = () => {
        const validLogin = Validator.validateEmail(login.username)
        const validPassword = !Validator.isStringBlank(login.password)

        if (validLogin)
            setEmailValidationError("")
        else 
        {
            emailRef.current.shake()
            setEmailValidationError("Please enter a valid email address.")
        }

        if (validPassword)
            setPasswordValidationError("")
        else
        {
            passwordRef.current.shake()
            setPasswordValidationError("Please a valid password.")
        }

        if (validLogin 
            && validPassword)
        {
            dispatch(UserActions.USER_LOGIN(login))
        }
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
                    <Input
                        ref={emailRef}
                        label='Email Address'
                        placeholder='email@address.com'
                        autoCapitalize={'none'}
                        autoCompleteType={'email'}
                        leftIcon={{type:'font-awesome', name:'envelope', size:20}}
                        leftIconContainerStyle={{paddingRight:12}}
                        onChangeText={text => {setLogin({...login, username: text})}}
                        errorMessage={emailVaildationError}
                    />

                    <Input
                        ref={passwordRef}
                        label='Password'
                        placeholder='Password'
                        autoCapitalize={'none'}
                        autoCompleteType={'password'}
                        leftIcon={{type:'font-awesome', name:'lock', size:24}}
                        leftIconContainerStyle={{paddingRight:16}}
                        secureTextEntry={true}
                        onChangeText={text => {setLogin({...login, password: text})}}
                        errorMessage={passwordValidationError}
                    />    
                    
                    <Button
                        title='Login'
                        raised={true}
                        buttonStyle={[Styles.loginButtonStyle]}
                        onPress={() => {
                            submit()
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
