import React, { useState } from "react";
import { TaskCard } from "@/components/task-card";
import Data from "../../data.json";



export default function TodoApp(){

    const [AllTasks, setAllTasks] = useState(() => Data.tasks);


    const GetAllTasks = () => {
        const userTasks = AllTasks.map(task => (
            <TaskCard
                id={task.id}
                active={task.isActive}
                done={task.lineThrough}
                title={task.task}
             />
        ))

        return userTasks;
    }
    
    return(
    <main className='h-screen w-screen bg-zinc-100'>
        <div className="w-full bg-image px-6">
            <div className="flex items-center justify-between pb-36 pt-12">
                <span className="text-todo font-bold text-2xl text-white tracking-widest">TODO</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
                </span>
            </div>
        </div>
        <div className="flex flex-col rounded-lg space-y-6 px-6 -mt-28">
            <div className="flex items-center w-full bg-white rounded-md pl-5 py-3.5 px-5">
                <span className='flex items-center bg-zinc-200 rounded-full p-1.5'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="black" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
                </span>
                <input type="text" name="taskname" className="ml-3 w-full rounded-md outline-none border-none text-zinc-400 placeholder-zinc-400" placeholder="Create a blah blah blah"/>
            </div>

            <div className="flex flex-col divide-y bg-white rounded-md">
                    {GetAllTasks()}
                    
                <div className="px-5 pt-4 pb-5 flex justify-between">
                    <span>5 Items left</span>
                    <span>Clear completed</span>
                </div>
            </div>

            <div className="px-20 py-3.5 bg-white rounded-md font-bold tracking-tight text-zinc-400">
                <div className='flex justify-between'>
                    <span>All</span>
                    <span>Active</span>
                    <span>Completed</span>
                </div>
            </div>
        </div>

        <p className="mt-10 mb-20 text-center font-normal text-zinc-400 text-sm tracking-tight">Drag and drop here</p>



    </main>
    );
        }
    
