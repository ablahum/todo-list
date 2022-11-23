const Button = ({ type, handler }) => {
  const iconType = () => {
    switch (type) {
      case 'complete':
        return <i className='fa fa-check-circle'></i>
        break
      case 'edit':
        return <i className='fa fa-edit'></i>
        break
      case 'delete':
        return <i className='fa fa-trash'></i>
        break

      default:
        return <h1>No project match</h1>
    }
  }

  // console.log(iconType)

  return (
    <button className={`button-${type} task-button`} onClick={() => handler()}>
      {iconType}
    </button>
  )
}

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }

        return item
      })
    )
  }

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id)

    setEditTodo(findTodo)
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input type='text' value={todo.title} className={` list ${todo.completed ? 'complete' : ''}`} onChange={(e) => e.preventDefault()} />

          <Button type='complete' handler={handleComplete(todo)} />

          {/* <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
            <i className='fa fa-check-circle'></i>
          </button> */}

          <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
            <i className='fa fa-edit'></i>
          </button>

          <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
            <i className='fa fa-trash'></i>
          </button>
        </li>
      ))}
    </>
  )
}

export default TodoList
