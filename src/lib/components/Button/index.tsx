import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
    label: string,
    onSubmit: (() => any),
    disabled?: boolean,
    setFormValues: (obj: any) => void
}

const Button: React.FC<Props> = ({ label, onSubmit, disabled, setFormValues }) => {

    const onPressSubmit = () => {
        setFormValues({});
        onSubmit();
    };

    return (
        <TouchableOpacity
            onPress={onPressSubmit}
            disabled={disabled}
            style={styles.button}
        >
            <Text style={styles.label}>{label.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    disabled: false,
};

export default Button;
