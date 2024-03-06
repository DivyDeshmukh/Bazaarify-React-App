import React, {useState, useEffect} from "react";
import useValidation3 from './useValidation3'

function useStep3 () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [isFilled, setIsFilled] = useState(false);

    let check = useValidation3(username, password, confirmPassword, imgSrc);

    useEffect(() => {
        
        if(check) {
            setIsFilled(true);
        }
    }, [check]);

    const updateUsername = (value) => {
        setUsername(value);
    }
    
    const updatePassword = (value) => {
        setPassword(value);
    }
    
    const updateConfirmPassword = (value) => {
        setConfirmPassword(value);
    }
    
    const updateImgSrc = (value) => {
        setImgSrc(value);
    }

    //  According to new syntax if prop name and variable name are same then we can just write the prop name, language will automatically assign value. This syntax is a convenient way to create objects when the property names match the variable names.

    const step3 = {
        username,
        password,
        confirmPassword,
        imgSrc,
        isFilled,
        methods: {
            updateUsername,
            updatePassword,
            updateConfirmPassword,
            updateImgSrc
        }
    }

    return step3;

}

export default useStep3;

