import { useContext, createContext, useState, useEffect } from "react";
import Data from "../../data.json";


const TodolistContext = createContext();

export default function AppContext({children}){

    const [AllTasks, setAllTasks] = useState(Data.AllTasks);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        switch (filter) {
            case 'all':
                setAllTasks([...AllTasks])
                break;

            case 'active':
                setAllTasks(AllTasks.filter(task => (task.isActive === true)))
                break;
                
            case 'completed':
                setAllTasks(AllTasks.filter(task => (task.isComplete === true)))
                break;
            default:
                setAllTasks(AllTasks)
                break;
        }
    }, [filter]);



    return (

        <TodolistContext.Provider
            value={{
                AllTasks, setAllTasks,
                filter, setFilter
            }}
        >
            {children}
        </TodolistContext.Provider>

    )
}


export const appProps = () => {
    return useContext(TodolistContext)
}




