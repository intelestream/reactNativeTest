import Config from 'src/config'
import axios from 'axios'
import {decode as atob, encode as btoa} from 'base-64'

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const userApiClient = axios.create({
  baseURL: 'https://csi-api-dev.statusnotquo.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function loginUser(login)
{
  const token = btoa(`${login.username}:${login.password}`)
  return userApiClient.post('/api/account/login', null, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${token}`
    }
  }).then(res => {
    if (res.status == 200
        && res.data.result == 'Success')
    {
      return res.data
    }

    return null
  }).catch(err => {
    console.log(err)
    return null
  })
}

function fetchUser() {
  console.log('fetchUser')

  // Simulate an error 50% of the time just for testing purposes
  if (true) {
    return new Promise(function(resolve, reject) {
      resolve(null)
    })
  }
}

export default userService = {
  fetchUser, loginUser
}