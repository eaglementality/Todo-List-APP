import React, { useEffect, useReducer, createContext , useContext,useState } from 'react';
import { reducer } from './Reduce';
import Data from '../../data.json';


export const TodolistContext = createContext();


const initialState = {
  todos:Data.AllTasks,
  visibilityFilter: 'All',
  uid: '',
};

export default function AppContext({children}) {
 
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Darktheme, setDarktheme] = useState(true);
  const [Icon_light_and_dark, setIcon_light_and_dark] = useState(true);

  //    function to retrieve the todos from JSON file
  const getTodos = () => {
      dispatch({
        type: 'INITIALIZE_TODO',
        payload: {
          todos: Data.AllTasks,
          uid: 0
        },
      });
    
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodolistContext.Provider value={
        {   
            state,dispatch,
            Darktheme,setDarktheme,
            Icon_light_and_dark,setIcon_light_and_dark
        }}>
    {children}
    </TodolistContext.Provider>
  );
}
export const appProps = () => {
       return useContext(TodolistContext);
    }

















//Data Handler

