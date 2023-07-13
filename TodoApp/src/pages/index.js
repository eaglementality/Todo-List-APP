import React, {useState, useEffect } from "react";
import { TaskCard } from "@/components/task-card";
import { appProps } from "@/utils/context";
import { Droppable, DragDropContext , } from "react-beautiful-dnd";
import {useTheme} from 'next-themes';

export function getFilteredTodos (todos, visibilityFilter){
    switch (visibilityFilter) {
      case 'All':
        return todos;
      case 'Completed':
        return todos.filter((t) => t.completed ); 
      
      case 'Active':
        return  todos.filter((t) => !t.completed);
        
      default:
        throw new Error(`Unknown filter: ${visibilityFilter}`);
    }
  };


export default function TodoApp(){
      
    const { 
        state, dispatch,
        Darktheme, setDarktheme, 
        Icon_light_and_dark, setIcon_light_and_dark,
     } = appProps();
    const { todos, visibilityFilter } = state;
    const icon_moon = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>;
    const icon_sun = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
    const [checkboxbg, setCheckboxbg] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    
    useEffect(() => {
      setIsBrowser(process.browser);
    }, []);

    const handleOndragEnd = (result) => {
        // Avoiding the error when moving the items out of their droppable area.
        if (!result.destination) return;
        const items = Array.from(todos);
        //Retrieving the item from its previous position
        const [reorderedItem] = items.splice(result.source.index, 1);
        
        //Drop the item at its new postition
        items.splice(result.destination.index, 0, reorderedItem);
        dispatch({
          type: 'SET_TODOS',
          payload: {
            todos: items,
          },
        });
      };



    const checkbg = () => {
       switch (checkboxbg){
        case false:
            setCheckboxbg(true);
            break;
        case true:
            setCheckboxbg(false);
            break;
       }
    }

    // const toggleLightAndDark = ()=>{
    //     switch (Icon_light_and_dark) {
            
    //         case false:
    //             setIcon_light_and_dark(true);
    //             setDarktheme(true);
    //             break;
    //         case true:
    //             setIcon_light_and_dark(false);
    //             setDarktheme(false);
    //             break;
          
    //     }
        
    // }
   
    
    const add_Task = ()=>{
        const inputValue = document.querySelector('#input');
        dispatch({type:'ADD_TODO', payload:inputValue.value});
        inputValue.value = ' ';
    }

    const clearcompleted=()=>{
        const clearcompleted = todos.filter(item => item.isComplete != true);
        dispatch({type:'CLEAR_COMPLETED', payload:clearcompleted})
    }
    const All_Task = () =>{ 
        dispatch({type:'SET_VISIBILITY', payload:'All'}) 
    }
     const active_Task = ()=>{
        dispatch({type:'SET_VISIBILITY', payload:'Active'})
    }
    const Completed_Task =()=>{
        dispatch({type:'SET_VISIBILITY', payload:'Completed'})
    }
    

    return(
    <main className= {`${Darktheme ? 'bg-zinc-100 text-black' : 'bg-Verydark text-white'} `}>
        <div id="first" className={`w-full h-75 ${Darktheme ? 'bg-image_light' : 'bg-image_dark'} px-6`}>
            <div  className="flex items-center justify-between pb-36 pt-12 ">
                <span className="text-todo font-bold text-3xl text-white tracking-space cursor-default">TODO</span>
                <span className="cursor-pointer" onClick={() => { 
                    if(theme == "dark" ){ 
                        setTheme('light')
                        setDarktheme(true)
                        } 
                    else{ 
                        setTheme("dark")
                        }}}>
                    {Icon_light_and_dark ? icon_moon : icon_sun}
                </span>
            </div>
        </div>
        <div id="first" className="flex flex-col rounded-lg  space-y-6 px-6 -mt-28">
            <div className={`flex items-center  w-full ${Darktheme ? 'bg-white text-black' : 'bg-dark text-white'}  rounded-md pl-5 py-3.5 px-5`}>
                <span onClick={checkbg} className={`flex cursor-pointer items-center border ${checkboxbg ? 'bg-gradient-to-r from-blue-400 from-90%  to-pink-400 to-10%  text-white':''} border-zinc-400 rounded-full `}>
                    <svg className="m-1.5" xmlns="http://www.w3.org/2000/svg" width="10" height="9"><path fill="none" stroke={`${checkboxbg?'white':''}`} strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
                </span>
                <input id="input"  type="text" name="taskname" className={`ml-3 w-full  rounded-md outline-none ${Darktheme ? ' ' : 'bg-dark'} border-none text-zinc-400 placeholder-zinc-400`} placeholder="Create a new todo..."/>
                <span onClick={add_Task} className="font-bold text-zinc-400 cursor-pointer text-xl">{'>>'}</span>
            </div>

                    { isBrowser ? (
                        <DragDropContext onDragEnd={handleOndragEnd}>
                            <Droppable droppableId="droppable-1">
                            {(provided) => {
                                return (
                                    <div
                                        role="list"
                                        className={`flex flex-col divide-y ${Darktheme ? 'bg-white text-black' : 'bg-dark text-white'} rounded-md`}
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                     {getFilteredTodos(todos,visibilityFilter).map(
                                        (todo, index) => (
                                            <TaskCard task={todo.task} key={index} id={todo.id} active={todo.isActive} isComplete={todo.isComplete} />
                                        )
                                        )}
                                        <div className="shadow-2xl px-5 text-zinc-400 pt-4 pb-5 flex justify-between">
                                            <span className="cursor-default">{todos.length} Items left</span>
                                            <span className="cursor-pointer" onClick={clearcompleted}>Clear completed</span>
                                        </div> 
                                        {provided.placeholder}
                                    </div>
                                    );
                            }}
                            </Droppable>
                        </DragDropContext>
                    ): null
                    }
          

            <div className={`shadow-2xl px-20 py-3.5 ${Darktheme ? 'bg-white text-black' : 'bg-dark text-white'}  rounded-md font-bold tracking-tight text-zinc-400 `}>
                <div className='flex justify-between'>
                    <span onClick={All_Task} className="text-blue-400 hover:text-blue-500 cursor-pointer" >All</span>
                    <span onClick={active_Task} className="hover:text-zinc-500 cursor-pointer" >Active</span>
                    <span onClick={Completed_Task} className="hover:text-zinc-500 cursor-pointer">Completed</span>
                </div>
            </div>
        </div>

        <p id="last" className="pt-10 pb-20 text-center font-normal text-zinc-400 text-sm">Drag and drop to reoder list</p>

    </main>
    );
        }
    
//integration[D[D[D[D[C[C[C[C
[A[C{!--[C[D[D[![C[C[C[C[C[C[C[C[C[C[C[C[D--}[D[D[D[C[C[D[D[D[D[D[D[D[D[D[D[D[D/*[C[C[[[C[C[C[C[C[C[C[C[C[C[C*/[D[D[D[D[D[C[C[C[C[C[C[D[D[D[D[D[D[D[D[D[D[D[[C[C[C[C[C[C[C[C[C[C[C[C[C

