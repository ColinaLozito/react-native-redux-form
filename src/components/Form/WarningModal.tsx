import React from 'react';
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

interface Props {
    visible: boolean,
    setShowErrorModal: (show: boolean) => any
}

const WarningModal = ({ visible, setShowErrorModal }: Props) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
    >
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => setShowErrorModal(false)}
            style={styles.modalBox}>
            <View style={styles.modalContent}>
                <Text style={styles.modalItem}>- All fields are required</Text>
                <Text style={styles.modalItem}>- All fields most be valid</Text>
            </View>
        </TouchableOpacity>
    </Modal>
);

export default WarningModal;

