import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import AddNewExpense from './AddNewExpense';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = (show) => {
    setShowForm(show);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {showForm
        ? <ExpenseForm onShowForm={showFormHandler} onSaveExpenseData={saveExpenseDataHandler} />
        : <AddNewExpense onShowForm={showFormHandler} />
      }
    </div>
  );
}

export default NewExpense;