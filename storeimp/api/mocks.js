import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import users from '../fixtures/users.json'
import roles from '../fixtures/roles.json'
import clicks from '../fixtures/clicks.json'
import usersRoles from '../fixtures/usersRoles.json'
import usersBrandsChannels from '../fixtures/usersBrandsChannels.json'
import landingPages from '../fixtures/landingPages.json'
import brandLandingPages from '../fixtures/brandLandingPages.json'
import {login, user, logout} from '../fixtures/auth'

const mock = new MockAdapter(axios, {delayResponse: 300})
const success = {success: true}

mock
  .onPost('/api/auth/login').reply(() => [200, login])
  .onPost('/api/auth/logout').reply(() => [200, logout])
  .onGet('/api/auth/user').reply(() => [200, user])
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])

  .onGet('/brandLandingPages').reply(() => [200, brandLandingPages])
  .onGet('/users').reply(() => [200, users])
  .onGet('/clicks').reply(() => [200, clicks])
  .onGet('/roles').reply(() => [200, roles])
  .onGet('/usersRoles').reply(() => [200, usersRoles])
  .onGet('/landingPages').reply(() => [200, landingPages])
  .onGet('/usersBrandsChannels').reply(() => [200, usersBrandsChannels])


  .onGet('/logout').reply(() => [200, {user: null, role: 'admin', loggedIn: false}])
  .onGet('http://localhost:8080/monitor').reply(() => [200, {user: null, role: 'admin', loggedIn: true}])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
