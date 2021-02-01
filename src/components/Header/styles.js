import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: colorPalette.secondary,
    },
    title: {
        marginLeft: 20,
        color: colorPalette.primary,
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
})

export default styles