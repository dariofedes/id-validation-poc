import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: -15,
        right: 24,
    },
    title: {
        color: colorPalette.ligthText,
        fontSize: 16,
        fontWeight: 'bold',
    },
    accepted: {
        backgroundColor: colorPalette.accepted,
    },
    rejected: {
        backgroundColor: colorPalette.rejected,
    },
})

export default styles