import { useState } from 'react';
import { isValidEmail, isValidPhone, isValidSwedishSSN } from '../../lib/validators';

export default (values: any, onSaveForm: ((obj: any) => any), form: any) => {
    const [formValues, setFormValues] = useState<any>({
        ...form,
    });

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

    const handleFormValueChange = (key: string, value: string): any => {
        onSaveForm(
            {
                ...formValues,
                [key]: {
                    value,
                    valid: null,
                },
            }
        );
        setFormValues(
            {
                ...formValues,
                [key]: {
                    value,
                    valid: null,
                },
            }
        );
    };

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

    const maxInputLengh = (type: string): number => {
        switch (type) {
            case 'ssn':
                return 12;
            case 'phone':
                return 9;
            default:
                return 35;
        }
    };

    const keyboardType = (type: string): string => {
        if (type === 'phone' || type === 'ssn') {
            return 'number-pad';
        }
        return 'default';
    };

    return [
        formValues,
        handleFormValueChange,
        setFormValues,
        handleFormValidate,
        maxInputLengh,
        keyboardType,
    ];
};
