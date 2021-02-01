import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorPalette.primary,
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 50,
        shadowColor: colorPalette.primary,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
    },
    title: {
        color: colorPalette.buttonText,
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default styles