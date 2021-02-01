import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils'

const styles = StyleSheet.create({
    camera: {
        width: 300,
        height: 200,
        overflow: 'hidden',
        borderRadius: 18,
    },
    noPermission: {
        color: colorPalette.ligthText,
        fontSize: 16,
    },
})

export default styles