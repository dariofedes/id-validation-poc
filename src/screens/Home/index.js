import React, { useContext } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Header, Button, StatusBorder, StatusLabel, Context } from '../../components'
import literals from './literals'
import styles from './styles'

export default function Home({ status, photo, onTakePicture }) {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Scan your ID</Text>
                <Text style={styles.description}>Take a picture. It may take time to validate your personal information</Text>
            </View>
            <StatusBorder status={status}>
                <ImageBackground imageStyle={{ borderRadius: 18 }} style={styles.idCardImage} source={photo ? { uri: photo.uri } : require('../../../assets/images/id-card.png')}>
                    {status !== 'accepted' && <Button title={literals.buttonTitle[status]} onPress={onTakePicture} />}
                    {photo && <StatusLabel status={status} />}
                </ImageBackground>
            </StatusBorder>
        </View>
    )
}