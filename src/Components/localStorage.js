import React, { useEffect, useState } from 'react';
import { useFormData } from '../Contexts/FormContext';

function SaveData() {
    const { step1, step2, step3, step4, step5, step6, usersData, setUsersData } = useFormData();
    const { isRegistered } = step6;
    const { username } = step3;
  
    const newData = {
      [username]: {
        ...step1,
        ...step2,
        ...step3,
        ...step4,
        ...step5,
      },
    };
  
    useEffect(() => {

      if (isRegistered) {
        setUsersData((prev) => {
          return ({...newData, ...prev});
        });
      }

    }, []);
  
    useEffect(() => {
      let timeout;

      if (isRegistered) {
        timeout = setTimeout(() => {
          localStorage.setItem('usersData', JSON.stringify(usersData));
          console.log(usersData);
        }, 400);
      }

      return () => clearTimeout(timeout);
      
    }, [usersData]);
  
    return null; // or any other component if needed
}
  
export default SaveData;


