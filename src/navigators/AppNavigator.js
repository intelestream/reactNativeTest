
import * as React from 'react'
import { Colors } from 'src/theme'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'src/screens/Login'
import SplashScreen from 'src/screens/Splash'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="SplashScreen"
            headerMode="screen"
            screenOptions={{
                headerTintColor:'white',
                headerStyle: { backgroundColor: Colors.primary},
            }}
        >

            <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="LoginScreen" 
                component={LoginScreen}
                options={{ title: 'Login', headerTitleAlign: 'center'}}
            />
            
        </Stack.Navigator>
    )
}

export default AppNavigator