import React from 'react';
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from '../styles';

interface Props {
    visible: boolean,
    success: boolean,
    setShowErrorModal: (show: boolean) => any
}

const WarningModal = ({ visible, success, setShowErrorModal }: Props) => (
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
                {
                    success ?
                        (
                            <Text style={styles.successMessage}>SUCCESS !!!</Text>
                        ) : (
                            <>
                                <Text style={styles.errorMessage}>- All fields are required</Text>
                                <Text style={styles.errorMessage}>- All fields most be valid</Text>
                            </>
                        )
                }
            </View>
        </TouchableOpacity >
    </Modal >
);

export default WarningModal;

