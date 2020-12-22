import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {Accountsummary} from './Components/Accountsummary';
import {Transactionhistory} from './Components/Transactionhistory';
import {Addtransaction} from './Components/Addtransaction';
import {GlobalProvider}from './Context/Globalstate';

function App() {
  
  return (
    <div>
    <GlobalProvider>
      
    
        <Header/>
        <Balance/>
        <Accountsummary/>
        <Transactionhistory/>
        <Addtransaction/>
      
    
    </GlobalProvider>
    </div>
  );
}

export default App;
