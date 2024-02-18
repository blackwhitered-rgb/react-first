import React from 'react'
import {useSelector} from 'react-redux'

function Todos() {

    const todos = useSelector(state => state.todos)
    console.log(todos)
  return (
    <>
        <div>Todos</div>
        <ul>
        { 
            todos.map((todo) => {       
                <li key={todo.id}>{todo.text}</li>    
            })  
        }
        </ul>
    </>
  )
}

export default Todos