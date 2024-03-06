import React, {useEffect, useState} from 'react';
import useValidation1 from './useValidation1';

function useStep1 () {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDOB] = useState(formattedDate);
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    let check;

    // everytime hooks must be called in same order and we cannot call hooks conditionally
    check = useValidation1(firstName, lastName, dob, gender, email, phone);

    // basically, we have created isFilled for overall validation and when user clicks fills all fields in a step properly then he can navigate to next field.
    
    useEffect(() => {
      if (check) {
        setIsFilled(true);
      }
    }, [firstName, lastName, dob, gender, email, phone, check]);
    
    const updateFirstName = (value) => {
        setFirstName(value);
    }

    const updateLastName = (value) => {
        setLastName(value);
    }

    const updatedob = (value) => {
        setDOB(value);
    }
    
    const updateGender = (value) => {
        setGender(value);
    }
    
    const updateEmail = (value) => {
        setEmail(value);
    }
    
    const updatePhone = (value) => {
        setPhone(value);
    }

    let step1 = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        formattedDate: formattedDate,
        gender: gender,
        email: email,
        phone: phone,
        isFilled,
        methods: {
            updateFirstName: updateFirstName,
            updateLastName: updateLastName,
            updatedob: updatedob,
            updateGender: updateGender,
            updateEmail: updateEmail,
            updatePhone: updatePhone
        }
    }

    return step1;

}

export default useStep1;