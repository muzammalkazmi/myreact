import React,{useState} from 'react'

export const Addtransaction=()=>{
    const[description,setDescription]=useState('');
        const[amount,setAmount]=useState(0);
    return(
        
        <div className="full-form">
            <h3>Add new Transaction</h3>
            <form>
                <div>
                <label>Transaction Details</label><br/>
                <input type="text"
                 placeholder="Enter Details" 
                 id="description"
                  value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <div>
                <label>Transaction Amount</label><br/>
                <input type="number" 
                placeholder="Enter value"
                 id="amount" 
                 onChange={(e)=>{setAmount(e.target.value)}}
                 value={amount}/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}