import React, {useEffect, useState} from "react";

function useStep4 () {
    const [langPreferences, setLangPreferences] = useState('English');
    const [timezonePreferences, setTimezonePreferences] = useState('Pacific/Midway');
    const [communicationPreferences, setCommunicationPreferences] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        if(langPreferences && timezonePreferences && communicationPreferences) setIsFilled(true);
    }, [langPreferences, timezonePreferences, communicationPreferences]);
   
    const updateLangPreferences = (value) => {
        setLangPreferences(value);
    }

    const updateTimezonePreferences = (value) => {
        setTimezonePreferences(value);
    } 

    const updateCommunicationPreferences = (value) => {
        setCommunicationPreferences(value);
    }

    const step4 = {
        langPreferences,
        timezonePreferences,
        communicationPreferences,
        isFilled,
        methods: {
            updateLangPreferences,
            updateTimezonePreferences,
            updateCommunicationPreferences
        }
    }

    return step4;

}

export default useStep4;