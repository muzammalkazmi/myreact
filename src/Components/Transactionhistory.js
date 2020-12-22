import React,{useContext} from 'react'
import {GlobalContext} from '../Context/Globalstate'
import {Transaction} from './Transaction'
export const Transactionhistory=()=>{
    const{transactions}=useContext(GlobalContext);
    console.log(transactions)
    return(
        <div >
            <h3>Transaction Detail</h3>
            
                  <ul className="history-list">
            {transactions.map(transaction=>(
                <Transaction key={transaction.id} transaction={transaction}/>
            ))}
        </ul>
        </div>
            
        
            
        
        
      
        
    
       
        
        
    )
}