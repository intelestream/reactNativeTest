import { combineReducers } from 'redux'
import configureStore from './CreateStore.js'
import { rootSaga } from 'src/sagas'
import { reducer as UserReducer } from './user/Reducers'

export default () => {
    const rootReducer = combineReducers({
         user: UserReducer,
    })

    return configureStore(rootReducer, rootSaga)
}