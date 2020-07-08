import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export default StyleSheet.create({
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 30,
        justifyContent: 'space-between',
    },
    inputWrapper: {
        width: '100%',
    },
    modalBox: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '70%',
        minHeight: 180,
        padding: 30,
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 7,
    },
    modalItem: {
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10,
        color: colors.errorLight,
    },
});
