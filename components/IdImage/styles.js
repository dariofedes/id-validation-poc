import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    image: {
        width: 260,
        height: 160,
        borderRadius: 12,
    },
    imageAccepted: {
        borderWidth: 2,
        borderColor: '#69CC8B'
    },
    imageRejected: {
        borderWidth: 2,
        borderColor: '#C00101'
    },
    label: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 16
    },
    labelAccepted: {
        backgroundColor: '#69CC8B'
    },
    labelRejected: {
        backgroundColor: '#C00101'
    }
})

export default styles