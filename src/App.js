import React, { useState } from 'react';

import NewUser from './components/NewUsers/NewUser';
import Users from './components/Users/Users';
import './ownStyle.css';

// import { Pie } from "react-chartjs-2";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid,Tooltip, Legend} from 'recharts';
const DUMMY_User = [
  {
    id: 'e1',
    name: 'Bidyut Talukdar',
    type:"Type 1",
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2', 
    name: 'Modi',
    type: "Type 1",
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    name: 'Sonia',
    type: "Type 2",
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    name: 'Kejriwal',
    type: "Type 3",
    date: new Date(2021, 5, 12),
  },
];


const App = () => {
  const [users, setUsers] = useState(DUMMY_User);

  let count1=0;
  let count2=0;
  let count3=0;
  
  const resultCount=async()=>{
    let result =await users.map((a) => {
      if( a.type==="Type 1"){
        count1++;
      }else if( a.type === "Type 2"){
        count2++;
      }else{
        count3++;
      }
      return "";
    });  
  }

  resultCount();

  // Sample data
  const data = [
    {name: 'Type 1', value: count1},
    {name: 'Type 2', value: count2},
    {name: 'Type 3', value: count3},
  ];
  
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
      <div className='style-for-chart'>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" outerRadius={100} fill="blue" label />
        </PieChart>
        <BarChart
            className='bar-styling'
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
      </div>
    </div>
  );
};

export default App;

