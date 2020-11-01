import React from 'react'
export const Addtransaction=()=>{
    return(
        <div>
            <h3>Add new Transaction</h3>
            <form>
                <div>
                <label>Transaction Details</label>
                <input type="text" placeholder="Enter Details"/>
                </div>
                <div>
                <label>Transaction Amount</label>
                <input type="number" placeholder="Enter value"/>
                </div>
            </form>
        </div>
    )
}