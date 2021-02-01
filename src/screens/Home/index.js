import React, { useContext } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Header, Button, StatusBorder, StatusLabel, Context } from '../../components'
import literals from './literals'
import styles from './styles'

export default function Home(props) {
    const [state, setState] = useContext(Context)

    const { status, photo } = state

    function handleOnTakePicture() {
        setState({ ...state, takePicture: true })
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Scan your ID</Text>
                <Text style={styles.description}>Take a picture. It may take time to validate your personal information</Text>
            </View>
            <StatusBorder status={status}>
                <ImageBackground imageStyle={{ borderRadius: 18 }} style={{ width: 300, height: 200, alignItems: 'center', justifyContent: 'center' }} source={photo ? { uri: photo.uri } : require('../../../assets/images/id-card.png')}>
                    {status !== 'accepted' && <Button title={status ? literals.buttonTitle[status] : literals.buttonTitle.pending} onPress={handleOnTakePicture} />}
                    {photo && <StatusLabel status={status} />}
                </ImageBackground>
            </StatusBorder>
        </View>
    )
}