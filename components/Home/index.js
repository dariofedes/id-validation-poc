import React, { useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Header, IdImage, Button, TakePicture } from '../'
import { validateIDPicture } from '../../logic'
import styles from './styles'

export default function Home(props) {
    const [photo, setPhoto] = useState()
    const [accepted, setAccepted] = useState(false)
    const [takePicture, setTakePicture] = useState(false)

    async function handleOnCameraReady(camera) {
        try {
            let accepted

            do {
                const photo = await camera.takePictureAsync()

                setPhoto(photo)
                
                accepted = await validateIDPicture(photo.uri)

                setAccepted(accepted)
                if(accepted) setTakePicture(false)
            } while(takePicture)
        }catch(error) {
            setTakePicture(false)
            Alert('An error occurred, please try again')
        }
    }

    function handleOnTakePicture() {
        setTakePicture(true)
    }

    function handleOnCancell() {
        setTakePicture(false)
    }

    return <View style={styles.container}>
        {!takePicture && <>
            <Header />
            <Text style={styles.title}>Scan your ID</Text>
            <Text style={styles.description}>Take a picture. It may take time to validate your personal information</Text>
            <IdImage photo={photo} accepted={accepted} onTakePicture={handleOnTakePicture} />
        </>}
        {takePicture && <TakePicture onCameraReady={handleOnCameraReady} onCancell={handleOnCancell} />}
    </View>
}