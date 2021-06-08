import 'react-native-gesture-handler'

import AppNavigator from 'src/navigators/AppNavigator'
import * as React from 'react'
import { navigationRef, isMountedRef } from 'src/services/NavigationService'
import { View, StatusBar } from 'react-native'
import { useDispatch } from "react-redux";
import { Helpers } from 'src/theme'
import { NavigationContainer } from '@react-navigation/native'
import StartupActions from 'src/stores/startup/Actions'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {Colors} from 'src/theme'

const RootScreen = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        isMountedRef.current = true
        dispatch(StartupActions.STARTUP())
        return () => (isMountedRef = false)
    }, [])

    return (
        <SafeAreaProvider 
            style={Helpers.fill}
        >
            <NavigationContainer 
                ref={navigationRef}
                style={Helpers.fill}
            >
                <StatusBar 
                    barStyle="light-content" 
                    backgroundColor={Colors.primary}
                />
                
                <View 
                    style={Helpers.fill}
                >
                    <AppNavigator/>
                </View>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default RootScreen