import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Alternative (*) Use ONE state to manage all form input values
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value)

    // Alternative (when use *)
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value,
    //   };
    // })
  };

  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);

    // Alternative (when use *)
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: e.target.value,
    //   };
    // });
  };

  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);

    // Alternative (when use *)
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: e.target.value,
    //   };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Cancela la regarga de la página cuando se hace click en el boton de envio del fomulario. (Evita que se envie la solicitud). 

    // Create object with data expense
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Pass data to parent component NewExpense.
    props.onSaveExpenseData(expenseData);

    // Clear inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__constrols'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
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
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;