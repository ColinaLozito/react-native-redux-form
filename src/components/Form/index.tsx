import React, { useState } from 'react';
import {
    View,
} from 'react-native';
import { connect } from 'react-redux';
import Input from '../../lib/components/Input';
import Button from '../../lib/components/Button';
import CustomPicker from '../../components/CustomPicker';
import WarningModal from './WarningModal';
import { getFormState, saveForm, ereaseForm } from '../../store/action';

import formData from './formData';

import styles from './styles';

interface Form {
    ssn?: string | null | undefined,
    phone?: string | null | undefined,
    email?: string | null | undefined,
    country?: string | null | undefined
}

interface Props {
    selectItems: Array<any>,
    inputItems: Array<any>
    form?: any | Form,
    onSubmit: () => any,
    onSaveForm: (obj: any) => any
}

interface InputItem {
    fieldType: string,
    type: string,
    label: string
}

const Form: React.FC<Props> = ({ selectItems, inputItems, form, onSubmit, onSaveForm }): any => {
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

    const [
        formValues,
        handleFormValueChange,
        setFormValues,
        handleFormValidate,
        maxInputLengh,
        keyboardType,
    ] = formData({}, onSaveForm, form);



    const inputList = (): any => inputItems.map((item: InputItem, pos: number) => {
        const value = formValues[item.type] ? formValues[item.type].value : '';
        const valid = formValues[item.type] ? formValues[item.type].valid : null;
        if (item.fieldType === 'input') {
            return (
                <Input
                    key={pos}
                    label={item.label}
                    type={item.type}
                    value={value}
                    valid={valid}
                    maxLength={maxInputLengh()}
                    keyboardType={keyboardType(item.type)}
                    handleFormValueChange={handleFormValueChange}
                    handleFormValidate={handleFormValidate}
                />
            );
        }
        return <CustomPicker
            key={pos}
            label={item.label}
            items={selectItems}
            warn={false}
            type={item.type}
            value={value}
            handleFormValueChange={handleFormValueChange}
        />;
    });

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
                {inputList()}
            </View>
            <Button
                label="submit"
                onSubmit={() => setShowErrorModal(true)}
                setFormValues={setFormValues}
            />
            <WarningModal setShowErrorModal={setShowErrorModal} visible={showErrorModal} />
        </View>
    );
};

Form.defaultProps = {
    onSubmit: () => null,
    onSaveForm: () => null,
};


export default connect(
    getFormState,
    {
        onSaveForm: saveForm,
        onSubmit: ereaseForm,
    }
)(Form);
