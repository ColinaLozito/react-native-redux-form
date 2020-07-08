const isValidSwedishSSN = (ssn: string) => {
    const formatedSSN = ssn
        .replace(/\D/g, '')     // strip out all but digits
        .split('')              // convert string to array
        .reverse()              // reverse order
        .slice(0, 10);          // keep only 10 digits (i.e. 1977 becomes 77)

    // doublecheck validation verify we got 10 digits, otherwise it is invalid
    if (formatedSSN.length !== 10) {
        return false;
    }

    // convert to number
    const sum: number = formatedSSN
        .map((num) => {
            return Number(num);
        })
        // perform arithmetic and return sum
        .reduce((previous: number, current: number, index: number) => {
            // multiply every other number with two
            if (index % 2){
                current *= 2;
            }
            // if larger than 10 get sum of individual digits (also n-9)
            if (current > 9){
                current -= 9;
            }
            // sum it up
            return previous + current;
        });

    // sum must be divisible by 10
    return sum % 10 === 0;
};

export default isValidSwedishSSN;
