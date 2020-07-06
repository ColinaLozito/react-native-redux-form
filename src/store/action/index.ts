import {SAVE_FORM, EREASE_FORM} from './types';

const saveForm = (): any => ({
    type: SAVE_FORM,
    payload: {}
});

const ereaseForm = (): any => ({
    type: EREASE_FORM,
    payload: {}
});

export {saveForm, ereaseForm}
