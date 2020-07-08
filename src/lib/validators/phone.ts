const validatePhone = (phone: string): boolean => {
    // swedish phone number regex
    const regex = /^([+]46)\s*(7[0236])\s*(\d{4})\s*(\d{3})$/;
    return regex.test(phone);
};

const isValidPhone = (phone: string): boolean => {
    if (validatePhone(phone)){
        return true;
    }
    return false;
};

export default isValidPhone;
