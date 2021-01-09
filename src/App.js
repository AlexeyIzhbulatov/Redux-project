import './App.css';
import React, {useState} from 'react'
import {connect} from 'react-redux'

function App(props) {
    const [task,setTask] = useState('')

    const ok = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2"
             viewBox="0 0 16 16">
            <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>)

    const no = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
        <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>)

    const addTask = () => {
        props.addTask(task)
        setTask('')
    }

  return (
    <div className="App">
        <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
<ul>
    {
        props.todo.map(el => <li key={el.title}>{el.title}
            {el.done ? <span>{ok}</span> : <span>{no}</span>}
        <button onClick={() => props.deleteTask(el.id)}>Delete</button>
            <button onClick={() => props.doneTask(el.id)}>Done</button>
        </li>)
    }
</ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
    todo: state.todos
})

const mapDispatchToProps = (dispatch) => ({
 addTask: (task) => dispatch({type: 'TODO_ADD', payload: task}),
    deleteTask: (del) => dispatch({type: 'DELETE_TASK', payload: del}),
    doneTask: (done) => dispatch({type: 'DONE_TASK', payload: done})
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
