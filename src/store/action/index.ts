import {SAVE_FORM, EREASE_FORM} from './types';

interface FormValue {
    inputKey: string,
    inputValue: string
}

const getFormState = ({form}: any): any => ({form});

const saveForm = (value: FormValue): any =>({
    type: SAVE_FORM,
    payload: {
        value,
    },
});

const ereaseForm = (): any => ({
    type: EREASE_FORM,
    payload: {},
});

export {getFormState, saveForm, ereaseForm};
