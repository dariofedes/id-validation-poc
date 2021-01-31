import React from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './styles'


export default function Header(props) {
    return <View style={styles.container}>
        <Text style={styles.title}>BankClient</Text>
    </View>
}