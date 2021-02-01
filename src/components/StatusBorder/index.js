import React from 'react'
import { View } from 'react-native'
import styles from './styles'

export default function StatusBorder({ children, status }) {
    return (
        <View style={[ styles.container, styles[status] ]}>
            {children}
        </View>
    )
}