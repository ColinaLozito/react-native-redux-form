import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

type KeyboardType = (
    'default' |
    'email-address' |
    'numeric' |
    'phone-pad' |
    'number-pad' |
    'decimal-pad' |
    'visible-password' |
    'ascii-capable' |
    'numbers-and-punctuation' |
    'url' |
    'name-phone-pad' |
    'twitter' |
    'web-search'
)

interface Props {
    value: string,
    type: string,
    label: string,
    valid?: boolean | null,
    maxLength?: any | undefined,
    keyboardType?: KeyboardType | undefined
    ,
    handleFormValidate: (type: string, inputValue: string) => any,
    handleFormValueChange: (type: string, inputValue: string) => any,
}

const Input: React.FC<Props> = ({
    value,
    type,
    label,
    valid,
    maxLength,
    keyboardType,
    handleFormValueChange,
    handleFormValidate,
}: Props): React.ReactElement => {
    const onChangeField = (inputValue: string) => {
        handleFormValueChange(type, inputValue);
    };

    const onInputBlur = () => {
        if (value) {
            handleFormValidate(type, value);
        }
    };

    const validFieldClassSelector = (): any => {
        switch (valid) {
            case true:
                return styles.valid;
            case false:
                return styles.warn;
            default:
                return styles.regular;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <View style={[styles.inputWrapper, validFieldClassSelector()]}>
                {type === 'phone' && (
                    <TextInput
                        style={[styles.phonePrefix]}
                        defaultValue={'+46'}
                        editable={false}
                    />
                )}
                <TextInput
                    style={styles.inputBox}
                    placeholder={label}
                    onChangeText={onChangeField}
                    defaultValue={value}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    onBlur={onInputBlur}
                />
            </View>
            {valid === false &&
                (
                    <Text style={styles.errorMessage}>Please verify this field</Text>
                )}
            {valid === true &&
                (
                    <Text style={styles.validMessage}>Valid field</Text>
                )}
        </View>
    );
};

Input.defaultProps = {
    keyboardType: 'default',
    maxLength: 30,
};

export default Input;
