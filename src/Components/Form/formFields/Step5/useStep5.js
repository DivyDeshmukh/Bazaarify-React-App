import React, {useState, useEffect} from "react";

function useStep5 () {
    const [occupation, setOccupation] = useState('')
    const [companyName, setCompanyName] = useState('');
    const [website, setWebsite] = useState('NA');
    const [agree, setAgree] = useState(false);

    const [isFilled, setIsFilled] = useState(false);

    useEffect (() => {
        let check = (occupation && companyName && agree);
        (check) && setIsFilled(check);
    }, [occupation, companyName, agree]);

    const updateOccupation = (value) => {
        setOccupation(value);
    }

    const updateCompanyName = (value) => {
        setCompanyName (value);
    }

    const updateWebsite = (value) => {
        setWebsite(value);
    }

    const updateAgree = (value) => {
        setAgree(value);
    }

    const step5 = {
        occupation,
        companyName,
        website,
        agree,
        isFilled,
        methods: {
            updateOccupation,
            updateCompanyName,
            updateWebsite,
            updateAgree
        }
    }

    return step5;

}

export default useStep5;