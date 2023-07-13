import React, {useState} from 'react';
import Data from '../../data.json';
// impo


export default function Todolist(){
    // const {tasks} = Data;
var [Tasks, setTasks] = useState( Data.tasks )
    
const addTask = () =>{
        // let sentence ;
        // e.preventDefault();
        // sentence = e.target.value;
        setTasks([...Tasks,{
            "id" :`${Tasks.id}` ,
            "task":"New sentence added"
        }])
    }
    console.log(Tasks);
    return (<>
     {/* <input className='border border-grey-300' type='text' onKeyDown={addTask}/> */}
     <button className='rounded-sm border border-black ml-2 mr-2 p-1' onClick={addTask}>Add +</button>
        <div className='w-screen h-screen bg-image'>
        {Tasks.map((i,a) => (<div className='border border-grey-200 rounded-sm text-center' key={a}>{i.task}</div>))}
        </div>
        
  </>  );
}