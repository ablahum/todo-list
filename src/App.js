import { useEffect, useState } from 'react'
import { Form, TodoList } from './components'

import './App.css'

function App() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []
  const [todos, setTodos] = useState(initialState)
  const [input, setInput] = useState('')
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />

        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
    </div>
  )
}

export default App
