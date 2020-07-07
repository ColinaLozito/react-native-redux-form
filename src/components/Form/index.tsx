import React from 'react';
import {
    View,
} from 'react-native';
import Input from '../../lib/components/Input';
import CustomPicker from '../../components/CustomPicker';

import styles from './styles';

interface Props {
    selectItems: Array<any>,
    inputItems: Array<any>
}

interface InputItem {
    fieldType: string,
    type: string,
    label: string
}

const Form: React.FC<Props> = ({ selectItems, inputItems }): any => {

    const InputList = (): any => inputItems.map((item: InputItem, pos: number) => {
        if (item.fieldType === 'input') {
            return <Input key={pos} label={item.label} type={item.type} />;
        }
        return <CustomPicker
            key={pos}
            label={item.label}
            items={selectItems}
            warn={false}
        />;
    });

    return (
        <View style={styles.formContainer}>
            <InputList />
        </View>
    );
};

export default Form;
