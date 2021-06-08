import React from 'react'
import { Provider } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'

import createStore from './stores'
import RootScreen from './screens/Root'
import { Colors } from './theme'

const { store, persistor } = createStore()

const baseTheme = {
    ...DefaultTheme,
    dark: false,
    mode: 'exact',
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.primary,
        background: Colors.white,
        surface: Colors.white,
        text: Colors.secondary,
    }
}

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider theme={baseTheme}>
                    <RootScreen/>
                </PaperProvider>
            </PersistGate>
        </Provider>
    )
}

export default App