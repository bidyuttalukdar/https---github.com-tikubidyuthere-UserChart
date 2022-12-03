import React from 'react';

import ExpenseDate from './Date';
import Card from '../UI/Card';
import './UserItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.name}</h2>
          <div className='expense-item__price'>{props.type}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
