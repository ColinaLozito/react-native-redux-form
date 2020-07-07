import {SAVE_FORM, EREASE_FORM, SAVE_COUNTRIES} from './types';

interface FormValue {
    inputKey: string,
    inputValue: string
}

const getFormState = ({form}: any): any => ({form});

const getCountries = ({countries}: any): any => ({countries});

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

const saveCountries = () => ({
    type: SAVE_COUNTRIES,
    payload: {},
});

export {getFormState, saveForm, ereaseForm, saveCountries, getCountries};
