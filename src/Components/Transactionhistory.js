import React from 'react'
export const Transactionhistory=()=>{
    return(
        <div>
        <h3>Transaction Detail</h3>
        <ul>
            <li>Income received from project</li>
            <span>$10,000</span>
            <button class="delete">X</button>
            <li>Salary paid to staff</li>
            <span>$2000</span>
            <button class="delete">X</button>
        </ul>
        </div>
    )
}