import React, { useState, useEffect } from 'react'
import { Pressable, View, Text, Image } from 'react-native'
import { Camera } from 'expo-camera'
import styles from './styles'


export default function TakePicture({ onCancell, onCameraReady }) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera 
                style={styles.camera}
                type={Camera.Constants.Type.back}
                ref={ref => {
                    debugger
                    this.camera = ref;
                  }}
                onCameraReady={() => onCameraReady(this.camera)}
            />
            <Text onPress={onCancell}>CANCELL</Text>
        </View>
    )
}