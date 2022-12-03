import React from 'react';

import UserItem from './UserItem';
import './UserList.css';

const UserList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no user.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <UserItem
          key={expense.id}
          name={expense.name}
          type={expense.type}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default UserList;
