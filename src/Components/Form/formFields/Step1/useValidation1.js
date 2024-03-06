import React, {useEffect, useState} from "react"

function useValidation1 (firstName, lastName, dob, gender, email, phone) {
    const [isValid, setIsValid] = useState(false);

     // every method will return a boolean value
     const validateName = () => {
        let limit = false;
        if ((firstName.length < 50) && (lastName.length < 50)) limit = true;
        const alphabeticRegex = /^[A-Za-z]+$/;
        return limit && alphabeticRegex.test(firstName) && alphabeticRegex.test(lastName);
    }
    
    const validateDOB = () => {
        let currDate = new Date();
        let date = new Date(dob);
    
        if (currDate.getFullYear() > date.getFullYear()) {
            return true; // Birthdate has already occurred in a previous year
        } else if (currDate.getFullYear() === date.getFullYear()) {
            // Current year, check month and day
            if (currDate.getMonth() > date.getMonth()) {
                return true; // Birthdate month has already occurred
            } else if ((currDate.getMonth() === date.getMonth()) && (currDate.getDate() >= date.getDate())) {
                return true; // Birthdate month is the current month, and day has occurred or is today
            }
        }
         // Birthdate is in the future
    };
    
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    const validatePhone = () => {
         // Example: Allow numbers with or without dashes
        const phoneRegex = /^\d{10}$|^\d{3}-\d{3}-\d{4}$/;
        return phoneRegex.test(phone);
    }

    const allFilled = () => {
        if (firstName.trim() && lastName.trim() && dob.trim() && gender.trim() && email.trim() && phone.trim()) {
            return true;
        }
    }

    useEffect(() => {
        if (firstName && lastName && dob && gender && email && phone && validateName() && validateDOB() && validateEmail() && validatePhone() && allFilled()) {
            setIsValid(true);
        }else {
            // if (firstName && lastName && dob && gender && email && phone) {
                
            //         if (validateDOB() == false) {
            //             alert('enter DOB correctly');
            //         }
        
            //         if (validateName() == false) {
            //             alert('enter name correctly');
            //         }
        
            //         if (validateEmail()) {
            //             alert('enter email correctly');
            //         }
        
            //         if (validatePhone()) {
            //             alert('enter phone number correctly');
            //         }
                
            // }
        }
    }, [firstName, lastName, dob, gender, email, phone]);

    return isValid;

}

export default useValidation1;
