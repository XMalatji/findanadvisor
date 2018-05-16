import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';

import Splash from './components/Splash'
import Register from './components/Register'
export default class App extends React.Component {
  render () {
    return (
      <Router>
      <Scene key="root">
        <Scene key="splash"
          component={Splash}
          title="Appvisor"
          initial
        />
        <Scene
          key="register"
          component={Register}
          title="Register"
        />
      </Scene>
    </Router>
    )
  }
}
