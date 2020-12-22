import React,{useContext} from 'react';
import {GlobalContext}from '../Context/Globalstate'
export const Balance=()=>{
    const{transactions}=useContext(GlobalContext)
    return(
        <div className="balance">
        <h3>Available Balance</h3>
        <h1>{transactions}</h1>
        </div>
    )
}