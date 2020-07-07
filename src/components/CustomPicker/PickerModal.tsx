import React from 'react';
import {
    Modal,
    TouchableWithoutFeedback,
    Text,
    View,
    Picker,
} from 'react-native';
import styles from './styles';

interface Props {
    visible: boolean,
    items: Array<any>
    value: string,
    setVisible: (visible: boolean) => any,
    onSelect: ((select: string) => any)
}

const PickerModal: React.FC<Props> = ({ visible, setVisible, onSelect, items, value }: Props) => {

    const onSelectOption = (country: string) => {
        onSelect(country);
    };

    const exitButton = () => (
        <View style={styles.buttonContainer}>
            <Text
                style={styles.done}
                onPress={() => setVisible(false)}
            >
                Done
            </Text>
        </View>
    );

    const pickerList = () => (
        <Picker
            selectedValue={value}
            onValueChange={onSelectOption}
        >
            {items.map((i, index) => (
                <Picker.Item
                    key={index}
                    label={i.label}
                    value={i.value}
                />
            ))}
        </Picker>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <TouchableWithoutFeedback
                onPress={() => setVisible(true)}
            >
                <View style={styles.modalContainer}>
                    {exitButton()}
                    <View style={styles.picker}>
                        {pickerList()}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

PickerModal.defaultProps = {
    onSelect: () => { },
};

export default PickerModal;
