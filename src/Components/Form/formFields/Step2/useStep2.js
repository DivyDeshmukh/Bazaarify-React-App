import React, {useState, useEffect} from "react";
import useValidation2 from "./useValidation2";

function useStep2 () {
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('Andaman and Nicobar Islands');
    const [PIN, setPIN] = useState('');
    const [country, setCountry] = useState('');
    const [isFilled, setIsFilled] = useState(false);

    let check = useValidation2(streetAddress, city, state, PIN, country);

    useEffect(() => {
        if(check) {
            setIsFilled(true);
        }
    }, [check]);

    const updateStreetAddress = (value) => {
        setStreetAddress(value);
    }
    
    const updateCity = (value) => {
        setCity(value);
    }
    
    const updateState = (value) => {
        setState(value);
    }
    
    const updatePIN = (value) => {
        setPIN(value);
    }
    
    const updateCountry = (value) => {
        setCountry(value);
    }

    const step2 = {
        streetAddress: streetAddress,
        city: city,
        state: state,
        PIN: PIN,
        country: country,
        isFilled,
        methods: {
            updateStreetAddress: updateStreetAddress,
            updateCity: updateCity,
            updateState: updateState,
            updatePIN: updatePIN,
            updateCountry: updateCountry
        }
    }

    return step2;
}

export default useStep2;