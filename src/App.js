import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {Accountsummary} from './Components/Accountsummary';
import {Transactionhistory} from './Components/Transactionhistory';
import {Addtransaction} from './Components/Addtransaction';

function App() {
  return (<
    div className="fullContainer">
        <Header/>
        <Balance/>
        <Accountsummary/>
        <Transactionhistory/>
        <Addtransaction/>
      
    </div>
  );
}

export default App;
