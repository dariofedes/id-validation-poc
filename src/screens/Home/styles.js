import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorPalette.lightBackground,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 30,
        paddingHorizontal: 50,
    },
    title: {
        marginBottom: 16,
        color: colorPalette.darkText,
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        color: colorPalette.darkText,
        textAlign: 'center',
    },
})

export default styles