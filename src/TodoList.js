import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem.js';

const TodoList = (props) =>{
    const [todos, setTodos] = useState(props.todos)
    
    useEffect(() =>{
        setTodos(props.todos)
    }, [props.todos])

    const clearTodos  = () =>{
        props.setTodos([]);
        localStorage.removeItem('todos')
    }
    return(
        <div>
            <ul className="todo-list">
                {
                    todos.map(
                        (todo, i) => 
                        <TodoItem todo={todo} key={i} modifyTodo={props.modifyTodo} deleteTodo={props.deleteTodo} />
                        )
                }    
            </ul>
            <div className="text-center">
                {
                    props.todos.length === 0 ?
                        <small>Your Todo list is empty</small> :
                        <footer>
                            <span onClick={clearTodos} style={{cursor: 'pointer'}}>Clear All</span>
                        </footer>
                }    
            </div>        
        </div>
    )
}

export default TodoList;