import { appProps } from "@/context/context";

export const TaskCard = ({id, active, task, isComplete}) => {

    const {AllTasks, setAllTasks} = appProps();
   
    const MakeActive = () => {
        const ifActive = AllTasks.map(task => (task.id === id ? {...task, isActive: !task.isActive}: task))
        setAllTasks(ifActive);
    
    }

    const deleteTask = () => {
        setAllTasks(AllTasks.filter(item => item.id !== id));
        
    }

    const MarkAsDone = () => {
        const ifDone = AllTasks.map(task => (task.id === id ? {...task, isComplete: !task.isComplete}: task));
        setAllTasks(ifDone);
    }

// console.log(AllTasks);
    return (

        <div className="px-5 py-4">
            <div className="flex items-center">
                <button type="button" onClick={() => MakeActive()} className='flex items-center border  border-zinc-400 rounded-full p-2.5'>
                   {active && <svg className='' xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="black" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg> }                  
                </button>
                <p onClick={() => MarkAsDone()} className={`${isComplete ? "line-through decoration-slate-300 text-slate-300": ""} ml-3 flex-1`} >{task}</p>
                <button type="button" onClick={() => deleteTask()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                </button>
            </div>
        </div>

    );
} 