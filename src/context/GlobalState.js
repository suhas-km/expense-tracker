import React, { createContext, useReducer } from "react"; // createContext and useReducer are imported from react
import AppReducer from './AppReducer';

//Initial State

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState); // createContext is used to create a context object. This context object is used to pass the data to

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); // useReducer is a hook that is used for state management. It is an alternative to useState. It is used when the state logic is complex and involves multiple sub-values or when the next state depends on the previous one. useReducer accepts two arguments: a reducer function and an initial state. It returns an array with two elements: the current state and a dispatch function. Here, AppReducer is the reducer function and initialState is the initial state.

    // actions 
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
