import React, { useContext, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { StatusBorder, Camera, Context } from '../../components'
import { validateIDPicture } from '../../logic'
import styles from './styles'

export default function IDPictureCapturer(props) {
    const [state, setState] = useContext(Context)

    const { takePicture, status } = state

    useEffect(() => {
        setState({ ...state, status: 'pending' })
    }, [])

    async function handleOnCameraReady(camera) {
        const _state = { ...state }

        try {
            let accepted, photo

            do {
                photo = await camera.takePictureAsync()

                _state.photo = photo
                setState({ ..._state, photo })
                
                accepted = await validateIDPicture(photo.uri)

                _state.status = accepted ? 'accepted' : 'rejected'
                setState({..._state, status: accepted ? 'accepted' : 'rejected' })

                if(accepted) break
            } while(takePicture)

            setTimeout(() => {
                _state.takePicture = false
                setState({ ..._state, takePicture: false })
            }, 1000);
        }catch(error) {
            setState({ ..._state, takePicture: false })
            Alert('An error occurred, please try again')
        }
    }

    function handleOnCancell() {
        setState({ ...state, takePicture: false })
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Take picture</Text>
                <Text style={styles.description}>Fit your ID card inside the frame. The picture will be taken automatically.</Text>
            </View>
            <StatusBorder status={status}>
                <Camera onCameraReady={handleOnCameraReady} />
            </StatusBorder>
            <Text style={styles.cancel} onPress={handleOnCancell}>CANCEL</Text>
        </View>
    )
}