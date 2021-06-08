import { put, call } from 'redux-saga/effects'

//Redux Actions
import UserActions from 'src/stores/user/Actions'

//Networking / Long Running Tasks
import UserService from 'src/services/UserService'

//Navigation
import * as RootNavigation from 'src/services/NavigationService'

export function* login(params)
{
    yield put(UserActions.USER_LOGGING_IN())
    const loginRequest = yield call(UserService.loginUser, params.payload.login )

    if (loginRequest != null)
    {
        yield put(UserActions.USER_LOGIN_SUCCESS(loginRequest.data.account))

        RootNavigation.navigate("ReactDefault")
    }
    else 
    {
        yield put(UserActions.USER_LOGIN_FAILURE("Unable to log in, check your connection. If you are sure you are connected try Forgot Password."))
    }
}

