import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import csp from '../fixtures/csp.json'
import operator from '../fixtures/operator.json'
import editorial from '../fixtures/editorial.json'
import country from '../fixtures/country.json'
import billingId from '../fixtures/roles.json'
import services from '../fixtures/services.json'
import setting from '../fixtures/setting.json'
import subscription from '../fixtures/subscription.json'
import subscriptionsHistory from '../fixtures/subscriptionsHistory.json'
import billingTransaction from '../fixtures/billingTransaction.json'
import servicePrice from '../fixtures/servicePrice.json'
import verticalreporting from '../fixtures/verticalreporting.json'
import {login, user, logout} from '../fixtures/auth'

const mock = new MockAdapter(axios, {delayResponse: 300})
const success = {success: true}

mock
  .onPost('/api/auth/login').reply(() => [200, login])
  .onPost('/api/auth/logout').reply(() => [200, logout])
  .onGet('/api/auth/user').reply(() => [200, user])
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])

  .onGet('/cp').reply(() => [200, csp])
  .onGet('/operator').reply(() => [200, operator])
  .onGet('/country').reply(() => [200, country])
  .onGet('/editorial').reply(() => [200, editorial])
  .onGet('/settings').reply(() => [200, setting])
  .onGet('/subscription').reply(() => [200, subscription])
  .onGet('/subscriptionsHistory').reply(() => [200, subscriptionsHistory])
  .onGet('/service').reply(() => [200, services])
  .onGet('/billingid').reply(() => [200, billingId])
  .onGet('/reporting').reply(() => [200, verticalreporting])
  .onGet('/billing_transaction').reply(() => [200, billingTransaction])
  .onGet('/service_billingid').reply(() => [200, servicePrice])

  // .onGet('/profile').reply(() => [200, {user: 'Quattordici', role: 'reporting_cp', logged: true}])

  .onGet('/logout').reply(() => [200, {user: null, role: 'admin', loggedIn: false}])
  .onGet('http://localhost:8080/monitor').reply(() => [200, {user: null, role: 'admin', loggedIn: true}])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

let cpCounter = csp.cps.length
let operatorCounter = operator.operators.length
// let billingCounter = billing.billingids.length
let servicesCounter = services.services.length
// let servicePriceCounter = servicePrice.service_billingids.length

mock
  .onPost('/res/cp').reply(() => [200, ++cpCounter])
  .onPost('/res/operator').reply(() => [200, ++operatorCounter])
  .onPost('/res/service').reply(() => [200, ++servicesCounter])

for (let i = 0; i < 20; i++) {
  mock
    .onPost(`/res/put/country/${i}`).reply(() => [200, 'ok'])
    .onPost(`/res/del/country/${i}`).reply(() => [200, success])

    .onPost(`/res/put/cp/${i}`).reply(() => [200, 'ok'])
    .onPost(`/res/del/cp/${i}`).reply(() => [200, success])

    .onPost(`/res/put/operator/${i}`).reply(() => [200, 'ok'])
    .onPost(`/res/del/operator/${i}`).reply(() => [200, success])

    .onPost(`/res/put/service/${i}`).reply(() => [200, 'ok'])
    .onPost(`/res/del/service/${i}`).reply(() => [200, success])

    .onPost(`/res/put/billingid/${i}`).reply(() => [200, 'ok'])
    .onPost(`/res/del/billingid/${i}`).reply(() => [200, success])

    .onPost(`/res/put/settings/${i}`).reply(() => [200, 'ok'])
    .onPost(`/res/del/settings/${i}`).reply(() => [200, success])
}

export default 'mock'
