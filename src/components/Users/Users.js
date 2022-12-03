import React, { useState } from 'react';

import Card from '../UI/Card';
import Filter from './Filter';
import UserList from './UserList';
import ExpensesChart from './ExpensesChart';
import './Users.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <Filter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <UserList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
