import { appProps } from "@/utils/context";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({id, active, task, isComplete}) => {
    const {state , dispatch}= appProps();
    
    const MakeActive = () => {
        const ifActive = state.todos.map(task => (task.id === id ? {...task, isActive: !task.isActive}: task))
        dispatch({type:'MAKE_ACTIVE', payload:ifActive});
    }

    const deleteTask = () => {
        const deletedTask = state.todos.filter(item => item.id !== id);
        dispatch({type:'DELETE_TODO',payload:deletedTask}); 
    }

    const MarkAsDone = () => {
        const ifDone = state.todos.map(task => (task.id === id ? {...task, isComplete: !task.isComplete}: task));
        dispatch({type:'MARK_AS_DONE', payload:ifDone})
    }

    return (
        <Draggable draggableId={`${id}`} index={id} >
             {(provided) => {
                return (
                    <div className="px-5 py-4"  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div  className="flex items-center">
                            <button type="button" onClick={() => MakeActive()} className={`${active ? 'bg-gradient-to-r from-blue-400 from-90%  to-pink-400 to-10%  text-white':''} flex items-center border  border-zinc-400 rounded-full`}>
                                <svg className='m-1.5' xmlns="http://www.w3.org/2000/svg" width="10" height="9"><path fill="none" stroke={`${active?"white":" "}`} strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>                  
                            </button>
                            <p onClick={() => MarkAsDone()} className={`${isComplete ? "line-through decoration-slate-400 text-slate-400": ""} ml-3 flex-1`} >{task}</p>
                            <button  type="button" onClick={() => deleteTask()}>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                            </button>
                        </div>
                    </div>
                    )
             }}
        </Draggable>
    );
} 