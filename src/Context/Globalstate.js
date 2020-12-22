import React,{createContext,useReducer}from 'react';
import AppReducer from './AppReducer';
const initialState={
    transactions:[
        {id:1,description:'project 1 income',transactionAmount:10000},
        {id:2,description:'project 2 income',transactionAmpunt:3000},
        {id:3,description:'project 3 salary',transactionAmount:-2000},
        {id:4,description:'project 4 salary',transactionAmount:-4000}

    ]
}
export const GlobalContext=createContext(initialState);
//create a provider for GlobalState
export const GlobalProvider=({Children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState)
    function deltrans(id){
        dispatch({
            type:'Delete_Transaction',
            payload:id

        })
    }
    return(
        <GlobalContext.Provider value={
            {transactions:state.transactions,
                deltrans
            }
        }>
        {Children}
        </GlobalContext.Provider>
    )
}