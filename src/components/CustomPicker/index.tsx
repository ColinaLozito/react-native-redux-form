import React, { useState } from 'react';
import {
    Modal,
    TouchableWithoutFeedback,
    Text,
    View,
    Picker,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';


interface Props {
    items: Array<any>
    label: string,
    warn: boolean,
}

const CustomPicker: React.FC<Props> = ({ items, label, warn }): any => {
    const [value, setValue] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);

    const pickerModal = () => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <TouchableWithoutFeedback
                onPress={() => setVisible(true)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.buttonContainer}>
                        <Text
                            style={styles.done}
                            onPress={() => setVisible(false)}
                        >
                            Done
                        </Text>
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={value}
                            onValueChange={(country: string) => {
                                setValue(country)
                            }}
                        >
                            {items.map((i, index) => (
                                <Picker.Item
                                    key={index}
                                    label={i.label}
                                    value={i.value}
                                />
                            ))}
                        </Picker>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.inputBox, warn ? styles.warn : styles.regular]}
                    placeholder={label}
                    editable={false}
                />
                <TouchableOpacity style={styles.touchable} onPress={() => setVisible(true)} />
            </View>
            {pickerModal()}
        </View>
    );

};

export default CustomPicker;

