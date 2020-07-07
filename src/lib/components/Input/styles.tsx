import { StyleSheet } from 'react-native';
import colors from '../../../constants/Colors';

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    title: {
        color: colors.darkGrey,
        fontSize: 10,
    },
    inputWrapper: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputBox: {
        height: '100%',
        width: '85%',
        alignItems: 'center',
        fontSize: 18,
    },
    phonePrefix: {
        color: colors.darkGrey,
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: '3%',
    },
    regular: {
        backgroundColor: colors.white,
    },
    warn: {
        backgroundColor: colors.errorLight,
    },

});
