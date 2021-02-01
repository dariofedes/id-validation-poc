import React, { useState } from 'react'
import { SafeAreaView, StatusBar, Alert } from 'react-native'
import { Home, IDPictureCapturer } from './src/screens'
import { Context, useContextProvider } from './src/components'
import { validateIDPicture } from './src/logic'
import { colorPalette } from './src/utils'

export default function App(props) {
	const [takePicture, setTakePicture] = useState(false)
	const [photo, setPhoto] = useState()
	const [status, setStatus] = useState('pending')

	async function handleOnCameraReady(camera) {
        try {
            let accepted

            do {
                const photo = await camera.takePictureAsync()

                setPhoto(photo)
                
                accepted = await validateIDPicture(photo.uri)

                setStatus(accepted ? 'accepted' : 'rejected')

                if(accepted) break
            } while(takePicture)

            setTimeout(() => {
                setTakePicture(false)
            }, 1000);
        }catch(error) {
            setTakePicture(false)
            Alert('An error occurred, please try again')
        }
    }

	function handleOnTakePicture() {
		setStatus('pending')
        setTakePicture(true)
    }

    function handleOnCancel() {
        setTakePicture(false)
    }

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: takePicture ? colorPalette.darkBacground : colorPalette.lightBackground }}>
			<StatusBar barStyle='dark-content' hidden={takePicture} />
			{takePicture && 
				<IDPictureCapturer onCameraReady={handleOnCameraReady} onCancel={handleOnCancel} status={status} /> ||
				<Home status={status} photo={photo} onTakePicture={handleOnTakePicture} />
			}
		</SafeAreaView>
	)
}