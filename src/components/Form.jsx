import { useEffect } from 'react'
import { v4 } from 'uuid'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const onChange = (event) => setInput(event.target.value)

  const onSubmit = (event) => {
    event.preventDefault()

    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: v4(),
          title: input,
          completed: false,
        },
      ])

      setInput('')
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (todo.id === id ? { title, id, completed } : todo))

    setTodos(newTodo)
    setEditTodo('')
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Enter a todo...' className='task-input' value={input} required onChange={onChange} />

      <button type='submit' className='button-add'>
        {editTodo ? 'OK' : 'Add'}
      </button>
    </form>
  )
}

export default Form
