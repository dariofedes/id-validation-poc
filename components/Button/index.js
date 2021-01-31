import React from 'react'
import {
    Pressable,
    Text,
} from 'react-native'
import styles from './styles'


export default function Button({ onPress, title }) {
    return <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.title} testID="buttonTitle">{title}</Text>
    </Pressable>
}