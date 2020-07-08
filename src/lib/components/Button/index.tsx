import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
    label: string,
    onSubmit: (() => any),
    disabled?: boolean,
}

const Button: React.FC<Props> = ({ label, onSubmit, disabled }) => (
    <TouchableOpacity
        onPress={onSubmit}
        disabled={disabled}
        style={styles.button}
    >
        <Text style={styles.label}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
);

Button.defaultProps = {
    disabled: false,
};

export default Button;
