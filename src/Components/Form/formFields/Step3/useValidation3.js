import React, {useEffect, useState} from "react";

// here, we are calling a hook not prop so parameters must be in same order to receive correct arguments.

function useValidation3 (username, password, confirmPassword, imgSrc) {
    
    const [isValid, setIsValid] = useState(false);

    const validateUsername = () => {

        if (!username) return false;

        let limit = false;
        if (username.length > 2 && username.length < 50) limit = true;

        let alphabeticRegex = /^[a-zA-Z0-9_]+$/;
        // console.log(limit, alphabeticRegex.test(username));
        return limit && alphabeticRegex.test(username);
    }

    const validatePassword = () => {
        let lengthCheck = false;
        let equalityCheck;

        if (
            password.length >= 8 &&
            password.length <= 72 &&
            confirmPassword.length >= 8 &&
            confirmPassword.length <= 72
          ) {
            lengthCheck = true;
        }
        
        if (password.toLowerCase() === confirmPassword.toLowerCase()) {
            equalityCheck = true;
        }

        return lengthCheck && equalityCheck;
    }

    useEffect (() => {
        if (username && password && confirmPassword && validateUsername() && validatePassword()) {
            setIsValid(true);
            // console.log(imgSrc);
        }else {
            // console.log(imgSrc);
        }
    }, [username, password, confirmPassword]);

    return isValid;
}

export default useValidation3;

