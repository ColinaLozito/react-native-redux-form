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
}

const CustomPicker: React.FC<Props> = ({ items, label, warn }): any => {
    const [visible, setVisible] = useState<boolean>(false);
    const [labelSelected, setLabelSelected] = useState<string>('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.inputBox, warn ? styles.warn : styles.regular]}
                    placeholder={label}
                    editable={false}
                    defaultValue={labelSelected}
                />
                <TouchableOpacity style={styles.touchable} onPress={() => setVisible(true)} />
            </View>
            <PickerModal
                visible={visible}
                value={labelSelected}
                setVisible={setVisible}
                items={items}
                onSelect={setLabelSelected}
            />
        </View>
    );

};

export default CustomPicker;

