import React, { useState } from 'react';

import './UserForm.css';

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredType, setEnteredType] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredName: '',
  //   enteredType: '',
  //   enteredDate: '',
  // });

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredName: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredName: event.target.value };
    // });
  };

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredType: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      type: enteredType,
      date: new Date(enteredDate),
    };

    props.onSaveUserData(userData);
    setEnteredName('');
    setEnteredType('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Type(Type 1, Type 2 and Type 3)</label>
          <input
            type='text'
            value={enteredType}
            onChange={typeChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
