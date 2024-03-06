import React, {useState} from 'react'

function useStep6() {

    const [isRegistered, setIsRegistered] = useState(false);

    function updateIsRegistered (value) {
        setIsRegistered(true);
    }

    const step6 = {
        isRegistered,
        methods: {
            updateIsRegistered
        }
    }

    return step6;
}

export default useStep6
