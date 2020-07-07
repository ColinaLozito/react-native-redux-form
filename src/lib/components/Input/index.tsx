import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

interface Props {
    value: string,
    type: string,
    label: string,
    warn?: boolean,
    handleFormValueChange: (type: string, inputValue: string) => any,
}

const Input: React.FC<Props> = ({
    value,
    type,
    label,
    warn,
    handleFormValueChange,
}: Props): React.ReactElement => {

    const onChangeField = (inputValue: string) => {
        handleFormValueChange(type, inputValue);
    };

    const keyboardType = () => {
        if (type === 'phone') {
            return 'number-pad';
        }
        if (type === 'ssn') {
            return 'number-pad';
        }
        return 'default';
    };

    const maxInputLengh = () => {
        switch (type) {
            case 'ssn':
                return 10;
            case 'phone':
                return 9;
            default:
                return 35;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.inputWrapper}>
                {
                    type === 'phone' && (
                        <Text style={styles.phonePrefix}>+46</Text>
                    )
                }
                <TextInput
                    style={[styles.inputBox, warn ? styles.warn : styles.regular]}
                    placeholder={label}
                    onChangeText={onChangeField}
                    defaultValue={value}
                    keyboardType={keyboardType()}
                    maxLength={maxInputLengh()}
                />
            </View>
        </View>
    );
};

Input.defaultProps = {
    warn: false,
};

export default Input;
