import * as React from 'react'
import { Text, View } from 'react-native'
import { Helpers } from 'src/theme'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'

const SplashScreen = () => {
    return (
        <SafeAreaView 
            style={[Helpers.fill,]}
            edges={['top']}
        >
            <View 
                style={[Helpers.fill,]}
            >
                
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen