import { useState } from 'react';

export default (values: any, onSaveForm: ((obj: any) => any)) => {
    const [formValues, setFormValues] = useState<any>({
        ...values,
    });

    const handleFormValueChange = (key: string, value: string) => {
        onSaveForm(
            {
                ...formValues,
                [key]: value,
            }
        );
        setFormValues(
            {
                ...formValues,
                [key]: value,
            }
        );
    };

    return [
        formValues,
        handleFormValueChange,
        setFormValues,
    ];
};
