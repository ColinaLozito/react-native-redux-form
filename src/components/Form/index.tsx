import React from 'react';
import {
    View,
} from 'react-native';
import { connect } from 'react-redux';
import Input from '../../lib/components/Input';
import Button from '../../lib/components/Button';
import CustomPicker from '../../components/CustomPicker';
import CustomModal from './components/CustomModal';
import { getFormState, saveForm, ereaseForm } from '../../store/action';
import formData from './hooks/formData';

import styles from './styles';

interface Props {
    selectItems: Array<any>,
    inputItems: Array<any>
    form: any,
    onSubmit: () => any,
    onSaveForm: (obj: any) => any
}

interface InputItem {
    fieldType: string,
    type: string,
    label: string
}

const Form: React.FC<Props> = ({ selectItems, inputItems, form, onSubmit, onSaveForm }): JSX.Element => {

    // core of logic to handle form functionalities
    const [
        success,
        formValues,
        showErrorModal,
        handleFormValueChange,
        handleFormValidate,
        maxInputLength,
        keyboardType,
        redyToSubmit,
        setShowErrorModal,
    ] = formData(
        onSaveForm,
        onSubmit,
        form,
        inputItems
    );

    // render input list
    const inputList = (): any => inputItems.map((item: InputItem, pos: number) => {
        // validate this next 2 values
        const value = formValues[item.type] ? formValues[item.type].value : '';
        const valid = formValues[item.type] ? formValues[item.type].valid : null;

        // if input field type is equal input render regular input component
        if (item.fieldType === 'input') {
            return (
                <Input
                    key={pos}
                    label={item.label}
                    type={item.type}
                    value={value}
                    valid={valid}
                    maxLength={maxInputLength()}
                    keyboardType={keyboardType(item.type)}
                    handleFormValueChange={handleFormValueChange}
                    handleFormValidate={handleFormValidate}
                />
            );
        }
        // render custom picker component
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
                onSubmit={redyToSubmit}
            />
            <CustomModal
                success={success}
                setShowErrorModal={setShowErrorModal}
                visible={showErrorModal}
            />
        </View>
    );
};
// import redux elements
export default connect(
    getFormState,
    {
        onSaveForm: saveForm,
        onSubmit: ereaseForm,
    }
)(Form);
