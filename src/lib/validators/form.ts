// validate if all required inputs are filled
const allRequiredFilled = (formValues: any, itemList: any): boolean => {
    let isReady = true;
    itemList.forEach((inputObj: any)=>{
        if (inputObj.required &&
            !formValues[inputObj.type] ||
            (
                formValues[inputObj.type] &&
                formValues[inputObj.type].value === ''
            ))
            {
                isReady = false;
            }
    });
    return isReady;
};
// validate if inputs are validated and ready to go
const allFieldsValid  = (formValues: any): boolean => {
    let isReady = true;
    Object.keys(formValues).forEach((key: any) => {
        if (!formValues[key].valid) {
            isReady = false;
        }
    });
    return isReady;
};
// validate if all inputs that are required are filled and validated
const isFormReadyToSubmit = ({formValues, inputItems}: any): boolean => {
    if (allFieldsValid(formValues) && allRequiredFilled(formValues, inputItems)){
        return true;
    }
    return false;
};

export {allRequiredFilled, allFieldsValid, isFormReadyToSubmit};
