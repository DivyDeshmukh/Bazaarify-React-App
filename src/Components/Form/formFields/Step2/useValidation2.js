import React, {useEffect, useState} from "react";

function useValidation2 (streetAddress, city,state, PIN, country) {
    const [isValid, setIsValid] = useState(false);

    // ensure that each method returns false as well to check which method is false and based on that we will show error messages.

    const validateText = () => {

        let limit = false;
        if ((streetAddress.length < 100) && (city.length < 100) && (state.length < 100) && (country.length < 100)) limit = true;
        const alphabeticRegex = /^[A-Za-z ]+$/;
        return limit && alphabeticRegex.test(streetAddress) && alphabeticRegex.test(city) && alphabeticRegex.test(state) && alphabeticRegex.test(country);
    }

    const validatePIN = () => {
        // the PIN will be in string even if its input type is number but its length will be a number.
        if(PIN.length === 6) {
            return true
        }
    }

    useEffect(() => {
        if (streetAddress && city && state && PIN && validateText() && validatePIN()) {
            setIsValid(true);
        }else {

        }
    }, [streetAddress, city, state, PIN, country]);

    return isValid;
}

export default useValidation2;