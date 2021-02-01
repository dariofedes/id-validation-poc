import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import literals from './literals'
import styles from './styles'

export default function StatusBorder({ status }) {
    return (
        <View style={[ styles.container, styles[status] ]}>
            <Text style={styles.title}><FontAwesome name={literals.icon[status]} size={styles.title.fontSize} /> {literals.title[status]}</Text>
        </View>
    )
}