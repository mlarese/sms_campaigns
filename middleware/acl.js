import axios from 'axios'
import {getSchema} from '../assets/helpers'

export default async function ({route, store, redirect, app}) {
  const token = app.$auth.getToken(getSchema())
  if (token) store.commit('api/setToken', token, {root: true})

  const role = store.getters['app/role']

  if (!route.name) {
    return redirect('/login')
  } else if (route.name !== 'login') {
    if (!store.state.auth.loggedIn) {
      return redirect('/login')
    }

    console.log(route.name)
    if(role!=='Admin') {
      //if(route.name!=='leads' && route.name!=='unpaired')
      //return redirect('/leads')
    }
  }
}
