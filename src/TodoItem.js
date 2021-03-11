import React, { useEffect, useState } from 'react'

let TodoItem = (props) =>{
    const [status, setStatus] = useState(props.todo.status)

    useEffect(()=>{
        setStatus(props.todo.status)
    }, [props.todo])
    const toggle = (e) =>{
        console.log(props.todo.id)
        props.modifyTodo(props.todo)
    }

    const deleteItem = () => {
        // console.log(props.todo.id)
        props.deleteTodo(props.todo)
    }
    return(
        <li className={`todo-item ${status === 'noncompleted' ? "" : "todo-completed"}`}>
            <span>{props.todo.title}</span>
            <span>
                <button onClick={toggle}><i className="fa fa-check"></i></button>
                <button onClick={deleteItem}><i className="fa fa-trash"></i></button>
            </span>
        </li>
    )
}
export default TodoItem;