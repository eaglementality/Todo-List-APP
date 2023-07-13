export const reducer = (state, action) => {
  
  // This is our state that we are passing througn the whole app{todo,visibilityFilter}
  const { todos, visibilityFilter, uid } = state;
  
  switch (action.type) {
    case 'INITIALIZE_TODO':
      return {
        todos: action.payload.todos,
        visibilityFilter,
        uid: action.payload.uid,
      };
    case 'ADD_TODO': {
      const todo = [
        {
          id: Math.random().toString(16).substring(2),
          task:action.payload,
          isActive:false,
          isComplete: false,
        },
        ...todos,
      ];
      return {
        todos: todo,
        visibilityFilter,
        uid,
      };
    }
    case 'DELETE_TODO': { 
      return {
        todos: action.payload,
        visibilityFilter,
        uid,
      };
    }
    
    case 'CLEAR_COMPLETED': { 
      return {
        todos: action.payload,
        visibilityFilter,
        uid,
      };
    }
    case 'MAKE_ACTIVE':
      return {
        todos: action.payload,
        visibilityFilter,
      };
    case 'MARK_AS_DONE':
      return{
        todos:action.payload,
        visibilityFilter
      }
    case 'SET_VISIBILITY':
      return {
        todos: todos,
        visibilityFilter: action.payload,
      };
    
    case 'SET_TODOS':
      return {
        todos: action.payload.todos,
        visibilityFilter,
        uid,
      };
    
    default:
      return state;
  }
};
