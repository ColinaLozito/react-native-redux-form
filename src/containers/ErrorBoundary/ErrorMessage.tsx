import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Fnc = React.FC;

const ErrorMessage: Fnc = () => (
    <View style={styles.container}>
        <Text style={styles.message}>Something went wrong.</Text>
    </View>
);

export default ErrorMessage;
