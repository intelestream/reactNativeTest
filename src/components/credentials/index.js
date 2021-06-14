import * as React from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { Validator } from 'src/utils'

import Styles from './stylesheet'

/**
 * Reusable component with email and password input fields
 *  - performs validation
 *  - submit calback
 * @param {*} props 
 * @returns 
 */
const Credentials = (props) => {

    const [login, setLogin] = React.useState({})
    const [emailVaildationError, setEmailValidationError] = React.useState("")
    const [passwordValidationError, setPasswordValidationError] = React.useState("")
  
    const emailRef = React.createRef()
    const passwordRef = React.createRef()

    const {onSubmit, submitLabel} = props;

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
            if (onSubmit) {
                onSubmit(login);
            }
        }
    }

    return (
        <View>
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
                title={submitLabel || "Submit"}
                raised={true}
                buttonStyle={[Styles.loginButtonStyle]}
                onPress={() => {
                    submit()
                }}
            />
        </View>
    )
}


export default Credentials
