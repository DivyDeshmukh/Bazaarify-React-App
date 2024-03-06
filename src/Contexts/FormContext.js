import React, {createContext, useContext} from "react";

const FormContext = createContext(
    {
        step1: {
            firstName: "",
            lastName: "",
            dob: '',
            gender: '',
            email: '',
            phone: '',
            isFilled: false,
            methods: {}
        }, 
    
        step2: {
            streetAddress: '',
            city: '',
            state: '',
            pinCode: '',
            country: '',
            isFilled: false,
            methods: {}
        },
    
        step3: {
            userName: '',
            password: '',
            confirmPassword: '',
            profilePic: '',
            isFilled: false,
            methods: {}
        },
    
        step4: {
            langPreferences: '',
            timezonePreferences: '',
            communicationPreferences: false,
            isFilled: false,
            methods: {}
        },
    
        step5: {
            occupation: '',
            companyName: '',
            website: '',
            agree: false,
            isFilled: false,
            methods: {}
        },

        step6: {
            isFilled: false,
            isRegistered: false
        },
    
    }
);

export const FormProvider = FormContext.Provider;

export function useFormData () {
    return useContext(FormContext);
}

