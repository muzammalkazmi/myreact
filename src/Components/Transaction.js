import React from 'react'
export const Transaction=({transactions})=>{
    const sign=transactions.transactionAmount>0?'+':'-';
    // const transactionType=transactions.transactionAmount>0?'Plus':'Minus'
    return(
    <li className='transactionType'>
    {transactions.description}
   <span>{sign}${Math.abs(transactions.amount)}</span>
   <button className='delete-btn'>X</button>
   </li>

    )
}