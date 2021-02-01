import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Camera } from 'expo-camera'
import styles from './styles'

export default function({ onCameraReady }) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    return (
        <View>
            {hasPermission && 
                <Camera style={styles.camera}
                    type={Camera.Constants.Type.back}
                    ref={ref => {
                        this.camera = ref;
                    }}
                    onCameraReady={() => onCameraReady(this.camera)}
                /> ||
                <Text style={styles.noPermission}>No access to camera</Text>
            }
        </View>
    )
            
}