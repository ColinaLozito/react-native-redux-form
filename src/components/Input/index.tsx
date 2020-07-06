import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

interface Props {
    type?: string,
    editable?: boolean,
    label: string,
    warn?: boolean,
    onChange?: (text: string) => void | undefined | null,
}

const Input: React.FC<Props> = ({ type, editable, label, onChange, warn }: Props): any => {
    const [text, setText] = useState<string>('');

    const onChangeField = (t: string) => {
        console.log(t);
        setText(t);
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
                    defaultValue={text}
                    editable={editable}
                    selectTextOnFocus={editable}
                    keyboardType={keyboardType()}
                    maxLength={maxInputLengh()}
                />
            </View>
        </View>
    );
};

Input.defaultProps = {
    type: 'text',
    editable: true,
    label: 'input',
    warn: false,
    onChange: () => null,
};

export default Input;
