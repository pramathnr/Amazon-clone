import React, {createContext, useContext, useReducer} from "react";

//prepares the datalayer
export const StateContext = createContext();

//wrap our app and provide the datalayer
export const StateProvider = ({reducer, intialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the datalayer
export const useStateValue = ()=> useContext(StateContext);