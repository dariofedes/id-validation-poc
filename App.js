import React, { useContext } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Home, IDPictureCapturer } from './src/screens'
import { Context, useContextProvider } from './src/components'
import { colorPalette } from './src/utils'

export default useContextProvider(function App(props) {
	const [state, setState] = useContext(Context)

	const { takePicture } = state

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: takePicture ? colorPalette.darkBacground : colorPalette.lightBackground }}>
			<StatusBar barStyle='dark-content' hidden={takePicture} />
			{takePicture && 
				<IDPictureCapturer /> ||
				<Home />
			}
		</SafeAreaView>
	)
})