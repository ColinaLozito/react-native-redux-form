import { StyleSheet } from 'react-native';
import colors from '../../../constants/Colors';

export default StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: colors.darkGrey,
    },
    label: {
        fontSize: 14,
        color: colors.white,
    },
});
