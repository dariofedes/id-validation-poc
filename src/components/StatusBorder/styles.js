import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils'

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
    },
    accepted: {
        borderWidth: 2,
        borderColor: colorPalette.accepted,
    },
    rejected: {
        borderWidth: 2,
        borderColor: colorPalette.rejected,
    },
})

export default styles