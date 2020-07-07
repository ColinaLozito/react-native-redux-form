import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

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
        position: 'relative',
    },
    inputBox: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        fontSize: 18,
    },
    regular: {
        backgroundColor: colors.white,
    },
    warn: {
        backgroundColor: colors.errorLight,
    },
    touchable: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: colors.lightGrey,
        height: 30,
        paddingRight: 15,

    },
    picker: {
        backgroundColor: colors.white,
    },
    done: {
        color: 'blue'
    }
});
