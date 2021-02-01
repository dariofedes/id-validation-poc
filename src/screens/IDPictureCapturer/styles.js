import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorPalette.darkBacground,
        width: '100%',
        height: '100%',
        paddingVertical: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        marginBottom: 16,
        color: colorPalette.ligthText,
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        color: colorPalette.ligthText,
        textAlign: 'center',
    },
    cancel: {
        color: colorPalette.ligthText,
        fontSize: 20,
    },
})

export default styles