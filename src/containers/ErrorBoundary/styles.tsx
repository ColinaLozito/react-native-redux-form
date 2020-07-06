import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        color: colors.error,
    }
});
