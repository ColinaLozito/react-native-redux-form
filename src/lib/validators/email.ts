const validateEmail = (email:string): boolean => {
    // regular email regex
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

const isValidEmail = (email: string): any => {
    if (validateEmail(email)) {
        return true;
    }
    return false;
};

export default isValidEmail;
