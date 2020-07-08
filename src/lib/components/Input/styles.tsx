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
        fontSize: 18,
        marginRight: '4%',
    },
    regular: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
    },
    valid: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGreen,
    },
    warn: {
        borderBottomWidth: 1,
        borderBottomColor: colors.errorLight,
    },
    errorMessage: {
        color: colors.errorLight,
        fontSize: 12,
    },
    validMessage: {
        color: colors.lightGreen,
        fontSize: 12,
    },

});
