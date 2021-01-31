import React from 'react'
import {SafeAreaView} from 'react-native'
import { Home } from './components'

export default function App(props) {
  return <SafeAreaView style={{ flex: 1 }}>
    <Home />
  </SafeAreaView>
}