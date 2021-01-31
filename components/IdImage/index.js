import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import { Button } from '../'
import styles from './styles'


export default function IdImage({ photo, accepted, onTakePicture }) {
    return <View style={styles.container}>
        <Image style={[ styles.image, photo ? (accepted ? styles.imageAccepted : styles.imageRejected) : null ]} source={photo ? { uri: photo.uri } : require('../../assets/images/id-card.png') } />
        {photo ? <Text style={[ styles.label, accepted ? styles.labelAccepted : styles.labelRejected ]}>{accepted ? 'ACCEPTED' : 'REJECTED'}</Text> : null}
        {(!photo || !accepted) && <Button style={styles.button} title={photo ? 'RETAKE PICTURE' : 'TAKE PICTURE'} onPress={onTakePicture} />}
    </View>
}