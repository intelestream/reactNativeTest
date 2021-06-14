import { StyleSheet } from 'react-native'
import { Colors, Helpers } from 'src/theme'

export default StyleSheet.create({
    loginButtonStyle: {
        backgroundColor: Colors.primary,
    },
    scrollViewStyle: {
        ...Helpers.fill, 
        backgroundColor: Colors.white
    },
    scrollViewContentContainerStyle: {
        ...Helpers.mainSpaceBetween,
        backgroundColor: Colors.white, 
        flexGrow: 1
    }
})