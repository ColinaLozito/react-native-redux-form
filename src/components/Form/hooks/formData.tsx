import { useState } from 'react';
import {
    isValidEmail,
    isValidPhone,
    isValidSwedishSSN,
    isFormReadyToSubmit,
} from '../../../lib/validators';

export default (onSaveForm: ((obj: any) => any), onSubmit: (() => any), form: any, inputItems: any) => {
    const [formValues, setFormValues] = useState<any>({ ...form });
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean | null>(null);

    // validate input content depending of the type
    const inputValidation = (type: string, value: string): boolean => {
        switch (type) {
            case 'ssn':
                return isValidSwedishSSN(value);
            case 'phone':
                return isValidPhone(value);
            case 'email':
                return isValidEmail(value);
            default:
                return true;
        }
    };
    // on input change set value to the form state
    const handleFormValueChange = (key: string, value: string): any => {
        // send object to REDUX store
        onSaveForm(
            {
                ...formValues,
                [key]: {
                    value,
                    valid: null,
                },
            }
        );
        // set imput values into form state
        setFormValues(
            {
                ...formValues,
                [key]: {
                    value,
                    valid: key === 'country' ? true : null,
                },
            }
        );
    };
    // validate input value and set it into form state
    const handleFormValidate = (key: string, value: string) => {
        setFormValues(
            {
                ...formValues,
                [key]: {
                    value,
                    valid: inputValidation(key, value),
                },
            }
        );
    };
    // get max input length based on the type is the input
    const maxInputLength = (type: string): number => {
        switch (type) {
            case 'ssn':
                return 12;
            case 'phone':
                return 9;
            default:
                return 35;
        }
    };
    // select keyboard type based on the type
    const keyboardType = (type: string): string => {
        if (type === 'phone' || type === 'ssn') {
            return 'number-pad';
        }
        return 'default';
    };
    // handle submit button functionality
    const redyToSubmit = (): any => {
        delete formValues._persist;
        if (isFormReadyToSubmit({ formValues, inputItems })) {
            // if is good to submit
            setFormValues({});
            onSubmit();
            setSuccess(true);
            console.log('Success');
        } else {
            // if is false
            setSuccess(false);
        }
        setShowErrorModal(true);
    };

    return [
        success,
        formValues,
        showErrorModal,
        handleFormValueChange,
        handleFormValidate,
        maxInputLength,
        keyboardType,
        redyToSubmit,
        setShowErrorModal,
    ];
};
