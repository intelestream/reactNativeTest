import { takeLatest, all, take } from 'redux-saga/effects'

//Actions
import { StartupTypes } from 'src/stores/startup/Actions'
import { UserTypes } from 'src/stores/user/Actions'

//Sagas
import { start } from './StartupSaga'
import { login } from './UserSaga'

export function* rootSaga() {
    yield all([
        takeLatest(StartupTypes.STARTUP, start),
        takeLatest(UserTypes.USER_LOGIN, login),
    ])
}
