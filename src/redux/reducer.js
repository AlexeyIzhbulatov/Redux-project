const initialState = {
    todos: [
        {
            id: Math.random(),
            title: 'First todo',
            done: true,
        }, {
            id: Math.random(),
            title: 'Second todo',
            done: false,
        }
    ]
};

const todo = (state = initialState, action) => {
    switch (action.type) {

        case 'TODO_ADD':
            return {
                ...state,
                todos: [...state.todos, { title: action.payload, done: false }]
            };

        case 'DELETE_TASK':
            const deleteTask = state.todos.filter(el => el.id !== action.payload)
            return {
                ...state,
                todos: deleteTask
            }
        case 'DONE_TASK':
           return {
               ...state,
               todos: state.todos.map(el => {
                   if(el.id === action.payload) return {...el, done: !el.done}
                   return el
               })
           }
        default:
            return state
    }
};

export default todo;
dadadadasdasdas