import { useState } from 'react';

export default (values: any) => {
    const [formValues, setFormValues] = useState<any>({
        ...values,
    });

    const handleFormValueChange = (key: string, value: string) => {
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
