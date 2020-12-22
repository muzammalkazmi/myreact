import React,{useContext} from 'react'

import {GlobalContext} from '../Context/Globalstate'
export const Accountsummary=()=>{
    const{transactions}=useContext(GlobalContext);
    const transactionValue=transactions.map(transaction=>transactions.transactionAmount)
    const income=transactionValue
    .filter(transaction=>transaction>0)
    .reduce((acc,transactions)=>(acc+=transactions),0)
    .toFixed(2);
   const Expanses=Math.abs(transactionValue
    .filter(transaction=>transaction<0)
    .reduce((acc,transactions)=>(acc+=transactions),0)
    .toFixed(2));
    return(
        <div class="summary-container">
            
        <h3 className="income">Income<br/>{income}</h3>
        
         <h3 className="exp">Expanses<br/>{Expanses}</h3>
            
    
        </div>
    )
}