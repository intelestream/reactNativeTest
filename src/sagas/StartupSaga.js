import { put } from 'redux-saga/effects'
import UserActions from 'src/stores/user/Actions'
import * as RootNavigation from 'src/services/NavigationService'

export function* start()
{
    yield put(UserActions.FETCH_USER())

    setTimeout(()=>{RootNavigation.navigateAndReset('LoginScreen')}, 5000)
}