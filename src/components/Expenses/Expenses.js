import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterYearHandler = year => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses
    .filter(expense => expense.date.getFullYear() === +filteredYear);

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onFilteredYear={filterYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;