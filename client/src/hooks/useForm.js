// write your custom hook here to control your checkout form
import React, {useState} from 'react';

export const useForm = (initialValue, submitFn) => {
 const [values, setValues] = useState(initialValue) 

 const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFn();
  };

  return [values, handleChanges, handleSubmit]
}

