export const TaskCard = ({id, active, done, title}) => {

    const MakeActive = () => {
        
    }

    return (

        <div className="px-5 py-4">
            <div className="flex items-center">
                <span className='flex items-center border border-zinc-400 rounded-full p-1.5'>
                    {active &&  <svg  xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="black" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>}                   
                </span>
                <span className="ml-3 flex-1">{title}</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                </span>
            </div>
        </div>

    );
} 