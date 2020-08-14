import { useState } from 'react';

// takes in a callback to use when we want to submit our form
const useForm = (callback) => {

  // these are our form values that we'll use in other componenets
  const [values, setValues] = useState({});


  // 2 form function":

  const handleLogin = (event) => { // TODO: still needs to be completed.
    if (event) event.preventDefault();
    console.log('handleLogin has been clicked');
    callback(values);
  };
  
  const handleCreateAccount = (event) => {
    if (event) event.preventDefault();
    console.log('handleCreateAccount has been clicked');
    callback(values);
  };

  // const handleSubmit = (event) => {
  //   if (event) event.preventDefault();
  //   callback(values);
  // }

  const handleChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  // not returning JSX, but other fucntionality that we define above.
  return [
    // place getters and setter here
    values,
    handleChange,
    handleLogin,
    handleCreateAccount,
  ];
}

export default useForm;





