import React, { useContext, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { StatusBorder, Camera, Context } from '../../components'
import { validateIDPicture } from '../../logic'
import styles from './styles'

export default function IDPictureCapturer({ onCameraReady, status, onCancel }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Take picture</Text>
                <Text style={styles.description}>Fit your ID card inside the frame. The picture will be taken automatically.</Text>
            </View>
            <StatusBorder status={status}>
                <Camera onCameraReady={onCameraReady} />
            </StatusBorder>
            <Text style={styles.cancel} onPress={onCancel}>CANCEL</Text>
        </View>
    )
}