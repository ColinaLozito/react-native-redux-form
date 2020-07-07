import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import PickerModal from './PickerModal';

import styles from './styles';

interface Props {
    items: Array<any>
    label: string,
    warn: boolean,
    type: string,
    value: string,
    handleFormValueChange: (type: string, inputValue: string) => any,
}

const CustomPicker: React.FC<Props> = ({ items, label, warn, type, value, handleFormValueChange }): any => {
    const [visible, setVisible] = useState<boolean>(false);

    const onLabelSelect = (inputValue: string) => {
        handleFormValueChange(type, inputValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.inputBox, warn ? styles.warn : styles.regular]}
                    placeholder={label}
                    editable={false}
                    defaultValue={value}
                />
                <TouchableOpacity style={styles.touchable} onPress={() => setVisible(true)} />
            </View>
            <PickerModal
                visible={visible}
                value={value}
                setVisible={setVisible}
                items={items}
                onSelect={onLabelSelect}
            />
        </View>
    );

};

export default CustomPicker;

